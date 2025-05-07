'use strict';

const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const TABLE = 'expenses-tracker-frontend-isha';

module.exports.addExpense = async (event) => {
  const { userId, amount, category, date, note } = JSON.parse(event.body);
  const expenseId = uuidv4();

  const item = {
    userId,
    expenseId,
    amount,
    category,
    date,
    note,
  };

  await dynamoDb.put({
    TableName: TABLE,
    Item: item,
  }).promise();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify({ message: 'Expense added', item }),
  };
};

module.exports.getExpenses = async (event) => {
  const userId = event.queryStringParameters.userId;

  const result = await dynamoDb.query({
    TableName: TABLE,
    KeyConditionExpression: 'userId = :uid',
    ExpressionAttributeValues: {
      ':uid': userId,
    },
  }).promise();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(result.Items),
  };
};

module.exports.deleteExpense = async (event) => {
  const { userId, expenseId } = JSON.parse(event.body);

  await dynamoDb.delete({
    TableName: TABLE,
    Key: { userId, expenseId },
  }).promise();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify({ message: 'Expense deleted' }),
  };
};
