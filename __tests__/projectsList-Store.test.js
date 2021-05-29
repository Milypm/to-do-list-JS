import buildProject from '../src/js/logics/projectsList-Store';

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

it('adds a new project to localStorage', () => {
  buildProject.projects = [buildProject.defaultProject];
  buildProject.projectObject.name = 'Shopping';
  buildProject.projects.push(buildProject.projectObject);
  localStorage.setItem('projects', JSON.stringify(buildProject.projects));
  const arr = JSON.parse(localStorage.getItem('projects'));
  expect(arr.length).toBe(2);
});

it('returns the project from localStorage', () => {
  buildProject.projects = [];
  buildProject.projectObject.name = 'New Project';
  buildProject.projects.push(buildProject.projectObject);
  localStorage.setItem('projects', JSON.stringify(buildProject.projects));
  expect(buildProject.findProject('New Project')).toStrictEqual({ name: 'New Project', content: [] });
});
