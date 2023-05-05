import React, { useState } from "react";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

function InputNote(props) {

    const [note, setNote] = useState({
        title: "",
        content: "",
        isExpanded: false
    });

    const [error, setError] = useState(null);

    function getNote(event) {
        const { name, value } = event.target;

        setNote(
            prevNote => {
                return {
                    ...prevNote,
                    [name]: value
                }
            });
    }

    function submitNote(event) {
        if (note.title.trim() === "" || note.content.trim() === "") {
            setError("!!Title and Note cannot be empty");
        }
        else {
            props.onAdd(note);
            setNote({
                title: "",
                content: ""
            });
            setError(null);
        }
        event.preventDefault();
    }

    function expandNote() {
        setNote(prevNote => {
          return {
            ...prevNote,
            isExpanded: true
          };
        });
      }

    return (
        <div>
            <form className="create-note">
                <input type="text" onChange={getNote} name="title" value={note.title} placeholder="Title" onClick={expandNote} />
                {note.isExpanded && <div>
                    <textarea name="content" onChange={getNote} value={note.content} placeholder="Take a note..." rows="3" required></textarea>
                    {error && <p className="alert-message">{error}</p>}
                    <AddCircleRoundedIcon style={{ fontSize: 50 }} className="add-button" onClick={submitNote}></AddCircleRoundedIcon>
                </div>
                }
            </form>
        </div>

    );
}

export default InputNote;