import { UpdateInutProps } from './UpdateInput.interface';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { store } from '../../../../store/todoStore';
import style from './UpdateInput.module.scss';
import { useRef } from 'react';

export const UpdateInput: React.FC<UpdateInutProps> = (props) => {
  const updateInputRef: React.RefObject<HTMLTextAreaElement> = useRef(null);

  const close = () => {
    props.toggle();
  };

  const update = () => {
    store.updateTdo(props.id, (updateInputRef.current as HTMLTextAreaElement).value);
    props.toggle();
  };

  return (
    <div className={style.container}>
      <TextareaAutosize defaultValue={props.description} ref={updateInputRef} />
      <div>
        <button className={`${style.btn} ${style.close}`} onClick={close}>
          x
        </button>
        <button className={`${style.btn} ${style.ok}`} onClick={update}>
          &#10004;
        </button>
      </div>
    </div>
  );
};
