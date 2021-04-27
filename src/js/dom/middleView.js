const setMiddleView = () => {
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

  const descripFormInput = document.createElement('input');
  descripFormInput.classList.add('task-form-input');
  descripFormInput.type = 'text';

  // const descripFormInput = document.createElement('input');
  // descripFormInput.classList.add('task-form-input');
  // descripFormInput.type = 'text';

  const newProjectSaveBtn = document.createElement('button');
  newProjectSaveBtn.classList.add('new-project-btn');
  newProjectSaveBtn.classList.add('form-save-btn');
  newProjectSaveBtn.setAttribute('id', 'project-save-btn');
  newProjectSaveBtn.textContent = 'Save';

  const newProjectCancelBtn = document.createElement('button');
  newProjectCancelBtn.classList.add('new-project-btn');
  newProjectCancelBtn.classList.add('form-cancel-btn');
  newProjectCancelBtn.setAttribute('id', 'project-cancel-btn');
  newProjectCancelBtn.textContent = 'Cancel';

  const myTasksForm = document.createElement('form');

  const myTasksList = document.createElement('div');
  myTasksList.classList.add('mytasks-list');

  myTasksBtn.appendChild(plusBtn);
  myTasksBtn.appendChild(addTaskTextBtn);
  myTasksTitleBtn.appendChild(middleViewTitle);
  myTasksTitleBtn.appendChild(myTasksBtn);
  middleView.appendChild(myTasksTitleBtn);

  return middleView;
};

// const showMiddleView = () => {
//   const main = document.getElementById('main');
//   main.textContent = '';
//   main.appendChild(setMiddleView());
// };

export default setMiddleView;