# Expense Tracker

This is a simple **Expense Tracker** project built with React for the frontend and deployed using AWS Lambda and DynamoDB for the backend. It helps users track their expenses, add, view, and delete entries in a user-friendly interface.

## Features

- **Add Expense:** Allows users to add a new expense entry with details such as amount, category, date, and note.
- **View Expenses:** Displays the list of expenses for a specific user.
- **Delete Expense:** Lets users remove an expense entry.

## Tech Stack

- **Frontend:** React, Axios
- **Backend:** AWS Lambda, API Gateway, DynamoDB
- **Styling:** CSS for layout, Bootstrap or other libraries for UI

## Getting Started

### Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js** (v14.x or higher)  
- **AWS CLI** (for deployment)
- **Serverless Framework** (for deployment)
- **Git** (for version control)
- **npm** or **yarn** (for package management)
- 

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   cd expense-tracker
   Obtain your API URLs:
After deploying, you'll get the API Gateway endpoints for your Lambda functions. These endpoints are needed for the frontend to communicate with the backend.
2. **Obtain your API URLs:**  
   After deploying, you will get the API Gateway endpoints for your Lambda functions. These URLs are necessary for the frontend to communicate with the backend. Check the output in your terminal for the API URLs.

3. **Update the Frontend API Configuration:**  
   In the `frontend/src/api.js` file, replace the placeholder URLs with the actual API Gateway endpoints you obtained after deployment. The URLs should look similar to:

   ```js
   const API = {
     addExpenseUrl: "https://<api-id>.execute-api.<region>.amazonaws.com/dev/add-expense",
     getExpensesUrl: "https://<api-id>.execute-api.<region>.amazonaws.com/dev/get-expenses",
     deleteExpenseUrl: "https://<api-id>.execute-api.<region>.amazonaws.com/dev/delete-expense",
   };
4. **Start the Frontend Development Server:**  
   Once the API URLs are updated, navigate to the `frontend` directory and run the following command to start the development server:

   ```bash
   npm start
5. **Access the Expense Tracker Application:**  
   Once the development server is up, open your browser and go to `http://localhost:3000`. You should see the Expense Tracker application running and accessible.

6. **Enter a User ID:**  
   When prompted, enter a `userId`. This is a unique identifier for each user. You can input any random string for testing purposes (e.g., `user123` or `exampleUserId`). This helps differentiate between different users' expenses within the application.

7. **Add Expenses:**  
   - After entering the `userId`, you can add your expenses by filling out the expense form. The form requires the following fields:
     - **Amount**: The amount of the expense.
     - **Category**: The type of the expense (e.g., Food, Travel, Entertainment, etc.).
     - **Date**: The date the expense was made.
     - **Note**: A description or additional details about the expense (optional).
   - Once you’ve filled in the details, click the "Add Expense" button. The expense will be added to the backend system and displayed on the screen.
     
Here's a sample of my code running perfectly fine on the terminal, although I keep updating my work as I learn more!

![Screenshot 2025-05-08 004612](https://github.com/user-attachments/assets/7ba8ee68-c861-4da3-a52c-863d9015796c)


   <img width="344" alt="Screenshot 2025-05-08 004537" src="https://github.com/user-attachments/assets/e89f42d0-6127-4e96-bbaf-501e55140b88" />


