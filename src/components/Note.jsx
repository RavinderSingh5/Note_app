import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <DeleteIcon className="delete-button"
                onClick={() => {
                    props.onChecked(props.id);
                }}
            >DELETE</DeleteIcon>
        </div>
    )
}

export default Note;        