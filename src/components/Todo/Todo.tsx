import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import { TodoInterface } from '../../data/todo.interface';
import React, { useState } from 'react';
import { store } from '../../store/todoStore';
import { runInAction } from 'mobx';
import { TodoDescription } from './components/Description/TodoDescription';
import { UpdateInput } from './components/UpdateInput/UpdateInput';

export const Todo: React.FC<TodoInterface> = (props) => {
  const [update, setUpdate] = useState(false);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const setCompleted = () => {
    runInAction(() => {
      store.todos.forEach((todo) =>
        todo.id === props.id ? (todo.completed = !todo.completed) : todo
      );
    });
  };

  const deleteTodo = () => {
    store.removeTodo(props.id);
  };

  const toggleUpdate = () => {
    setUpdate(!update);
  };

  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 5px',
        marginBottom: '15px',
      }}
      raised
    >
      <Checkbox
        {...label}
        checked={props.completed ? true : false}
        color="secondary"
        onChange={() => setCompleted()}
      />

      {update ? (
        <UpdateInput description={props.description} id={props.id} toggle={toggleUpdate} />
      ) : (
        <TodoDescription
          completed={props.completed}
          description={props.description}
          toggle={toggleUpdate}
        />
      )}

      <IconButton sx={{ padding: '4px' }} aria-label="delete" size="large" onClick={deleteTodo}>
        <DeleteIcon />
      </IconButton>
    </Card>
  );
};
