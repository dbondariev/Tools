import { renderTasks } from './rendererTask.js';
import { getTasksList, updateTask, deleteTask } from './tasksGateway.js';
export const onTaskAction = e => {
  const isCheckbox = e.target.classList.contains('list-item__checkbox');
  const isDeleteBtn = e.target.classList.contains('list-item__delete-btn');

  if (!isCheckbox && !isDeleteBtn) {
    return;
  }

  const taskId = e.target.closest('.list-item').dataset.id;

  if (isCheckbox) {
    getTasksList().then(result => {
      const tasksList = result;
      const {
        text,
        createDate
      } = tasksList.find(task => task.id === taskId);
      const done = e.target.checked;
      const updatedTask = {
        text,
        createDate,
        done,
        finishDate: done ? new Date().toISOString() : null
      };
      updateTask(taskId, updatedTask).then(() => getTasksList()).then(() => {
        renderTasks();
      });
    });
  }

  if (isDeleteBtn) {
    deleteTask(taskId).then(() => getTasksList()).then(() => {
      renderTasks();
    });
  }
}; // 1. Prepare data
// 2. Update data in db
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data