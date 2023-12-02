// src/NoteForm.js
import React, { useState } from 'react';

function NoteForm({ onAddNote }) {
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    onAddNote(newNote);
    setNewNote('');
  };

  return (
    <div>
      <h2>Add a Note:</h2>
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <button onClick={handleAddNote}>Add</button>
    </div>
  );
}

export default NoteForm;

