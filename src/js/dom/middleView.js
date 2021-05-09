import buildProject from '../logics/projectsList-Store';
import buildTask from '../logics/tasksList-Store';
import setRightView from './rightView';

const setMiddleView = (() => {
  const middleView = document.createElement('div');
  middleView.classList.add('column-view');

  const myTasksTitleBtn = document.createElement('div');
  myTasksTitleBtn.classList.add('myTasks-title-btn');

  const middleViewTitle = document.createElement('h3');
  middleViewTitle.textContent = 'General List';

  const myTasksForm = document.createElement('form');

  const plusBtn = document.createElement('i');
  plusBtn.classList.add('fas');
  plusBtn.classList.add('fa-plus');
  plusBtn.classList.add('plus-btn-sm');

  const addTaskTextBtn = document.createElement('span');
  addTaskTextBtn.textContent = 'Add Task';

  const myTasksBtn = document.createElement('button');
  myTasksBtn.setAttribute('id', 'add-task-btn');
  myTasksBtn.addEventListener('click', () => {
    document.querySelector('#mytasks-form').style.display = 'block';
  });

  const titleFormInput = document.createElement('input');
  titleFormInput.classList.add('task-form-input');
  titleFormInput.setAttribute('id', 'title-input');
  titleFormInput.type = 'text';
  titleFormInput.placeholder = 'Task title';

  const descripFormInput = document.createElement('input');
  descripFormInput.classList.add('task-form-input');
  descripFormInput.setAttribute('id', 'description-input');
  descripFormInput.type = 'text';
  descripFormInput.placeholder = 'Task description';

  const dateFormInput = document.createElement('input');
  dateFormInput.classList.add('task-form-input');
  dateFormInput.setAttribute('id', 'date-input');
  dateFormInput.type = 'date';

  const priorityNone = document.createElement('option');
  priorityNone.classList.add('priority-option');
  priorityNone.textContent = 'None';

  const priorityUrgent = document.createElement('option');
  priorityUrgent.classList.add('priority-option');
  priorityUrgent.textContent = 'Urgent';

  const priorityHigh = document.createElement('option');
  priorityHigh.classList.add('priority-option');
  priorityHigh.textContent = 'High';

  const priorityRegular = document.createElement('option');
  priorityRegular.classList.add('priority-option');
  priorityRegular.textContent = 'Regular';

  const priorityLow = document.createElement('option');
  priorityLow.classList.add('priority-option');
  priorityLow.textContent = 'Low';

  const priorityFormInput = document.createElement('select');
  priorityFormInput.classList.add('task-form-input');
  priorityFormInput.setAttribute('id', 'priority-input');

  const inputDatePriority = document.createElement('div');
  inputDatePriority.classList.add('input-date-priority');

  const newTaskSaveBtn = document.createElement('p');
  newTaskSaveBtn.classList.add('new-project-btn');
  newTaskSaveBtn.classList.add('new-task-btn');
  newTaskSaveBtn.classList.add('save-task-btn');
  newTaskSaveBtn.setAttribute('id', 'task-save-btn');
  newTaskSaveBtn.textContent = 'Save';

  const newTaskCancelBtn = document.createElement('p');
  newTaskCancelBtn.classList.add('new-project-btn');
  newTaskCancelBtn.classList.add('new-task-btn');
  newTaskCancelBtn.classList.add('cancel-task-btn');
  newTaskCancelBtn.setAttribute('id', 'task-cancel-btn');
  newTaskCancelBtn.textContent = 'Cancel';

  const myTasksList = document.createElement('div');
  myTasksList.classList.add('mytasks-list');
  let taskItem;
  let taskIcon;
  // let taskTitle;
  let taskDescription;
  // let taskTitleContainer;
  let taskDescriptionContainer;
  let taskPriority;

  const setMiddle = () => {
    myTasksBtn.appendChild(plusBtn);
    myTasksBtn.appendChild(addTaskTextBtn);
    myTasksTitleBtn.appendChild(middleViewTitle);
    myTasksTitleBtn.appendChild(myTasksBtn);
    myTasksForm.appendChild(titleFormInput);
    myTasksForm.appendChild(descripFormInput);
    priorityFormInput.appendChild(priorityNone);
    priorityFormInput.appendChild(priorityUrgent);
    priorityFormInput.appendChild(priorityHigh);
    priorityFormInput.appendChild(priorityRegular);
    priorityFormInput.appendChild(priorityLow);
    inputDatePriority.appendChild(dateFormInput);
    inputDatePriority.appendChild(priorityFormInput);
    inputDatePriority.appendChild(newTaskSaveBtn);
    inputDatePriority.appendChild(newTaskCancelBtn);
    myTasksForm.appendChild(inputDatePriority);
    middleView.appendChild(myTasksTitleBtn);
    middleView.appendChild(myTasksForm);
    middleView.appendChild(myTasksList);

    return middleView;
  };

  const setDefault = () => {
    const projects = buildProject.getProjects();
    let getProject;
    projects.forEach((project) => {
      if (project.name === 'General List') {
        getProject = project;
      }
    });
    return getProject;
  };

  const displayProjectMiddle = (project) => {
    middleViewTitle.textContent = project.name;
    project.content.forEach((taskObj) => addTaskToProject(taskObj));
  };

  const addTaskToProject = (task, priority) => {
    let myTask;
    let myPriority;
    let color;
    if (typeof task === 'string') {
      myTask = task;
      myPriority = priority;
    } else {
      myTask = task.description;
      myPriority = getPriorityFromTask(task);
    }

    if (myPriority === 'None') {
      color = '#98928e';
    } else if (myPriority === 'Urgent') {
      color = '#ea3c33';
    } else if (myPriority === 'High') {
      color = '#f08034';
    } else if (myPriority === 'Regular') {
      color = '#e4e53f';
    } else if (myPriority === 'Low') {
      color = '#76b62c';
    }

    taskItem = document.createElement('button');
    taskItem.classList.add('task-btn');

    taskIcon = document.createElement('i');
    taskIcon.classList.add('fas');
    taskIcon.classList.add('fa-check-circle');

    taskDescription = document.createElement('span');
    taskDescription.classList.add('task-description');
    taskDescription.textContent = `${myTask}`;

    taskDescriptionContainer = document.createElement('div');

    taskPriority = document.createElement('i');
    taskPriority.classList.add('fas');
    taskPriority.classList.add('fa-exclamation-triangle');
    taskPriority.style.color = color;

    taskDescriptionContainer.appendChild(taskIcon);
    taskDescriptionContainer.appendChild(taskDescription);
    taskItem.appendChild(taskDescriptionContainer);
    taskItem.appendChild(taskPriority);
    myTasksList.appendChild(taskItem);

    taskItem.addEventListener('click', (e) => {
      const clickedTask = e.target.textContent;
      setRightView.clearDetails();
      setRightView.displayTaskDetails(clickedTask);
    });
  };

  myTasksForm.classList.add('mytasks-form');
  myTasksForm.setAttribute('id', 'mytasks-form');
  myTasksForm.addEventListener('click', (e) => {
    if (e.target.classList.contains('save-task-btn')) {
      e.preventDefault();
      const title = document.querySelector('#title-input').value;
      const description = document.querySelector('#description-input').value;
      const date = document.querySelector('#date-input').value;
      const priority = document.querySelector('#priority-input').value;
      const newTask = description;
      const newPriority = priority;
      const currentProject = middleViewTitle.textContent;
      if (title === '' || description === '' || date === 'mm / dd / yyyy') {
        alert('Please fill in description and date fields');
      } else {
        buildTask.addTask(currentProject, title, description, date, priority);
        addTaskToProject(newTask, newPriority);
        clearForm();
        document.querySelector('#mytasks-form').style.display = 'none';
      }
    } else if (e.target.classList.contains('cancel-task-btn')) {
      document.querySelector('#mytasks-form').style.display = 'none';
    }
  });

  const getPriorityFromTask = (taskObject) => {
    let priority;
    const projects = buildProject.getProjects();
    projects.forEach((projectObj) => {
      projectObj.content.forEach((taskObj) => {
        if (taskObj.description === taskObject.description) {
          priority = taskObj.priority;
        }
      });
    });
    return priority;
  };

  const clearTasks = () => {
    const tasksToRemove = document.querySelector('.mytasks-list');
    while (tasksToRemove.firstChild) {
      tasksToRemove.removeChild(tasksToRemove.lastElementChild);
    }
  };

  const clearForm = () => {
    document.getElementById('title-input').value = '';
    document.getElementById('description-input').value = '';
    document.getElementById('date-input').value = '';
    document.getElementById('priority-input').value = 'None';
  };

  document.addEventListener('DOMContentLoaded', displayProjectMiddle(setDefault()));

  return {
    setMiddle,
    displayProjectMiddle,
    addTaskToProject,
    clearTasks,
  };
})();

export default setMiddleView;