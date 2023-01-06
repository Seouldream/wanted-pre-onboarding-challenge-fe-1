// redux/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import reducer from './reducer';
import toDo from '../features/counter/counterSlice';

const rootReducer = combineReducers({
  reducer,
  toDo,
});

export default rootReducer;
