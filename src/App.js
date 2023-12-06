// App.js

import React from 'react';
import FancyNoteSidebar from './Components/FancyNoteSidebar';
import FancyMarkdownEditor from './Components/FancyMarkdownEditor';
import './App.css'; // Import the CSS file
import { nanoid } from 'nanoid';

export default function App() {
  const [notes, setNotes] = React.useState(() => JSON.parse(localStorage.getItem("notes")) || []);
  const [currentNoteId, setCurrentNoteId] = React.useState((notes[0] && notes[0].id) || "");

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: `# Enter title here \n\n`
    };
    setNotes(prevNotes => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    setNotes(oldNotes => oldNotes.map(note =>
      note.id === currentNoteId ? { ...note, body: text } : note
    ));
  }

  function deleteNote(event, noteId) {
    event.stopPropagation();
    setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId));
  }

  function findCurrentNote() {
    return notes.find(note => note.id === currentNoteId) || notes[0];
  }

  return (
    <div className="app-container">
      <nav className="navbar">
        <FancyNoteSidebar
          notes={notes}
          setCurrentNoteId={setCurrentNoteId}
          currentNote={findCurrentNote()}
          newNote={createNewNote}
          deleteNote={deleteNote}
        />
        {currentNoteId && notes.length > 0 && (
          <FancyMarkdownEditor
            updateNote={updateNote}
            currentNote={findCurrentNote()}
          />
        )}
      </nav>
    </div>
  );
}






