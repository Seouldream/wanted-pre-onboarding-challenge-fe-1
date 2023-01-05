import { fireEvent, render, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import Task from './Task';

test('Task', () => {
  const dispatch = jest.fn();

  const task = { id: 1, title: '아무것도 안하기', content: '하루종일 누워있기' };

  const handleClickSetTaskField = jest.fn();

  const handleClickOpenModifyHandler = jest.fn();

  const handleClickDeleteTask = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  render((
    <Task
      key={task.id}
      task={task}
      onClickSetTaskField={handleClickSetTaskField}
      onClickOpenModifyHandler={handleClickOpenModifyHandler}
      onClickDeleteTask={handleClickDeleteTask}
    />
  ));

  screen.getByText('아무것도 안하기');
  screen.getByText('하루종일 누워있기');

  screen.getByText('수정');
  screen.getByText('삭제');

  fireEvent.click(screen.getByText('수정'));

  expect(handleClickSetTaskField).toBeCalledWith(1);
  expect(handleClickOpenModifyHandler).toBeCalledWith(1);

  fireEvent.click(screen.getByText('삭제'));

  expect(handleClickDeleteTask).toBeCalledWith(1);
});
