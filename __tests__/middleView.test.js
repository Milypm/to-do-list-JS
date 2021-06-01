import setMiddleView from '../src/js/dom/middleView';
import buildAll from '../src/js/build';

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../docs/index.html'), 'utf8');

beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
});
afterEach(() => {
  jest.resetModules();
});

let newTask;

const addTask = () => {
  buildAll.startProject();
  setMiddleView.myTasksBtn.click();
  setMiddleView.titleFormInput.value = 'Finish project';
  setMiddleView.descripFormInput.value = 'Work on last changes';
  setMiddleView.dateFormInput.value = '2021-05-29';
  setMiddleView.priorityFormInput.value = 'Urgent';
  setMiddleView.newTaskSaveBtn.click();
};

it('displays a form for adding a new task when clicking addTask button', () => {
  buildAll.startProject();
  setMiddleView.myTasksBtn.click();
  expect(setMiddleView.myTasksForm.style.display).not.toBe('none');
});

it('displays a new task after saving it on the newTask form', () => {
  buildAll.startProject();
  setMiddleView.myTasksBtn.click();
  setMiddleView.titleFormInput.value = 'Going to the gym';
  setMiddleView.descripFormInput.value = 'Routine Exercise';
  setMiddleView.dateFormInput.value = '2021-06-05';
  setMiddleView.priorityFormInput.value = 'High';
  setMiddleView.newTaskSaveBtn.click();
  newTask = document.querySelector('.task-btn');
  expect(newTask.textContent).toEqual('Going to the gym');
});

it('displays taskTitle on rightView (Task Details) after clicking on the specific TaskItem in middleView', () => {
  addTask();
  const secondTask = Array.from(document.querySelectorAll('div')).find((el) => el.textContent === 'Finish project');
  secondTask.click();
  const taskTitle = document.getElementById('task-title-id');
  const taskDescription = document.getElementById('task-description-id');
  const taskDate = document.getElementById('task-date-id');
  const taskPriority = document.getElementById('task-priority-id');
  expect(taskTitle.textContent).toBe('Title: Finish project');
  expect(taskDescription.textContent).toBe('Description: Work on last changes');
  expect(taskDate.textContent).toBe('Due Date: 29 May 2021');
  expect(taskPriority.textContent).toBe('Priority: Urgent');
});

it('removes task from middleView after clicking on delete button on that task', () => {
  buildAll.startProject();
  addTask();
  const deletes = Array.from(document.querySelectorAll('i')).filter((el) => el.className === 'fa-trash');
  deletes.forEach((el) => {
    if (el.parentElement.parentElement.textContent === 'Going to the gym') {
      el.click();
    }
  });
  const tasks = Array.from(document.querySelectorAll('div')).find((el) => el.textContent === 'Finish project');
  expect(tasks.length).not.toBe(2);
});
