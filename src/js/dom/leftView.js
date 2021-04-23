const setLeftView = () => {
  const leftView = document.createElement('div');
  leftView.classList.add('column-view');

  const myListsMainContainer = document.createElement('div');
  myListsMainContainer.classList.add('mylists-maincontainer');

  const myListsTitleBtn = document.createElement('div');
  myListsTitleBtn.classList.add('mylists-title-btn');

  const myListsTitle = document.createElement('h3');
  myListsTitle.textContent = 'My Lists';

  const plusBtn = document.createElement('i');
  plusBtn.classList.add('fas');
  plusBtn.classList.add('fa-plus');

  const myListsBtn = document.createElement('button');
  myListsBtn.classList.add('plus-btn');
  myListsBtn.setAttribute('id', 'add-project-btn');

  const myListsContainer = document.createElement('div');
  myListsContainer.classList.add('mylists-container');

  const listIcon = document.createElement('i');
  listIcon.classList.add('fas');
  listIcon.classList.add('fa-list-alt');

  const defaultListText = document.createElement('span');
  defaultListText.textContent = 'General List';

  const defaultList = document.createElement('button');
  defaultList.classList.add('default-list-btn');
  
  const newProjectForm = document.createElement('form');
  newProjectForm.classList.add('project-form');
  newProjectForm.setAttribute('id', 'id-project-form');
  
  const newProjectInput = document.createElement('input');
  newProjectInput.setAttribute('id', 'input-formProject');
  newProjectInput.type = 'text';

  const newProjectSaveBtn = document.createElement('button');
  newProjectSaveBtn.classList.add('new-project-btn');
  newProjectSaveBtn.setAttribute('id', 'project-save-btn');
  newProjectSaveBtn.textContent = 'Save';

  const newProjectCancelBtn = document.createElement('button');
  newProjectCancelBtn.classList.add('new-project-btn');
  newProjectCancelBtn.setAttribute('id', 'project-cancel-btn');
  newProjectCancelBtn.textContent = 'Cancel';

  myListsBtn.appendChild(plusBtn);
  myListsTitleBtn.appendChild(myListsTitle);
  myListsTitleBtn.appendChild(myListsBtn);
  newProjectForm.appendChild(newProjectInput);
  newProjectForm.appendChild(newProjectSaveBtn);
  newProjectForm.appendChild(newProjectCancelBtn);
  myListsMainContainer.appendChild(myListsTitleBtn);
  myListsMainContainer.appendChild(newProjectForm);
  myListsMainContainer.appendChild(myListsContainer);
  defaultList.appendChild(listIcon);
  defaultList.appendChild(defaultListText);
  leftView.appendChild(myListsMainContainer);
  leftView.appendChild(defaultList);

  return leftView;
};

// document.querySelector('.mylists-title-btn').addEventListener('click', (e) => {
//   if (e.target.classList.contains('mylists-btn')) {
//     document.querySelector('#id-project-form').style.display = 'block';
//   }
// });

// document.querySelector('#id-project-form').addEventListener('click', (e) => {
//   if (e.target.classList.contains('new-project-btn')) {
//     e.preventDefault();
//     const name = document.querySelector('#input-formProject').value;
//     if (name === '') {
//       alert('Please fill the name field.');
//     } else {
//       const newProject = createProject(name);
//       projectsList(newProject);
//       buildProject.addProject(newProject);
//       clearFields();
//     }
//   } else {
//     document.querySelector('#id-project-form').style.display = 'none';
//   }
// });


// const showLeftView = () => {
//   const main = document.getElementById('main');
//   main.textContent = '';
//   main.appendChild(setLeftView());
// };

export default setLeftView;