const AWS = require('aws-sdk');
const uuid = require('uuid');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.DYNAMODB_TABLE;

// Validate input
const validateInput = (data) => {
  if (!data.title || !data.amount || !data.date || !data.category) {
    throw new Error('Missing required fields: title, amount, date, category');
  }
};

// Add an expense
module.exports.addExpense = async (event) => {
  const data = JSON.parse(event.body);
  
  try {
    validateInput(data);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }

  const expense = {
    id: uuid.v4(),
    title: data.title,
    amount: parseFloat(data.amount),
    date: data.date,
    category: data.category,
  };

  const params = {
    TableName: TABLE_NAME,
    Item: expense,
  };

  try {
    await dynamoDb.put(params).promise();
    return {
      statusCode: 201,
      body: JSON.stringify(expense),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not add expense' }),
    };
  }
};

// Get all expenses or filter by date
module.exports.getExpenses = async (event) => {
  const params = {
    TableName: TABLE_NAME,
  };

  const { startDate, endDate } = event.queryStringParameters || {};

  if (startDate && endDate) {
    params.FilterExpression = 'date BETWEEN :startDate AND :endDate';
    params.ExpressionAttributeValues = {
      ':startDate': startDate,
      ':endDate': endDate,
    };
  }

  try {
    const result = await dynamoDb.scan(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not retrieve expenses' }),
    };
  }
};

// Update an expense
module.exports.updateExpense = async (event) => {
  const data = JSON.parse(event.body);
  const { id, title, amount, date, category } = data;

  const params = {
    TableName: TABLE_NAME,
    Key: { id },
    UpdateExpression: 'set title = :title, amount = :amount, date = :date, category = :category',
    ExpressionAttributeValues: {
      ':title': title,
      ':amount': parseFloat(amount),
      ':date': date,
      ':category': category,
    },
    ReturnValues: 'ALL_NEW',
  };

  try {
    const result = await dynamoDb.update(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(result.Attributes),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not update expense' }),
    };
  }
};

// Delete an expense
module.exports.deleteExpense = async (event) => {
  const { id } = event.pathParameters;

  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };

  try {
    await dynamoDb.delete(params).promise();
    return {
      statusCode: 204,
      body: null,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not delete expense' }),
    };
  }
};
