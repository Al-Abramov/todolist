import style from './AddTodo.module.scss';
import { store } from '../../../../store/todoStore';
import React, { useRef } from 'react';

export const AddTodo = () => {
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  const add = () => {
    if (!inputRef.current?.value.trim()) return;
    store.addTodo(inputRef.current?.value || '');
    (inputRef.current as HTMLInputElement).value = '';
  };

  return (
    <div className={style.inputContainer}>
      <label htmlFor="">
        <input ref={inputRef} className={style.input} type="text" />
      </label>
      <button className={style.addBtn} onClick={add}></button>
    </div>
  );
};
