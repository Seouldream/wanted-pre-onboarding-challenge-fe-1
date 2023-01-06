import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import tasks from '../fixtures/tasks';
import ToDoApp from './ToDoApp';

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks,
    taskField: { title: '', content: '' },
  }));

  render((
    <MemoryRouter>
      <ToDoApp />
    </MemoryRouter>
  ));

  screen.getByText('할 일 목록');
  screen.getByText('아무것도 안하기');
});
