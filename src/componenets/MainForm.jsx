import React, { useEffect, useState } from "react";
import "./MainForm.css";
import Input from "./UI/Input";
import AddNotes from "./AddNotes";
import toDoCover from "../assets/Images/Rectangle.svg";

const getInitState = () => {
  const list = localStorage.getItem("list");
  return list ? JSON.parse(list) : [];
};

const MainForm = (props) => {
  const [noteList, setNoteList] = useState(getInitState);
  const [currentTime, setCurrentTime] = useState(new Date());

  const coverImg = {
    width: "430px",
    height: "202px",
    backgroundImage: `url(${toDoCover})`,
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(noteList));
  }, [noteList]);

  const AddElementHandler = (item) => {
    setNoteList((prevItem) => {
      return [
        ...prevItem,
        {
          items: item,
          id: Math.random().toString(),
          time: `${monthDay} at ${hour}`,
        },
      ];
    });
  };

  const RemoveElementHandler = (id) => {
    setNoteList(noteList.filter((el) => el.id !== id));
  };
  const InputUpdateHandler = (id, e) => {
    setNoteList(
      noteList.map((el) => {
        return el.id === id
          ? { ...el, items: e.target.value, time: `${monthDay} at ${hour}` }
          : el;
      })
    );
  };

  const RefreshTime = () => {
    setCurrentTime(new Date());
  };
  const monthDay = currentTime.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
  });

  const hour = currentTime.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  useEffect(() => {
    const timerId = setInterval(RefreshTime, 60000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="todo">
      <div className="todo-title">ToDo</div>
      <div className="card">
        <div className="todo-header" style={coverImg}>
          <div className="timer">
            <p className="todo-month">{`${monthDay}`}</p>
            <p className="todo-time">{`${hour}`}</p>
          </div>
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
