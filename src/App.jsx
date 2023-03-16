import { useEffect, useState } from "react";
import "react-mde/lib/styles/css/react-mde-all.css";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Split from "react-split";
import { nanoid } from "nanoid";

export default function App() {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("notes")) || []);
  const [currentNoteId, setCurrentNoteId] = useState(notes[0]?.id || "");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNoteText(text) {
    setNotes((oldNotes) =>
      oldNotes.map((note) =>
        note.id === currentNoteId ? { ...note, body: text } : note
      )
    );
  }

  function deleteNoteById(event, noteId) {
    event.stopPropagation();
    setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
  }

  function findCurrentNote() {
    return notes.find((note) => note.id === currentNoteId) || notes[0];
  }

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            createNewNote={createNewNote}
            deleteNoteById={deleteNoteById}
          />
          {currentNoteId && (
            <Editor currentNote={findCurrentNote()} updateNoteText={updateNoteText} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
