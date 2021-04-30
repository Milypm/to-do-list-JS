import buildProject from '../logics/projectsList-Store';
import buildTask from '../logics/TasksList-Store';

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
  priorityFormInput.classList.add('priority-form-input')
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
      const currentProject = middleViewTitle.textContent;
      const description = document.querySelector('.task-form-input').value;
      const date = document.querySelector('.task-form-input').value;
      const priority = document.querySelector('.task-form-input').value;
      //console.log(date, priority);
      if (description === '', date === '') {
        alert('Please fill in description and date fields');
      } else {
        buildTask.addTask(currentProject, description, date, priority);
      }
    }
  });

  const myTasksList = document.createElement('div');
  myTasksList.classList.add('mytasks-list');
  
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
  

  const displayProjectDetails = (project) => {
    middleViewTitle.textContent = project.name;
    let currentProject = project.name;

  };

  return { setMiddle, displayProjectDetails };
})();

export default setMiddleView;