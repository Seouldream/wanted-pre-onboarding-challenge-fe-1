import { fireEvent, render, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import TaskModifyForm from './TaskModifyForm';

test('Tasks', () => {
  const task = { id: 1, title: '아무것도 안하기', content: '하루종일 누워있기' };
  const taskField = { title: '아무것도 안하기', content: '하루종일 누워있기' };
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const handleChangeTaskField = jest.fn();
  const handleSubmitModify = jest.fn();
  const handleClickOpenModifyHandler = jest.fn();

  render((
    <TaskModifyForm
      key={task.id}
      taskField={taskField}
      task={task}
      onChangeTaskField={handleChangeTaskField}
      onSubmitModify={handleSubmitModify}
      onClickOpenModifyHandler={handleClickOpenModifyHandler}
    />
  ));

  screen.getByDisplayValue('아무것도 안하기');
  screen.getByDisplayValue('하루종일 누워있기');

  screen.getByText('제출');
  screen.getByText('취소');

  fireEvent.change(screen.getByDisplayValue('아무것도 안하기'), {
    target: { value: '뭐라도 하기' },
  });

  fireEvent.change(screen.getByDisplayValue('하루종일 누워있기'), {
    target: { value: '일어나기' },
  });

  expect(handleChangeTaskField).toBeCalledWith(
    { name: 'title', value: '뭐라도 하기' },
  );

  expect(handleChangeTaskField).toBeCalledWith(
    { name: 'content', value: '일어나기' },
  );

  expect(handleChangeTaskField).toHaveBeenCalledTimes(2);

  fireEvent.click(screen.getByText('제출'));

  expect(handleSubmitModify).toBeCalledWith(1);
});
