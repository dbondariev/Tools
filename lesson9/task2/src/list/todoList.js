import { onCreateTask } from './createTask';
import { onTaskAction } from './updateTask';

export const initTodoListHandlers = () => {
  const btnCreateTaskElem = document.querySelector('.create-task-btn');
  btnCreateTaskElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.todo-list');
  todoListElem.addEventListener('click', onTaskAction);
};
