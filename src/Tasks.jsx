import { useState } from 'react';
import Task from './Task';
import TaskModifyForm from './TaskModifyForm';

export default function Tasks({
  tasks,
  taskField,
  handleClickSetTaskField,
  handleClickDeleteTask,
  handleChangeTaskField,
  handleSubmitModify,
}) {
  const [isOpen, setIsOpen] = useState('');

  const handleClickOpenModifyHandler = (id) => {
    setIsOpen((element) => (element.isOpen !== id ? id : ''));

    if (isOpen === id) {
      setIsOpen('');
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        isOpen !== task.id
          ? (
            <Task
              key={task.id}
              task={task}
              onClickSetTaskField={handleClickSetTaskField}
              onClickOpenModifyHandler={handleClickOpenModifyHandler}
              onClickDeleteTask={handleClickDeleteTask}
            />
          )
          : (
            <TaskModifyForm
              key={task.id}
              taskField={taskField}
              task={task}
              onChangeTaskField={handleChangeTaskField}
              onSubmitModify={handleSubmitModify}
              onClickOpenModifyHandler={handleClickOpenModifyHandler}
            />
          )
      ))}
    </ul>
  );
}
