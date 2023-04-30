import React, { useState } from "react";
import "./AddedNotes.css";
import DeleteIcon from "../assets/trash-outline.svg";
import EditIcon from "../assets/create-outline.svg";
import SubmitIcon from "../assets/cloud-done-outline.svg";

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
          <div className="todo-item" key={note.id}>
            <input
              className="item-input"
              value={note.items}
              onChange={(e) => props.InputUpdateHandler(note.id, e)}
              onKeyDown={(e) => {
                return e.key === "Enter" ? SubmitHandler(note.id) : "";
              }}
              autoFocus={true}
            />
            <button
              className="delete-edit-submit-btns"
              type="submit"
              onClick={() => SubmitHandler(note.id)}
            >
              <img className="todo-icon" src={SubmitIcon} alt="submit" />
            </button>
          </div>
        ) : (
          <div key={note.id} className="todo-item">
            <li className="list-item">{note.items}</li>
            <div className="todo-list-btns">
              <button
                className="delete-edit-submit-btns"
                onClick={() => props.DeleteHandler(note.id)}
              >
                <img className="todo-icon" src={DeleteIcon} alt="deleteIcon" />
              </button>
              <button
                className="delete-edit-submit-btns"
                onClick={() => EditHandler(note.id)}
              >
                <img className="todo-icon" src={EditIcon} alt="editIcon"></img>
              </button>
            </div>
          </div>
        )
      )}
    </ul>
  );
};
export default AddNotes;
