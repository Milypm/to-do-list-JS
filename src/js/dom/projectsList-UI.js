import buildProject from '../logics/projectsList-Store';

const UI = (() => {
  const displayProjects = () => {
    const projects = buildProject.getProjects();
    projects.forEach((project) => addProjectToProjects(project));
  };
  
  const addProjectToProjects = (project) => {
    const list = document.querySelector('.mylists-container');
    const listItem = document.createElement('button');
    listItem.classList.add('projectList-btn');
    listItem.innerHTML = `<i class="far fa-list-alt"></i>`;
    const name = document.createElement('span');
    name.textContent = `${project}`;
    listItem.innerHTML = `<i class="fas fa-pen"></i>`;
    listItem.innerHTML = `<i class="fas fa-trash"></i>`;
  
    listItem.appendChild(name);
    list.appendChild(listItem);
  };
  
  const clearFields = () => {
    document.querySelector('#input-formProject').value = '';
  };

  return {
    displayProjects, addProjectToProjects, clearFields
  };
})();

export default UI;