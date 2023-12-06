// FancyMarkdownEditor.js

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./MarkdownEditor.css";

export default function FancyMarkdownEditor(props) {
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const togglePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  return (
    <div className="fancy-editor-container">
      <h2 className="editor-title">My Awesome Markdown Editor</h2>
      <div className="button-container">
        <button onClick={togglePreviewMode}>
          {isPreviewMode ? "Edit" : "Preview"}
        </button>
      </div>
      <div className="editor-content">
        {isPreviewMode ? (
          <div className="markdown-preview">
            <ReactMarkdown>{props.currentNote.body}</ReactMarkdown>
          </div>
        ) : (
          <textarea
            value={props.currentNote.body}
            onChange={(e) => props.updateNote(e.target.value)}
            className="markdown-textarea-full-width"
          />
        )}
      </div>
    </div>
  );
}

