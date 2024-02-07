
# React CRUD Application with Node.js Backend

This project is a simple CRUD (Create, Read, Update, Delete) application using React for the frontend and Node.js with Express and MySQL for the backend. It demonstrates basic operations on employee data, including listing employees, adding a new employee, updating existing employee information, and deleting an employee.

## Features

- List all employees
- Add a new employee
- Update an existing employee's details
- Delete an employee

## Technologies Used

- Frontend:
  - React
  - Material-UI
  - Axios
- Backend:
  - Node.js
  - Express
  - MySQL
  - CORS

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm or yarn
- MySQL Database

### Installing

1. Clone the repository to your local machine:
   ```bash
   git clone https://your-repository-url.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-project-directory
   ```
3. Install backend dependencies:
   ```bash
   npm install
   ```
4. Navigate to the frontend directory (if separate) and install dependencies:
   ```bash
   cd frontend-directory
   npm install
   ```
5. Set up your MySQL database and update the connection details in `index.js` under the backend directory.

6. Start the backend server:
   ```bash
   npm start
   ```
7. In a new terminal, start the React frontend application:
   ```bash
   npm start
   ```

### Usage

- The application will be accessible at `http://localhost:3000` for the frontend.
- The backend API will be running on `http://localhost:3001`.

## API Endpoints

- GET `/employees`: Fetch all employees
- POST `/create`: Add a new employee
- PUT `/update/:id`: Update an employee's details
- DELETE `/delete/:id`: Delete an employee

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Special thanks to all contributors and supporters of this project.
