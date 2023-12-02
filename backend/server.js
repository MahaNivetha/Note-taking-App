const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/note-taking-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const noteRoutes = require('./routes/noteRoutes');
app.use('/api/notes', noteRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

