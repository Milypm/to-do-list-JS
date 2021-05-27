import buildTask from '../src/js/logics/tasksList-Store';
import buildProject from '../src/js/logics/projectsList-Store';

it('returns the project from localStorage', () => {
  buildProject.projects = [];
  buildProject.projectObject.name = 'New Project';
  buildProject.projects.push(buildProject.projectObject);
  localStorage.setItem('projects', JSON.stringify(buildProject.projects));
  buildTask.addTask('New Project', 'Pay credit card', 'Go to the bank and pay', '1 Jun 2021', 'Urgent');
  expect(buildTask.findProject('Pay credit card')).toStrictEqual({name: 'New Project', content: [{title: 'Pay credit card',
    description: 'Go to the bank and pay', dueDate: '1 June 2021', priority: 'Urgent'}]});
});

it('finds the index of the task', () => {
  buildProject.projects = [];
  buildProject.projectObject.name = 'New Project';
  buildProject.projects.push(buildProject.projectObject);
  localStorage.setItem('projects', JSON.stringify(buildProject.projects));
  buildTask.addTask('New Project', 'Pay credit card', 'Go to the bank and pay', '1 Jun 2021', 'Urgent');
  buildTask.addTask('New Project', 'Go to the vet', 'Dog shower', '5 Jun 2021', 'Regular');
  expect(buildTask.findIndex('Go to the vet')).toStrictEqual(1);
});