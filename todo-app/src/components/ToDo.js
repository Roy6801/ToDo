import {
  TextField,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  ButtonGroup,
  makeStyles,
} from "@material-ui/core";
import { Save, Delete, Edit, Cancel } from "@material-ui/icons";
import { useState } from "react";

const ToDo = ({ id, todos, setTodos }) => {
  const [edit, setEdit] = useState(false);

  const [title, setTitle] = useState();

  const [task, setTask] = useState();

  const [prev, setPrev] = useState({ title: title, task: task });

  const useStyle = makeStyles({
    card: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "20vw",
      height: "40vh",
      margin: "1vw",
    },
    cardAction: {
      display: "flex",
      alignSelf: "flex-end",
    },
  });

  const ui = useStyle();

  const deleteSelf = (e) => {
    var arr = [...todos];
    arr.splice(arr.indexOf(id), 1);
    setTodos(arr);
  };

  if (edit) {
    return (
      <Card variant="outlined" className={ui.card}>
        <CardContent>
          <TextField
            variant="standard"
            placeholder="Title"
            value={title ? title : null}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </CardContent>
        <CardContent>
          <TextField
            variant="filled"
            placeholder="Task"
            value={task ? task : null}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </CardContent>
        <Typography variant="caption">{id}</Typography>
        <CardActions className={ui.cardAction}>
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
      <Card variant="outlined" className={ui.card}>
        <CardContent>
          <Typography variant="h4">{title ? title : "Title"}</Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h6">{task ? task : "Task"}</Typography>
        </CardContent>
        <Typography variant="caption">{id}</Typography>
        <CardActions className={ui.cardAction}>
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
