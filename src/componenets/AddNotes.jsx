import React from "react";
import "./AddedNotes.css";
import DeleteIcon from "../trash-outline.svg";
import EditIcon from "../create-outline.svg";

const AddNotes = (props) => {
  return (
    <ul className="todo-items">
      {props.notes.map((note) => (
        <div key={note.id} className="todo-item">
          <li className="list-item">{note.items}</li>
          <div>
            <button>
              <img
                className="todo-icon"
                src={DeleteIcon}
                alt="deleteIcon"
                onClick={() => props.DeleteHandler(note.id)}
              />
            </button>
            <button>
              <img
                className="todo-icon"
                src={EditIcon}
                alt="editIcon"
                onClick={() => props.EditHandler(note.id)}
              ></img>
            </button>
          </div>
        </div>
      ))}
    </ul>
  );
};
export default AddNotes;
