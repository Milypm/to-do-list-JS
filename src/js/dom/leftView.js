import buildProject from "../logics/projectsList-Store";
import UI from './projectsList-UI';
import setMiddleView from './middleView';

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
        addProjectToProjects(name); //Passing a string to the addProjectToProjects method
        UI.clearFields();
        document.querySelector('#id-project-form').style.display = 'none';
      }
    } else if (e.target.classList.contains('form-cancel-btn')) {
      document.querySelector('#id-project-form').style.display = 'none';
    }
  });

  const displayProjects = () => {
    const projects = buildProject.getProjects();
    projects.shift();
    projects.forEach((projectObj) => addProjectToProjects(projectObj));
  };

  const addProjectToProjects = (project) => {
    let myProjectName;
    if (typeof project === 'string') {
      myProjectName = project;
    } else {
      myProjectName = project.name;
    }

    const listItem = document.createElement('button');
    listItem.classList.add('projectList-btn');

    const listIcon = document.createElement('i');
    listIcon.classList.add('fas');
    listIcon.classList.add('fa-list-alt');

    const name = document.createElement('span');
    name.textContent = `${myProjectName}`;

    const editIcon = document.createElement('i');
    editIcon.classList.add('fas');
    editIcon.classList.add('fa-pen');

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas');
    deleteIcon.classList.add('fa-trash');
    // listItem.addEventListener('click', function() {

    // });
    listItem.appendChild(listIcon);
    listItem.appendChild(name);
    listItem.appendChild(editIcon);
    listItem.appendChild(deleteIcon);
    myListsContainer.appendChild(listItem);

    listItem.addEventListener('click', function () {
      const projectName = listItem.textContent;
      const projects = buildProject.getProjects();
      let getProject;
      projects.forEach((project) => {
        if (project.name === projectName) {
          getProject = project;
        }
      });
      setMiddleView.displayProjectDetails(getProject);
    });
  };

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

  document.addEventListener('DOMContentLoaded', displayProjects());

  return leftView;
};

export default setLeftView;