import buildProject from '../logics/projectsList-Store';
import setMiddleView from './middleView';

const UI = (() => {
  const displayProjects = () => {
    const projects = buildProject.getProjects();
    projects.forEach((project) => addProjectToProjects(project));
  };
  
  const addProjectToProjects = (project) => {
    // let myProjectName;
    // if (typeof project === 'string') {
    //   myProjectName = project;
    // } else {
    //   myProjectName = project.name;
    // }
    const listItem = document.createElement('button');
    listItem.classList.add('projectList-btn');

    const listIcon = document.createElement('i');
    listIcon.classList.add('fas');
    listIcon.classList.add('fa-list-alt');

    const name = document.createElement('span');
    name.textContent = `${project['name']}`;

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
  };
  
  const clearFields = () => {
    document.querySelector('.input-formProject').value = '';
  };

  return {
    displayProjects, addProjectToProjects, clearFields
  };
})();

export default UI;