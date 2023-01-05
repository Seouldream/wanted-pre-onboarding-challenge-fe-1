import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import TaskCreateContainer from './TaskCreateContainer';
import tasks from '../fixtures/tasks';

test('TaskCreateContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks,
    taskField: { title: '', content: '' },
  }));
  render((
    <TaskCreateContainer />
  ));
});
