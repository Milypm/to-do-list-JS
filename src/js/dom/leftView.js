import buildProject from "../logics/projectsList-Store";
import UI from './projectsList-UI';

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
  myListsBtn.addEventListener('click', function() {
    document.querySelector('#id-project-form').style.display = 'block';
  });

  const myListsContainer = document.createElement('div');
  myListsContainer.classList.add('mylists-container');

  const listIcon = document.createElement('i');
  listIcon.classList.add('fas');
  listIcon.classList.add('fa-list-alt');

  const defaultListText = document.createElement('span');
  defaultListText.textContent = 'General List';

  const defaultList = document.createElement('button');
  defaultList.classList.add('projectList-btn');
  defaultList.classList.add('default-list-btn');
  
  const newProjectInput = document.createElement('input');
  newProjectInput.classList.add('input-formProject');
  newProjectInput.type = 'text';

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

  const newProjectForm = document.createElement('form');
  newProjectForm.classList.add('project-form');
  newProjectForm.setAttribute('id', 'id-project-form');
  newProjectForm.addEventListener('click', (e) => {
    if (e.target.classList.contains('form-save-btn')) {
      e.preventDefault();
      const name = document.querySelector('.input-formProject').value;
      if (name === '') {
        alert('Please fill the name field.');
      } else {
        buildProject.addProject(name);
        UI.clearFields();
        document.querySelector('#id-project-form').style.display = 'none';
        UI.addProjectToProjects();
      }
    } else if (e.target.classList.contains('form-cancel-btn')) {
      document.querySelector('#id-project-form').style.display = 'none';
    }
  });

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

  // document.addEventListener('DOMContentLoaded', UI.displayProjects());

  return leftView;
};

// const showLeftView = () => {
//   const main = document.getElementById('main');
//   main.textContent = '';
//   main.appendChild(setLeftView());
// };

export default setLeftView;