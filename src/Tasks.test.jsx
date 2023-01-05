import {
  render, screen,
} from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import tasks from '../fixtures/tasks';
import Tasks from './Tasks';

test('Tasks', () => {
  const dispatch = jest.fn();
  const taskField = { title: '아무것도 안하기', content: '하루종일 누워있기' };

  const handleClickSetTaskField = jest.fn();
  const handleClickDeleteTask = jest.fn();
  const handleChangeTaskField = jest.fn();
  const handleSubmitModify = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  render((
    <MemoryRouter>
      <Tasks
        tasks={tasks}
        taskField={taskField}
        handleClickSetTaskField={handleClickSetTaskField}
        handleClickDeleteTask={handleClickDeleteTask}
        handleChangeTaskField={handleChangeTaskField}
        handleSubmitModify={handleSubmitModify}
      />
    </MemoryRouter>
  ));

  screen.getByText('아무것도 안하기');

  screen.getByText('하루종일 누워있기');
  screen.getByText('타입스크립트 교재 1시간');

  screen.getAllByText('수정');
  screen.getAllByText('삭제');
});
