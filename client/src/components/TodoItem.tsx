import IToDo from '@models/todo';

export default function TodoItem({
  toDo: { completed, title },
}: {
  toDo: IToDo;
}) {
  return <li className={completed ? 'strike-through' : ''}>{title}</li>;
}
