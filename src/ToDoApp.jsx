import TaskCreateContainer from './TaskCreateContainer';
import TasksContainer from './TasksContainer';

export default function ToDoApp() {
  return (
    <>
      <h1>할 일 목록</h1>
      <TaskCreateContainer />
      <TasksContainer />
    </>
  );
}
