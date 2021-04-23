const setLeftView = () => {
  const leftView = document.createElement('div');
  leftView.classList.add('column-view');

  const myListsTitleBtn = document.createElement('div');
  myListsTitleBtn.classList.add('mylists-title-btn');

  const myListsTitle = document.createElement('h3');
  myListsTitle.textContent = 'My Lists';

  const plusBtn = document.createElement('i');
  plusBtn.classList.add('fas');
  plusBtn.classList.add('fa-plus');

  const myListsBtn = document.createElement('button');
  myListsBtn.classList.add('mylists-btn');
  myListsBtn.setAttribute('id', 'add-project-btn');

  const myListsContainer = document.createElement('div');
  myListsContainer.classList.add('mylists-container');

  const listIcon = document.createElement('i');
  listIcon.classList.add('fas');
  listIcon.classList.add('fa-clipboard-list');

  const defaultList = document.createElement('button');
  defaultList.textContent = 'Default List';
  defaultList.classList.add('default-list-btn');
  
  const newProjectForm = document.createElement('form');
  newProjectForm.classList.add('project-form');
  newProjectForm.setAttribute('id', 'id-project-form');
  
  const newProjectInput = document.createElement('input');
  newProjectInput.type = 'text';

  const newProjectSaveBtn = document.createElement('button');
  newProjectSaveBtn.classList.add('new-project-btn');
  newProjectSaveBtn.textContent = 'Save';

  const newProjectCancelBtn = document.createElement('button');
  newProjectCancelBtn.classList.add('new-project-btn');
  newProjectCancelBtn.setAttribute('id', 'project-cancel-btn');
  newProjectCancelBtn.textContent = 'Cancel';

  myListsBtn.appendChild(plusBtn);
  myListsTitleBtn.appendChild(myListsTitle);
  myListsTitleBtn.appendChild(myListsBtn);
  leftView.appendChild(myListsTitleBtn);
  newProjectForm.appendChild(newProjectInput);
  newProjectForm.appendChild(newProjectSaveBtn);
  newProjectForm.appendChild(newProjectCancelBtn);
  leftView.appendChild(newProjectForm);
  leftView.appendChild(myListsContainer);
  defaultList.appendChild(listIcon);
  leftView.appendChild(defaultList);

  return leftView;
};

document.getElementById('add-project-btn').addEventListener('click', openForm);
document.getElementById('project-cancel-btn').addEventListener('click', closeForm);

const openForm = () => {
  document.getElementById('id-project-form').style.display = 'block';
};

const closeForm = () => {
  document.getElementById('id-project-form').style.display = 'none';
};


// const showLeftView = () => {
//   const main = document.getElementById('main');
//   main.textContent = '';
//   main.appendChild(setLeftView());
// };

export default setLeftView;