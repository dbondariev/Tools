// Todo List (REST API) - create/update/delete tasks

// Algo:
// start script or user action => change tasks => render todo list (<.list>)
// change tasks:
// add tasks id attribute;
// set tasks -  {task.done = false/true}, {new task} => [tasks]
// click btnCreate => input !== '' => add new task
// render todo list:
// create <li> according tasks and tasks {text, done, id}
// set - checkbox.checked, checkbox.dataset.id to according tasks.id

import { initTodoListHandlers } from './list/todoList.js';
import { renderTasks } from './list/rendererTask.js';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});
