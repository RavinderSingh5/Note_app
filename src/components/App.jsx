import React, { useState } from "react";
import Header from "./Header.jsx";
import InputNote from "./InputNote.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNote => {
            return [...prevNote, newNote]
        });
    }

    function deleteNote(id) {
        setNotes(prevNote => {
            return prevNote.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <InputNote onAdd={addNote} />
            {notes.map((note, index) => (
                <Note
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    onChecked={deleteNote}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;
