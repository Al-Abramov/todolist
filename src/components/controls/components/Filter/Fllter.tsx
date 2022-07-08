import { useRef } from 'react';
import { store } from '../../../../store/todoStore';
import style from './Filter.module.scss';

export const Filter = () => {
  const selectRef: React.RefObject<HTMLSelectElement> = useRef(null);

  const selectHandle = () => {
    store.filterTodo((selectRef.current as HTMLSelectElement).value);
  };

  return (
    <select className={style.filter} ref={selectRef} onChange={selectHandle}>
      <option value="all">All</option>
      <option value="complited">Complited</option>
      <option value="uncomplited">Uncomplited</option>
    </select>
  );
};
