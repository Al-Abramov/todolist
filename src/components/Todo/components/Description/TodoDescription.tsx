import { TodoDescriptionProps } from './TodoDescription.Interface';
import style from './TodoDescription.module.scss';

export const TodoDescription: React.FC<TodoDescriptionProps> = (props) => {
  const openUpdate = () => {
    props.toggle();
  };

  return (
    <p
      className={!props.completed ? style.title : `${style.title} ${style.complete}`}
      onClick={openUpdate}
    >
      {props.description}
    </p>
  );
};
