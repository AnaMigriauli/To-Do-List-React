import React, { useState } from "react";
import "./Input.css";
const Input = (props) => {
  const [note, setNote] = useState("");
  const NoteChangeHandler = (e) => {
    if (e.target.value.length < 28) {
      setNote(e.target.value);
    }
  };

  const NoteAddHandler = () => {
    if (note.trim().length !== 0) {
      props.onAddNout(note);
      setNote("");
    }
  };
  return (
    <div className="todo-input-btn">
      <input
        className="todo-input"
        placeholder="Note"
        value={note}
        onChange={NoteChangeHandler}
        onKeyDown={(e) => {
          return e.key === "Enter" ? NoteAddHandler() : "";
        }}
      />
      <button className="todo-btn" onClick={NoteAddHandler}>
        Add
      </button>
    </div>
  );
};
export default Input;
