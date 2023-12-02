// src/NoteList.js
import React from 'react';
import Note from './Note';

function NoteList({ notes }) {
  return (
    <div>
      <h2>Notes:</h2>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} content={note.content} />
        ))}
      </ul>
    </div>
  );
}

export default NoteList;

