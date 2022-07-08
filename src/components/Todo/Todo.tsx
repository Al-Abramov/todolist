import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import style from './Todo.module.scss';
import { TodoInterface } from '../../data/todo.interface';
import React from 'react';
import { store } from '../../store/todoStore';
import { runInAction } from 'mobx';

export const Todo: React.FC<TodoInterface> = (props) => {
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

      <p className={!props.completed ? style.title : `${style.title} ${style.complete}`}>
        {props.description}
      </p>

      <IconButton sx={{ padding: '4px' }} aria-label="delete" size="large" onClick={deleteTodo}>
        <DeleteIcon />
      </IconButton>
    </Card>
  );
};
