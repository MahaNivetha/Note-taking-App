# Note-taking-App

## Overview

This repository contains the source code for a simple note-taking app. The application is divided into two main parts: the frontend and the backend.

- **Frontend:**
  - Located in the `frontend` directory.
  - Built using React.
  - Components include `NoteList`, `NoteForm`, and the main `App`.
  - State management is handled using React Hooks.

- **Backend:**
  - Backend server built with Node.js and Express.
  - MongoDB used as the database for storing notes.
  - Backend code is organized into the `models` and `routes` directories.

## File Structure

```
|-- frontend
|   |-- node_modules
|   |-- package-lock.json
|   |-- package.json
|   |-- public
|   |   |-- index.html
|   |-- src
|       |-- components
|       |   |-- index.js
|       |   |-- Note.js
|       |   |-- NoteForm.js
|       |   |-- NoteList.js
|       |-- App.js
|-- backend
|   |-- models
|   |   |-- noteModel.js
|   |-- routes
|   |   |-- noteRoutes.js
|   |-- node_modules
|   |-- package-lock.json
|   |-- package.json
|   |-- server.js
|-- node_modules
|-- package-lock.json
|-- package.json
```

## Frontend

The frontend is developed using React and includes the following key components:

- **`App.js`:**
  - Main component orchestrating the entire application.
  - Manages state for notes and handles the addition of new notes.

- **`NoteList.js`:**
  - Component responsible for rendering a list of notes.
  - Consumes the `notes` array from the `App` component.

- **`NoteForm.js`:**
  - Component for adding new notes.
  - Sends the new note content to the `App` component.

## Backend

The backend is implemented using Node.js and Express, with MongoDB as the database. The server handles API requests related to notes.

- **`server.js`:**
  - Main server file that sets up Express, connects to the MongoDB database, and defines routes.

- **`noteModel.js`:**
  - Defines the structure of a note in the MongoDB database.

- **`noteRoutes.js`:**
  - Handles API routes for CRUD operations on notes.

## Getting Started

1. **Frontend:**
   - Navigate to the `frontend` directory.
   - Run `npm install` to install dependencies.
   - Run `npm start` to start the development server.

2. **Backend:**
   - Navigate to the `backend` directory.
   - Run `npm install` to install dependencies.
   - Run `npm start` to start the backend server.

3. **MongoDB:**
   - Ensure that MongoDB is installed and running locally.

4. **Application:**
   - Access the application at [http://localhost:3000/](http://localhost:3000/).
   - The backend server runs on [http://localhost:3001/](http://localhost:3001/).

## Dependencies

- Frontend: React
- Backend: Express, mongoose, cors

