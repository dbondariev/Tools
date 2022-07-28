import { renderTasks } from './rendererTask';
import { createTask, getTasksList } from './tasksGateway';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.trunc(Math.random() * 1000).toString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then(() => {
      renderTasks();
    });
};

// 1. Prepare data
// 2. Write data to db
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
