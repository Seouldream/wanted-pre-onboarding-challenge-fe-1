import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import tasks from '../fixtures/tasks';

import TasksContainer from './TasksContainer';

test('TasksContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));
  render((
    <MemoryRouter>
      <TasksContainer />
    </MemoryRouter>
  ));

  screen.getByText('아무것도 안하기');
  screen.getByText('코딩공부');
});
