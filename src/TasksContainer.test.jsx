import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import tasks from '../fixtures/tasks';

import TasksContainer from './TasksContainer';

test('TasksContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));
  render((
    <TasksContainer />
  ));

  screen.getByText('아무것도 안하기');

  screen.getByText('하루종일 누워있기');
  screen.getByText('타입스크립트 교재 1시간');

  screen.getAllByText('수정');
  screen.getAllByText('삭제');
});
