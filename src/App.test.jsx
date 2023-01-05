import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import tasks from '../fixtures/tasks';
import App from './App';

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    tasks,
    taskField: { title: '', content: '' },
  }));

  render((
    <App />
  ));

  screen.getByText('할 일 목록');
  screen.getByText('아무것도 안하기');

  screen.getByText('하루종일 누워있기');
  screen.getByText('타입스크립트 교재 1시간');

  screen.getByText('추가');
  screen.getAllByText('수정');
  screen.getAllByText('삭제');
});
