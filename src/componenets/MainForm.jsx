import React, { useEffect, useState } from "react";
import "./MainForm.css";
import Input from "./UI/Input";
import AddNotes from "./AddNotes";
import toDoCover from "../assets/Rectangle.svg";

const MainForm = (props) => {
  const [noteList, setNoteList] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  const coverImg = {
    width: "430px",
    height: "202px",
    backgroundImage: `url(${toDoCover})`,
    backgroundRepeat: "no-repeat",
  };

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

  const RefreshTime = () => {
    setCurrentTime(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(RefreshTime, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="todo">
      <div className="todo-title">TODO</div>
      <div className="card">
        <div className="todo-header" style={coverImg}>
          <p className="todo-time">{currentTime.toLocaleString("en-US")}</p>
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
