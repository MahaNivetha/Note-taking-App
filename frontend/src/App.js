// src/App.js
// src/App.js
import React, { useState } from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (content) => {
    setNotes([...notes, { id: notes.length + 1, content }]);
  };

  return (
    <div>
      <h1>Hello, this is my note-taking app!</h1>
      <NoteList notes={notes} />
      <NoteForm onAddNote={addNote} />
    </div>
  );
}

export default App;

