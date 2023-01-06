export function setTasks(tasks) {
  return {
    type: 'setTasks',
    payload: { tasks },
  };
}

export function setTaskField(id) {
  return {
    type: 'setTaskField',
    payload: { id },
  };
}

export function changeTaskField({ name, value }) {
  return {
    type: 'changeTaskField',
    payload: { name, value },
  };
}

export function deleteTask(id) {
  return {
    type: 'deleteTask',
    payload: { id },
  };
}

export function modifyTask(id) {
  return {
    type: 'modifyTask',
    payload: { id },
  };
}

export function addTask() {
  return {
    type: 'addTask',
  };
}

export function fetchTask(id) {
  return {
    type: 'fetchTask',
    payload: { id },
  };
}

export function login({ email, password }) {
  return {
    type: 'login',
    payload: { email, password },
  };
}

export function resetSignupStatus() {
  return {
    type: 'resetSignupStatus',
  };
}

export function signup({
  name, email, password, confirmPassword,
}) {
  return {
    type: 'signup',
    payload: {
      name, email, password, confirmPassword,
    },
  };
}
