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
    const projects = buildProject.getProjects();
    let selectedTask;
    projects.forEach((projectObj) => {
      projectObj.content.forEach((taskObj) => {
        if (taskObj.description === task) {
          selectedTask = taskObj;
        }
      });
    });

    const taskIcon1 = document.createElement('i');
    taskIcon1.classList.add('far');
    taskIcon1.classList.add('fa-check-circle');
    taskIcon1.classList.add('rightViewIcon');

    const taskIcon2 = document.createElement('i');
    taskIcon2.classList.add('far');
    taskIcon2.classList.add('fa-check-circle');
    taskIcon2.classList.add('rightViewIcon');

    const taskIcon3 = document.createElement('i');
    taskIcon3.classList.add('far');
    taskIcon3.classList.add('fa-check-circle');
    taskIcon3.classList.add('rightViewIcon');

    const descriptionDetail = document.createElement('p');
    descriptionDetail.classList.add('description-detail');
    descriptionDetail.textContent = `Description: ${selectedTask.description}`;

    const dueDateDetail = document.createElement('p');
    dueDateDetail.classList.add('description-detail');
    dueDateDetail.textContent = `Due Date: ${selectedTask.dueDate}`;

    const priorityDetail = document.createElement('p');
    priorityDetail.classList.add('description-detail');
    priorityDetail.textContent = `Priority: ${selectedTask.priority}`;

    descriptionDetail.appendChild(taskIcon1);
    dueDateDetail.appendChild(taskIcon2);
    priorityDetail.appendChild(taskIcon3);
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