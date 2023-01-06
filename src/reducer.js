/* eslint-disable default-param-last */
const initialState = {
  newId: 100,
  taskField: { title: '', content: '' },
  task: { id: -1, title: '', content: '' },
  tasks: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setTasks') {
    return {
      ...state,
      tasks: action.payload.tasks,
    };
  }

  if (action.type === 'setTaskField') {
    const foundTask = state.tasks.find((task) => (
      task.id === action.payload.id
    ));

    return {
      ...state,
      taskField: { ...foundTask },
    };
  }

  if (action.type === 'fetchTask') {
    const foundTask = state.tasks.find((task) => (
      task.id === action.payload.id
    ));
    console.log('foundTask', foundTask);
    console.log('action.payload.id', action.payload.id);
    return {
      ...state,
      task: { ...foundTask },
    };
  }

  if (action.type === 'deleteTask') {
    const tasks = state.tasks.filter((task) => (
      task.id !== action.payload.id
    ));

    return {
      ...state,
      tasks,
    };
  }

  if (action.type === 'changeTaskField') {
    const { name, value } = action.payload;
    return {
      ...state,
      taskField: {
        ...state.taskField,
        [name]: value,
      },
    };
  }

  if (action.type === 'modifyTask') {
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
  }

  if (action.type === 'addTask') {
    const { newId, taskField, tasks } = state;
    return {
      ...state,
      taskField: { title: '', content: '' },
      tasks: [
        ...tasks,
        { id: newId + 1, ...taskField }],
    };
  }

  return state;
}
