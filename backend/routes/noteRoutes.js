const express = require('express');
const router = express.Router();
const Note = require('../models/noteModel');

// Get all notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// Create a new note
router.post('/', async (req, res) => {
  const note = new Note({
    title: req.body.title,
    content: req.body.content,
  });

  try {
    const savedNote = await note.save();
    res.json(savedNote);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// More routes for updating and deleting notes can be added here

module.exports = router;

