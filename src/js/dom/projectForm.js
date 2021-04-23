import setLeftView from './leftView';

setLeftView;

const addProjectToProjects = (project) => {
  const list = document.querySelector('.mylists-container');
  const listItem = document.createElement('button');
  listItem.innerHTML = `<i class="far fa-list-alt"></i>`;
  listItem.innerHTML = `<span>${project.name}</span>`;
  listItem.innerHTML = `<i class="fas fa-pen"></i>`;
  listItem.innerHTML = `<i class="fas fa-trash"></i>`;

  list.appendChild(listItem);
};

const clearFields = () => {
  document.querySelector('#input-formProject').value = '';
};

export {
  clearFields, addProjectToProjects
}