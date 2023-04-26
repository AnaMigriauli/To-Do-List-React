import React, { useState } from "react";
import "./MainForm.css";
import Input from "./UI/Input";
import AddNotes from "./AddNotes";

const MainForm = (props) => {
  const [noteList, setNoteList] = useState([]);
  // const [currentTime, setCurrentTime] = useState();
  // const [updateItem, setUpdateItem] = useState(true);

  const AddElementHandler = (item) => {
    setNoteList((prevItem) => {
      return [...prevItem, { items: item, id: Math.random().toString() }];
    });
  };

  const RemoveElementHandler = (id) => {
    console.log(id);
    setNoteList(noteList.filter((el) => el.id !== id));
  };
  const InputUpdateHandler = (id, e) => {
    setNoteList(
      noteList.map((el) => {
        return el.id === id ? { ...el, items: e.target.value } : el;
      })
    );
  };

  //DATA-TIME
  // const now = new Date();
  // const day = now.getDate();
  // const CurrentMonth = now.toLocaleString("en-US", { month: "long" });

  // useEffect(() => {
  //   setInterval(() => {
  //     const now = new Date();
  //     setCurrentTime(now.toLocaleString());
  //   }, 1000);
  // }, []);

  return (
    <div className="todo">
      <div className="todo-title">TODO</div>
      <div className="card">
        <div className="todo-img">
          <p className="todo-time"></p>
        </div>
        <Input onAddNout={AddElementHandler} />
        <AddNotes
          setNoteList={setNoteList}
          noteList={noteList}
          DeleteHandler={RemoveElementHandler}
          InputUpdateHandler={InputUpdateHandler}
        />
      </div>
    </div>
  );
};
export default MainForm;
