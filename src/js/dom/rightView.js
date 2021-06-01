import buildProject from '../logics/projectsList-Store';

const setRightView = (() => {
  const rightView = document.createElement('div');
  rightView.classList.add('column-view');

  const rightViewTitle = document.createElement('h3');
  rightViewTitle.textContent = 'Task Details';

  const detailsContainer = document.createElement('div');
  detailsContainer.classList.add('details-container');

  const taskDetailsContainer = document.createElement('div');
  taskDetailsContainer.classList.add('taskdetails-container');

  const setRight = () => {
    taskDetailsContainer.appendChild(rightViewTitle);
    taskDetailsContainer.appendChild(detailsContainer);
    rightView.appendChild(taskDetailsContainer);

    return rightView;
  };

  const displayTaskDetails = (task) => {
    let selectedTask;
    const projects = buildProject.getProjects();
    projects.forEach((projectObj) => {
      projectObj.content.forEach((taskObj) => {
        if (taskObj.title === task) {
          selectedTask = taskObj;
        }
      });
    });

    const titleDetail = document.createElement('p');
    titleDetail.classList.add('description-detail');
    titleDetail.setAttribute('id', 'task-title-id');
    titleDetail.textContent = `Title: ${selectedTask.title}`;

    const descriptionDetail = document.createElement('p');
    descriptionDetail.classList.add('description-detail');
    descriptionDetail.setAttribute('id', 'task-description-id');
    descriptionDetail.textContent = `Description: ${selectedTask.description}`;

    const dueDateDetail = document.createElement('p');
    dueDateDetail.classList.add('description-detail');
    dueDateDetail.setAttribute('id', 'task-date-id');
    dueDateDetail.textContent = `Due Date: ${selectedTask.dueDate}`;

    const priorityDetail = document.createElement('p');
    priorityDetail.classList.add('description-detail');
    priorityDetail.setAttribute('id', 'task-priority-id');
    priorityDetail.textContent = `Priority: ${selectedTask.priority}`;

    detailsContainer.appendChild(titleDetail);
    detailsContainer.appendChild(descriptionDetail);
    detailsContainer.appendChild(dueDateDetail);
    detailsContainer.appendChild(priorityDetail);
  };

  const clearDetails = () => {
    const detailsToRemove = document.querySelector('.details-container');
    while (detailsToRemove.firstChild) {
      detailsToRemove.removeChild(detailsToRemove.lastElementChild);
    }
  };

  return { setRight, displayTaskDetails, clearDetails };
})();

export default setRightView;