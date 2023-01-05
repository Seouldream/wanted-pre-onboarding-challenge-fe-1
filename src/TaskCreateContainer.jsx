import { useDispatch, useSelector } from 'react-redux';
import { addTask, changeTaskField } from './action';
import TaskForm from './TaskForm';

export default function TaskCreateContainer() {
  const dispatch = useDispatch();
  
  const { taskField } = useSelector((state) => ({
    taskField: state.taskField,
  }));

  const handleChangeTaskField = ({ name, value }) => {
    dispatch(changeTaskField({ name, value }));
  };

  const handleSubmitTask = (id) => {
    dispatch(addTask(id));
  };
  return (
    <TaskForm
      taskField={taskField}
      onChangeTaskField={handleChangeTaskField}
      onSubmitTask={handleSubmitTask}
    />
  );
}
