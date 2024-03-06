import ToDoForm from '../../../components/ToDoForm';

export default function NewToDo() {
  return (
    <div className="container">
      <h1 className="page-title">New Todo</h1>

      <ToDoForm type="create" />
    </div>
  );
}
