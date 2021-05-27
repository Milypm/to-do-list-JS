import buildProject from '../src/js/logics/projectsList-Store';
//require('jest-localstorage-mock');

it('if localStorage is empty returns an array containing the default project', () => {
  expect(buildProject.getProjects()).toStrictEqual([buildProject.defaultProject]);
});

it('if localStorage is not empty returns projects string from localStorage', () => {
  buildProject.projects = [];
  buildProject.projectObject.name = 'New Project';
  buildProject.projects.push(buildProject.projectObject);
  localStorage.setItem('projects', JSON.stringify(buildProject.projects));
  expect(buildProject.getProjects()).toStrictEqual(JSON.parse(localStorage.getItem('projects')));
});

it('returns the project from localStorage', () => {
  buildProject.projects = [];
  buildProject.projectObject.name = 'New Project';
  buildProject.projects.push(buildProject.projectObject);
  localStorage.setItem('projects', JSON.stringify(buildProject.projects));
  expect(buildProject.findProject('New Project')).toStrictEqual({name: 'New Project', content: []});
});


/////////////
// const newProject = new Project('Study');
// const projectTwo = new Project('Work');
// const arr = [newProject, projectTwo];
// const emptyArr = [];

// localStorage.setItem('projects', JSON.stringify(arr));
// localStorage.setItem('selected project', JSON.stringify(newProject));
// localStorage.setItem('empty array', JSON.stringify(emptyArr));

// it('checks if object is saved in local storage', () => { 
//   expect(localStorage.getItem('projects')).toBe(JSON.stringify(arr));
// });

// it('checks if there is 2 projects saved in local storage', () => {
//   expect(JSON.parse(localStorage.getItem('projects')).length).toBe(2);
// });

// it('checks if object in local storage is empty', () => {
//   expect(localStorage.getItem('empty array')).toBe('[]');
// }); 