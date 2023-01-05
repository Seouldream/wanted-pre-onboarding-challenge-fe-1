import { useSelector } from 'react-redux';
import Tasks from './Tasks';

export default function TasksContainer() {
  const { tasks } = useSelector((state) => ({
    tasks: state.tasks,
    taskField: state.taskField,
  }));

  return (
    <Tasks
      tasks={tasks}
    />
  );
}
