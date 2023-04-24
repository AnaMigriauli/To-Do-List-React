import React, { useState } from "react";
import "./Input.css";
const Input = (props) => {
  const [note, setNote] = useState("");
  const NoteChangeHandler = (e) => {
    setNote(e.target.value);
  };
  props.onEdit(note);
  const NoteAddHandler = () => {
    props.onAddNout(note);
  };
  return (
    <div className="todo-input-btn">
      <input
        className="todo-input"
        placeholder="Note"
        value={note}
        onChange={NoteChangeHandler}
      ></input>
      <button className="todo-btn" onClick={NoteAddHandler}></button>
    </div>
  );
};
export default Input;
