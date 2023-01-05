import { useDispatch, useSelector } from 'react-redux';
import {
  changeTaskField, deleteTask, modifyTask, setTaskField,
} from './action';
import Tasks from './Tasks';

export default function TasksContainer() {
  const dispatch = useDispatch();

  const { tasks, taskField } = useSelector((state) => ({
    tasks: state.tasks,
    taskField: state.taskField,
  }));

  const handleClickSetTaskField = (id) => {
    dispatch(setTaskField(id));
  };

  const handleClickDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleChangeTaskField = ({ name, value }) => {
    dispatch(changeTaskField({ name, value }));
  };

  const handleSubmitModify = (id) => {
    dispatch(modifyTask(id));
  };

  return (
    <Tasks
      tasks={tasks}
      taskField={taskField}
      handleClickSetTaskField={handleClickSetTaskField}
      handleClickDeleteTask={handleClickDeleteTask}
      handleChangeTaskField={handleChangeTaskField}
      handleSubmitModify={handleSubmitModify}
    />
  );
}
