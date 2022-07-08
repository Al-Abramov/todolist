import { Controls } from '../controls/Controls';
import { Todo } from '../Todo/Todo';
import { store } from '../../store/todoStore';
import style from './Main.module.scss';
import { Observer } from 'mobx-react';

export const Main = () => {
  return (
    <main className={style.main}>
      <Controls />
      <Observer>
        {() => (
          <div className={style.todosContainer}>
            {store.todos.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                description={todo.description}
                completed={todo.completed}
              />
            ))}
          </div>
        )}
      </Observer>
    </main>
  );
};
