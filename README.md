# To-Do List Application

A simple To-Do list application built with React and Bootstrap. This application allows users to create, edit, delete, and manage tasks efficiently.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Display tasks with details such as assigned user, status, due date, priority, and comments
- Responsive design using Bootstrap

## Technologies Used

- React
- React Bootstrap
- Font Awesome
- CSS for custom styling

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

Running the Application
To start the development server, run:
npm start
The application will open in your default web browser at http://localhost:3000.
Usage
You can use the application to manage your tasks. Here’s how:

Click on "New Task" to add a new task.
Fill out the form with task details and click "Save Task."
Tasks will be displayed in a table where you can edit or delete them.
Code Description
Task Service
The taskService.js file manages task data with functions to get, add, update, and delete tasks. It uses a simple in-memory array to store tasks.

Custom Styles
The application uses CSS variables for theming and custom styles to enhance the UI. The styles are defined in a CSS file to provide a consistent look and feel.

Dependencies
The project uses the following dependencies:

react
react-bootstrap
@fortawesome/react-fontawesome
@fortawesome/free-solid-svg-icons
