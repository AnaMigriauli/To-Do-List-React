import React, { useState } from "react";
import "./AddedNotes.css";
import DeleteIcon from "../assets/trash-outline.svg";
import EditIcon from "../assets/create-outline.svg";
// import UpdateInput from "./UI/UpdateInput";
const AddNotes = (props) => {
  const [updateItem, setUpdateItem] = useState();
  const EditHandler = (id) => {
    setUpdateItem(id);
  };
  const SubmitHandler = (id) => {
    setUpdateItem(updateItem !== id);
  };
  return (
    <ul className="todo-items">
      {props.noteList.map((note) =>
        updateItem === note.id ? (
          <div key={note.id}>
            <input
              value={note.items}
              onChange={(e) => props.InputUpdateHandler(note.id, e)}
            />
            <button
              className="btn"
              type="submit"
              onClick={() => SubmitHandler(note.id)}
            ></button>
          </div>
        ) : (
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
                  onClick={() => EditHandler(note.id)}
                ></img>
              </button>
            </div>
          </div>
        )
      )}
    </ul>
  );
};
export default AddNotes;
