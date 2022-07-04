import {
  TextField,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material";
import { Save, Delete, Edit, Cancel } from "@mui/icons-material";
import { useState } from "react";

const ToDo = ({ id, todos, setTodos }) => {
  const [edit, setEdit] = useState(false);

  const [title, setTitle] = useState();

  const [task, setTask] = useState();

  const [prev, setPrev] = useState({ title: title, task: task });

  const ui = {
    card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "20vw",
      height: "40vh",
      margin: "1vw",
    },
    cardActions: {
      display: "flex",
      alignSelf: "flex-end",
    },
  };

  const deleteSelf = (e) => {
    let arr = [...todos];
    arr.splice(arr.indexOf(id), 1);
    setTodos(arr);
  };

  if (edit) {
    return (
      <Card variant="outlined" key={id.split("_")[0]} style={ui.card}>
        <CardContent>
          <TextField
            key={id.split("_")[1]}
            variant="standard"
            placeholder="Title"
            value={title ? title : ""}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </CardContent>
        <CardContent>
          <TextField
            key={id.split("_")[2]}
            variant="filled"
            placeholder="Task"
            value={task ? task : ""}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </CardContent>
        <Typography variant="caption">{id.split("_")[0]}</Typography>
        <CardActions style={ui.cardActions}>
          <ButtonGroup variant="text">
            <Button
              onClick={(e) => {
                setTitle({ ...prev }.title);
                setTask({ ...prev }.task);
                setEdit(false);
              }}
            >
              <Cancel style={{ width: "5vw" }} />
            </Button>
            <Button
              onClick={(e) => {
                setEdit(false);
              }}
            >
              <Save style={{ width: "5vw" }} />
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    );
  } else {
    return (
      <Card variant="outlined" key={id.split("_")[0]} style={ui.card}>
        <CardContent>
          <Typography variant="h4">{title ? title : "Title"}</Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h6">{task ? task : "Task"}</Typography>
        </CardContent>
        <Typography variant="caption">{id.split("_")[0]}</Typography>
        <CardActions style={ui.cardActions}>
          <ButtonGroup variant="text">
            <Button
              onClick={(e) => {
                deleteSelf(e);
              }}
              style={{ width: "5vw" }}
            >
              <Delete />
            </Button>
            <Button
              onClick={(e) => {
                setEdit(true);
                setPrev({ title: title, task: task });
              }}
              style={{ width: "5vw" }}
            >
              <Edit />
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    );
  }
};

export default ToDo;
