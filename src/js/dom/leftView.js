import buildProject from "../logics/projectsList-Store";
import setMiddleView from './middleView';

const setLeftView = (() => {
  const leftView = document.createElement('div');
  leftView.classList.add('column-view');
  const myListsAndGeneralContainer = document.createElement('div');
  myListsAndGeneralContainer.classList.add('mylists-and-general-container');

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
    document.querySelector('#id-project-form').style.display = 'flex';
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
  newProjectSaveBtn.textContent = 'Save';
  const newProjectCancelBtn = document.createElement('p');
  newProjectCancelBtn.classList.add('new-project-btn');
  newProjectCancelBtn.classList.add('form-cancel-btn');
  newProjectCancelBtn.textContent = 'Cancel';
  const formBtns = document.createElement('div');
  const newProjectForm = document.createElement('form');
  newProjectForm.classList.add('project-form');
  newProjectForm.setAttribute('id', 'id-project-form');

  let projectToEdit;
  let projectName = '';

  newProjectForm.addEventListener('click', (e) => {
    if (projectName === '' && e.target.classList.contains('form-save-btn')) {
      e.preventDefault();
      const name = document.querySelector('.input-formProject').value;
      if (name === '') {
        alert('Please fill the name field.');
      } else {
        buildProject.addProject(name);
        addProjectToProjects(name);
        document.querySelector('.input-formProject').value = '';
        document.querySelector('#id-project-form').style.display = 'none';
      }
    } else if (projectName !== '' && e.target.classList.contains('form-save-btn')) {
      const newName = document.querySelector('.input-formProject').value;
      if (newName === '') {
        alert('Please fill the name field.');
      } else {
        buildProject.editProject(projectToEdit, newName);
        document.querySelector('.input-formProject').value = '';
        document.querySelector('#id-project-form').style.display = 'none';
        projectName = '';
      }
    } else if (e.target.classList.contains('form-cancel-btn')) {
      document.querySelector('.input-formProject').value = '';
      document.querySelector('.project-form').style.display = 'none';
    }
  });

  const setLeft = () => {
    myListsBtn.appendChild(plusBtn);
    myListsTitleBtn.appendChild(myListsTitle);
    myListsTitleBtn.appendChild(myListsBtn);
    newProjectForm.appendChild(newProjectInput);
    formBtns.appendChild(newProjectSaveBtn);
    formBtns.appendChild(newProjectCancelBtn);
    newProjectForm.appendChild(formBtns);
    myListsMainContainer.appendChild(myListsTitleBtn);
    myListsMainContainer.appendChild(newProjectForm);
    myListsMainContainer.appendChild(myListsContainer);
    defaultList.appendChild(listIcon);
    defaultList.appendChild(defaultListText);
    myListsAndGeneralContainer.appendChild(myListsMainContainer);
    myListsAndGeneralContainer.appendChild(defaultList);
    leftView.appendChild(myListsAndGeneralContainer);

    return leftView;
  };

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
    listIcon.classList.add('far');
    listIcon.classList.add('fa-list-alt');

    const name = document.createElement('span');
    name.textContent = `${myProjectName}`;

    const editIcon = document.createElement('i');
    editIcon.classList.add('edit-icon-left');
    editIcon.classList.add('fas');
    editIcon.classList.add('fa-pen');

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('delete-icon-left');
    deleteIcon.classList.add('fas');
    deleteIcon.classList.add('fa-trash');

    listItem.appendChild(listIcon);
    listItem.appendChild(name);
    listItem.appendChild(editIcon);
    listItem.appendChild(deleteIcon);
    myListsContainer.appendChild(listItem);
    
    myListsAndGeneralContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('projectList-btn')) {
        const project = e.target.textContent;
        setMiddleView.clearTasks();
        setMiddleView.displayProjectMiddle(buildProject.findProject(project));
      }
    });

    listItem.addEventListener('click', (e) => {
      if (e.target.classList.contains('fa-pen')) {
        document.querySelector('.input-formProject').value = listItem.textContent;
        projectName = listItem.textContent;
        projectToEdit = buildProject.findProject(listItem.textContent);
        document.querySelector('#id-project-form').style.display = 'flex';
      } else if (e.target.classList.contains('fa-trash')){
        const projectToDelete = listItem.textContent;
        buildProject.deleteProject(projectToDelete);
        e.target.parentElement.remove();
      }
    });
    return { projectName, projectToEdit };
  };

  document.addEventListener('DOMContentLoaded', displayProjects());

  return { setLeft, displayProjects, addProjectToProjects };
})();

export default setLeftView;