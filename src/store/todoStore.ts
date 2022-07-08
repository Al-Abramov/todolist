import { makeObservable, observable, action } from 'mobx';
import { data } from '../data/data';
import { applyFilters } from '../utils/filters';
import { generateId } from '../utils/generateId';

function todoStore() {
  return makeObservable(
    {
      initialState: data,
      todos: data,
      addTodo(description: string) {
        this.todos.push({
          id: generateId(),
          description,
          completed: false,
        });
        this.initialState = this.todos;
      },

      removeTodo(id: string) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        this.initialState = this.todos;
      },

      filterTodo(filter: string) {
        this.todos = this.initialState;
        this.todos = applyFilters(filter, this.todos);
      },
    },
    {
      todos: observable,
      addTodo: action.bound,
      removeTodo: action.bound,
      filterTodo: action.bound,
    }
  );
}

export const store = todoStore();
