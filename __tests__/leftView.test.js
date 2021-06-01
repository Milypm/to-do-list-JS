import setLeftView from '../src/js/dom/leftView';
import buildAll from '../src/js/build';

import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, '../docs/index.html'), 'utf8');

beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
});
afterEach(() => {
  jest.resetModules();
});

const input = setLeftView.newProjectInput;

const newProject = () => {
  buildAll.startProject();
  setLeftView.myListsBtn.click();
  input.click();
  input.value = 'Project One';
  setLeftView.newProjectSaveBtn.click();
};

it('displays a form for adding a new project when clicking myLists button', () => {
  buildAll.startProject();
  setLeftView.myListsBtn.click();
  expect(setLeftView.newProjectForm.style.display).not.toBe('none');
});

it('adds a new project in MyLists after clicking Save button', () => {
  newProject();
  const projectItem = document.querySelector('.projectList-btn');
  expect(projectItem.textContent).toStrictEqual('Project One');
});

it('displays project form with projectName on the input field after clicking on editProject button', () => {
  newProject();
  const editProjectBtn = document.querySelector('.edit-icon-left');
  const input = document.querySelector('.input-formProject');
  editProjectBtn.click();
  expect(input.value).not.toBe('');
});

it('hides project form after clicking Cancel button', () => {
  buildAll.startProject();
  setLeftView.myListsBtn.click();
  setLeftView.newProjectCancelBtn.click();
  expect(setLeftView.newProjectForm.style.display).not.toBe('flex');
});
