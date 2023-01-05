import { fireEvent, render, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import TaskForm from './TaskForm';

test('Tasks', () => {
  const taskField = { title: '', content: '' };

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const handleChangeTaskField = jest.fn();
  const handleSubmitTask = jest.fn();

  render((
    <TaskForm
      taskField={taskField}
      onChangeTaskField={handleChangeTaskField}
      onSubmitTask={handleSubmitTask}
    />
  ));

  screen.getByLabelText('내용');
  screen.getByLabelText('제목');
  screen.getByText('추가');

  fireEvent.change(screen.getByLabelText('제목'), {
    target: { value: '과제하기' },
  });

  fireEvent.change(screen.getByLabelText('내용'), {
    target: { value: '원티드 온보드 투두앱 만들기' },
  });

  expect(handleChangeTaskField).toBeCalledWith(
    { name: 'title', value: '과제하기' },
  );

  expect(handleChangeTaskField).toBeCalledWith(
    { name: 'content', value: '원티드 온보드 투두앱 만들기' },
  );

  fireEvent.click(screen.getByText('추가'));

  expect(handleSubmitTask).toBeCalled();
});
