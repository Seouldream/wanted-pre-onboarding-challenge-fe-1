/* eslint-disable no-unreachable */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Link, Outlet, Route, Routes,
} from 'react-router-dom';
import tasks from '../fixtures/tasks';
import { setTasks } from './action';
import Home from './Home';
import ToDo from './ToDoDetail';
import ToDoList from './ToDoApp';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTasks(tasks));
  });

  return (
    <>
      <div>
        <nav>
          <ul>
            <Link to="/home">
              Home
            </Link>
            {' '}
            <Link to="/tasks">
              Todo
            </Link>
            {' '}
            <Link to="/login">
              Login
            </Link>
          </ul>
        </nav>
        <Outlet />
      </div>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="tasks" element={<ToDoList />}>
          <Route path=":taskId" element={<ToDo />} />
        </Route>
      </Routes>
    </>
  );
}
