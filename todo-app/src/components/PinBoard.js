import { useState } from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import ToDo from "./ToDo";

const PinBoard = () => {
  const useStyle = makeStyles({
    strip: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
    },
    addButton: {
      position: "absoulte",
    },
  });

  const ui = useStyle();
  const [todos, setTodos] = useState([]);

  const genId = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  const createTodo = (e) => {
    var arr = [...todos];

    const divider = 4;

    var divArr = [];
    var total = Math.ceil(arr.length / divider);
    for (var i = 0; i < total; i++) {
      var lower = i * divider;
      var upper = lower + divider;
      var temp = [];
      for (var j = lower; j < upper; j++) {
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
        className={ui.addButton}
        onClick={(e) => {
          setTodos([...todos, genId()]);
        }}
        color="secondary"
      >
        <AddCircle style={{ fontSize: "60" }} />
      </IconButton>
      <div className={ui.strip}>{createTodo()}</div>
    </div>
  );
};

export default PinBoard;
