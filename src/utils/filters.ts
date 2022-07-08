import { TodoInterface } from '../data/todo.interface';

const allFilter = (todos: TodoInterface[]) => todos;
const complitedFilter = (todos: TodoInterface[]) => todos.filter((todo) => todo.completed);
const uncomplitedFilter = (todos: TodoInterface[]) => todos.filter((todo) => !todo.completed);

const filters: Record<string, (todos: TodoInterface[]) => TodoInterface[]> = {
  all: (todos: TodoInterface[]) => allFilter(todos),
  complited: (todos: TodoInterface[]) => complitedFilter(todos),
  uncomplited: (todos: TodoInterface[]) => uncomplitedFilter(todos),
};

export const applyFilters = (filter: string, todos: TodoInterface[]) => filters[filter](todos);
