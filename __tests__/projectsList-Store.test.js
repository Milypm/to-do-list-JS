import buildProject from '../src/js/logics/projectsList-Store';

const newProject = () => {
  buildProject.projects = [buildProject.defaultProject];
  buildProject.projectObject.name = 'Work';
  buildProject.projects.push(buildProject.projectObject);
  localStorage.setItem('projects', JSON.stringify(buildProject.projects));
};

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
  newProject();
  const name = 'Shopping';
  buildProject.addProject(name);
  const projects = JSON.parse(localStorage.getItem('projects'));
  expect(projects.length).toBe(3);
});

it('returns the project from localStorage', () => {
  buildProject.projects = [];
  buildProject.projectObject.name = 'New Project';
  buildProject.projects.push(buildProject.projectObject);
  localStorage.setItem('projects', JSON.stringify(buildProject.projects));
  expect(buildProject.findProject('New Project')).toStrictEqual({ name: 'New Project', content: [] });
});

it('edits a project from localStorage', () => {
  newProject();
  const projects = JSON.parse(localStorage.getItem('projects'));
  const [projectOne, projectTwo] = projects;
  const workProject = projectTwo;
  const newName = 'Work tasks';
  buildProject.editProject(workProject, newName);
  expect(projectTwo.name).not.toBe('Work');
});

it('deletes a project from localStorage', () => {
  newProject();
  const projectName = 'Work';
  buildProject.deleteProject(projectName);
  const projects = JSON.parse(localStorage.getItem('projects'));
  expect(projects).not.toContain('Work');
});
