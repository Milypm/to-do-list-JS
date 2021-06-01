import buildTask from '../src/js/logics/tasksList-Store';
import buildProject from '../src/js/logics/projectsList-Store';

const payTask = () => {
  buildProject.projects = [{ name: 'General List', content: [] }];
  buildProject.projectObject.name = 'New Project';
  buildProject.projects.push(buildProject.projectObject);
  localStorage.setItem('projects', JSON.stringify(buildProject.projects));
  buildTask.addTask('New Project', 'Pay credit card', 'Go to the bank and pay', '1 Jun 2021', 'Urgent');
};

it('finds a project looking by taskName', () => {
  payTask();
  const newProject = buildTask.findProject('Pay credit card');
  expect(newProject.name).toStrictEqual('New Project');
});

it('finds the index of a task in a project', () => {
  payTask();
  buildTask.addTask('New Project', 'Go to the vet', 'Dog shower', '5 Jun 2021', 'Regular');
  expect(buildTask.findIndex('Go to the vet')).toStrictEqual(1);
});

it('edits a task from localStorage', () => {
  payTask();
  let projects = JSON.parse(localStorage.getItem('projects'));
  const projectObj = projects[1];
  let task = projectObj.content[0];
  task.title = 'Pay MasterCard';
  task.description = 'Verify amount to pay';
  task.dueDate = '1 Jun 2021';
  task.priority = 'Urgent';
  localStorage.setItem('projects', JSON.stringify(projects));
  projects = JSON.parse(localStorage.getItem('projects'));
  const [projectOne, projectTwo] = projects;
  const projectContent = projectTwo.content;
  const [taskOne] = projectContent;
  task = taskOne;
  expect(task.title).not.toBe('Pay credit card');
  expect(task.description).not.toBe('Go to the bank and pay');
});

it('deletes a task from localStorage', () => {
  payTask();
  buildTask.addTask('New Project', 'Finish project', 'Work on the tests', '30 May 2021', 'Urgent');
  const projects = JSON.parse(localStorage.getItem('projects'));
  const [projectOne, projectTwo] = projects;
  buildTask.deleteTask(projectTwo, 0);
  const projectContent = projectTwo.content;
  expect(projectContent.length).toEqual(1);
});