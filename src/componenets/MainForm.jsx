import React, { useEffect, useState } from "react";
import "./MainForm.css";
import Input from "./UI/Input";
import AddNotes from "./AddNotes";

const MainForm = (props) => {
  const [noteList, setNoteList] = useState([]);
  const [currentTime, setCurrentTime] = useState();
  const AddElementHandler = (item) => {
    setNoteList((prevItem) => {
      return [...prevItem, { items: item, id: Math.random().toString() }];
    });
  };

  const RemoveElementHandler = (id) => {
    setNoteList(noteList.filter((el) => el.id !== id));
  };
  const EditElementHandler = (item) => {
    setNoteList();
  };
  //DATA-TIME
  // const now = new Date();
  // const day = now.getDate();
  // const CurrentMonth = now.toLocaleString("en-US", { month: "long" });

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleString());
    }, 1000);
  }, []);

  return (
    <div className="todo">
      <div className="todo-title">TODO</div>
      <div className="card">
        <div className="todo-img">
          <p className="todo-time">{`${currentTime}`}</p>
        </div>
        <Input onAddNout={AddElementHandler} onEdit={EditElementHandler} />
        <AddNotes
          notes={noteList}
          DeleteHandler={RemoveElementHandler}
          AddedNotes={noteList}
        />
      </div>
    </div>
  );
};
export default MainForm;
