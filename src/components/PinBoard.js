import { useState } from "react";
import { IconButton } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import ToDo from "./ToDo";

const PinBoard = () => {
  const ui = {
    addButton: { position: "absoulte" },
    strip: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
    },
  };

  const [todos, setTodos] = useState([]);

  const genId = () => {
    let card = Math.random().toString(36).substring(2, 15);
    let title = Math.random().toString(36).substring(2, 15);
    let text = Math.random().toString(36).substring(2, 15);

    return `${card}_${title}_${text}`;
  };

  const createTodo = (e) => {
    let arr = [...todos];

    const divider = 4;

    let divArr = [];
    let total = Math.ceil(arr.length / divider);
    for (let i = 0; i < total; i++) {
      let lower = i * divider;
      let upper = lower + divider;
      let temp = [];
      for (let j = lower; j < upper; j++) {
        if (arr[j]) {
          temp.push(arr[j]);
        }
      }
      divArr.push(temp);
    }

    return divArr.map((i, index) => {
      return (
        <div
          key={index}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          {i.map((j) => {
            return <ToDo id={j} key={j} todos={todos} setTodos={setTodos} />;
          })}
        </div>
      );
    });
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "80vh",
      }}
    >
      <h1>ToDo</h1>
      <IconButton
        onClick={(e) => {
          setTodos([...todos, genId()]);
        }}
        color="secondary"
        style={ui.addButton}
      >
        <AddCircle style={{ fontSize: "60" }} />
      </IconButton>
      <div style={ui.strip}>{createTodo()}</div>
    </div>
  );
};

export default PinBoard;
