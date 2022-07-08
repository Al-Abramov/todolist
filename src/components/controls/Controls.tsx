import { AddTodo } from './components/AddTodo/AddITodo';
import { Filter } from './components/Filter/Fllter';
import style from './Controls.module.scss';

export const Controls = () => {
  return (
    <div className={style.container}>
      <AddTodo />
      <Filter />
    </div>
  );
};
