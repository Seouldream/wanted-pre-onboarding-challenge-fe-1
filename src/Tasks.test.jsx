import {
  render, screen,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import tasks from '../fixtures/tasks';
import Tasks from './Tasks';

test('Tasks', () => {
  render((
    <MemoryRouter>
      <Tasks
        tasks={tasks}
      />
    </MemoryRouter>
  ));

  screen.getByText('아무것도 안하기');
  screen.getByText('코딩공부');
});
