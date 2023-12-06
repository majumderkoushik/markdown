

import React from "react";
import "./NoteSidebar.css";

export default function FancyNoteSidebar(props) {
  const noteList = props.notes.map((note) => (
    <li
      key={note.id}
      className={`note-item ${
        note.id === props.currentNote.id ? "selected-note" : ""
      }`}
      onClick={() => props.setCurrentNoteId(note.id)}
    >
      <span className="text-snippet">{note.body.split("\n")[0]}</span>
      <button
        className="delete-btn"
        onClick={(event) => props.deleteNote(event, note.id)}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  ));

  return (
    <section className="fancy-sidebar">
      <div className="fancy-sidebar__header">
        <h1 className="fancy-sidebar__header-logo">My Notes</h1>
        <button className="fancy-sidebar__header-btn" onClick={props.newNote}>
          +
        </button>
      </div>
      <ul className="fancy-note-list">{noteList}</ul>
    </section>
  );
}
