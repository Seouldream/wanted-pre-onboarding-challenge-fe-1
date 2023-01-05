import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  changeTaskField, deleteTask, fetchTask, modifyTask, setTaskField,
} from './action';
import Task from './Task';
import TaskModifyForm from './TaskModifyForm';

export default function TaskContainer() {
  const [isOpen, setIsOpen] = useState('');

  const params = useParams();

  const taskId = parseInt(params.taskId, 10);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTask(taskId));
  }, [taskId]);

  const { task, taskField } = useSelector((state) => ({
    task: state.task,
    taskField: state.taskField,
  }));

  const handleClickOpenModifyHandler = (id) => {
    setIsOpen((element) => (element.isOpen !== id ? id : ''));

    if (isOpen === id) {
      setIsOpen('');
    }
  };

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
    isOpen !== taskId ? (
      <Task
        task={task}
        onClickSetTaskField={handleClickSetTaskField}
        onClickOpenModifyHandler={handleClickOpenModifyHandler}
        onClickDeleteTask={handleClickDeleteTask}
      />
    ) : (
      <TaskModifyForm
        key={taskId}
        taskField={taskField}
        task={task}
        onChangeTaskField={handleChangeTaskField}
        onSubmitModify={handleSubmitModify}
        onClickOpenModifyHandler={handleClickOpenModifyHandler}
      />
    )
  );
}
