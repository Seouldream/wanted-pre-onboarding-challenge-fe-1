import { createSlice } from '@reduxjs/toolkit';

const toDo = createSlice({
  name: 'toDo',
  initialState: {
    newId: 100,
    taskField: { title: '', content: '' },
    task: { id: -1, title: '', content: '' },
    tasks: [],
  },

  reducers: {
    setTasks: (state, action) => ({
      ...state,
      tasks: action.payload.tasks,
    }),

    setTaskField: (state, action) => {
      const foundTask = state.tasks.find((task) => (
        task.id === action.payload.id
      ));

      return {
        ...state,
        taskField: { ...foundTask },
      };
    },

    fetchTask: (state, action) => {
      const foundTask = state.tasks.find((task) => (
        task.id === action.payload.id
      ));
      return {
        ...state,
        task: { ...foundTask },
      };
    },

    deleteTask: (state, action) => {
      const tasks = state.tasks.filter((task) => (
        task.id !== action.payload.id
      ));

      return {
        ...state,
        tasks,
      };
    },

    changeTaskField: (state, action) => {
      const { name, value } = action.payload;
      return {
        ...state,
        taskField: {
          ...state.taskField,
          [name]: value,
        },
      };
    },

    modifyTask: (state, action) => {
      const { taskField, tasks } = state;

      const modifiedTasks = tasks.map((task) => (
        task.id === action.payload.id
          ? { ...task, title: taskField.title, content: taskField.content }
          : task
      ));

      return {
        ...state,
        taskField: { title: '', content: '' },
        tasks: modifiedTasks,
      };
    },

    addTask: (state) => {
      const { newId, taskField, tasks } = state;
      return {
        ...state,
        taskField: { title: '', content: '' },
        tasks: [
          ...tasks,
          { id: newId + 1, ...taskField }],
      };
    },
  },
});

export default toDo;
