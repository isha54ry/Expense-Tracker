# Expense-Tracker
The Expense Tracker is a serverless application designed to help users manage their personal finances by tracking their expenses. Built using AWS services, this application provides an efficient and user-friendly interface for managing financial data.
Features:

1.Add, delete, and view expenses easily.
2.Each expense can include a description, amount, and date.
3.Secure and scalable, utilizing AWS Lambda for backend processing.

Technologies Used:

1.AWS Lambda
2.API Gateway
3.Node.js
4.Serverless Framework

How to Run:

1.Clone the repository.
2.Install dependencies using npm install.
3.Configure AWS credentials.
4.Deploy the application with serverless deploy.

API Endpoints:

- **POST**: [Add Expense](https://65dce73iq9.execute-api.us-east-1.amazonaws.com/dev/expenses) - Use this endpoint to add a new expense by providing details such as the amount and description.

- **GET**: [Retrieve Expenses](https://65dce73iq9.execute-api.us-east-1.amazonaws.com/dev/expenses) - Fetch all recorded expenses to view your financial data.
- **PUT**: [Update Expense](https://65dce73iq9.execute-api.us-east-1.amazonaws.com/dev/expenses/{id}) - Update an existing expense by specifying the expense ID and the new details.
- **DELETE**: [Delete Expense](https://65dce73iq9.execute-api.us-east-1.amazonaws.com/dev/expenses/{id}) - Remove an expense from your records by using its ID.


## Live Version
Access the live application [here](https://65dce73iq9.execute-api.us-east-1.amazonaws.com/dev/expenses).


