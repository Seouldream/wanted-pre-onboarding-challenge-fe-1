import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TasksContainer from './TasksContainer';
import tasks from '../fixtures/tasks';
import { setTasks } from './action';
import TaskCreateContainer from './TaskCreateContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTasks(tasks));
  });
  return (
    <>
      <h1>할 일 목록</h1>
      <TaskCreateContainer />
      <TasksContainer />
    </>
  );
}
