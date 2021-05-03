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

  const plusBtn = document.createElement('i');
  plusBtn.classList.add('fas');
  plusBtn.classList.add('fa-plus');
  plusBtn.classList.add('plus-btn-sm');

  const addTaskTextBtn = document.createElement('span');
  addTaskTextBtn.textContent = 'Add Task';

  const myTasksBtn = document.createElement('button');
  myTasksBtn.setAttribute('id', 'add-task-btn');
  myTasksBtn.addEventListener('click', function() {
    document.querySelector('#mytasks-form').style.display = 'block';
  });

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

  const newTaskSaveBtn = document.createElement('button');
  newTaskSaveBtn.classList.add('new-project-btn');
  newTaskSaveBtn.classList.add('new-task-btn');
  newTaskSaveBtn.classList.add('save-task-btn');
  newTaskSaveBtn.setAttribute('id', 'task-save-btn');
  newTaskSaveBtn.textContent = 'Save';

  const newTaskCancelBtn = document.createElement('button');
  newTaskCancelBtn.classList.add('new-project-btn');
  newTaskCancelBtn.classList.add('new-task-btn');
  newTaskCancelBtn.classList.add('cancel-task-btn');
  newTaskCancelBtn.setAttribute('id', 'task-cancel-btn');
  newTaskCancelBtn.textContent = 'Cancel';

  const myTasksForm = document.createElement('form');
  myTasksForm.classList.add('mytasks-form');
  myTasksForm.setAttribute('id', 'mytasks-form');
  myTasksForm.addEventListener('click', (e) => {
    if (e.target.classList.contains('save-task-btn')) {
      e.preventDefault();
      const description = document.querySelector('#description-input').value;
      const date = document.querySelector('#date-input').value;
      const priority = document.querySelector('#priority-input').value;
      const newTask = description;
      const currentProject = middleViewTitle.textContent;
      if (description === '' || date === 'mm / dd / yyyy') {
        alert('Please fill in description and date fields');
      } else {
        buildTask.addTask(currentProject, description, date, priority);
        addTaskToProject(newTask);
        clearForm();
        document.querySelector('#mytasks-form').style.display = 'none';
      }
    }
  });

  const myTasksList = document.createElement('div');
  myTasksList.classList.add('mytasks-list');
  let taskItem;
  let taskIcon;
  let taskDescription;
  
  const setMiddle = () => {
    myTasksBtn.appendChild(plusBtn);
    myTasksBtn.appendChild(addTaskTextBtn);
    myTasksTitleBtn.appendChild(middleViewTitle);
    myTasksTitleBtn.appendChild(myTasksBtn);
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

  const addTaskToProject = (task) => {
    let myTask;
    if (typeof task === 'string') {
      myTask = task;
    } else {
      myTask = task.description;
    }
  
    taskItem = document.createElement('button');
    taskItem.classList.add('task-btn');

    taskIcon = document.createElement('i');
    taskIcon.classList.add('fas');
    taskIcon.classList.add('fa-check-circle');

    taskDescription = document.createElement('span');
    taskDescription.classList.add('task-description');
    taskDescription.textContent = `${myTask}`;

    taskItem.appendChild(taskIcon);
    taskItem.appendChild(taskDescription);
    myTasksList.appendChild(taskItem);

    taskItem.addEventListener('click', (e) => {
      const clickedTask = e.target.textContent;
      setRightView.clearDetails();
      setRightView.displayTaskDetails(clickedTask);
    });
  };

  const clearTasks = () => {
    const tasksToRemove = document.querySelector('.mytasks-list');
    while (tasksToRemove.firstChild) {
      tasksToRemove.removeChild(tasksToRemove.lastElementChild);
    }
  };

  const clearForm = () => {
    document.getElementById('description-input').value = '';
    document.getElementById('date-input').value = '';
    document.getElementById('priority-input').value = 'None';
  };

  document.addEventListener('DOMContentLoaded', displayProjectMiddle(setDefault()));

  return { setMiddle, displayProjectMiddle, addTaskToProject, clearTasks };
})();

export default setMiddleView;