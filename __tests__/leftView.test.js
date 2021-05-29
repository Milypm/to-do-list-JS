import setLeftView from '../src/js/dom/leftView';
import buildAll from '../src/js/build';
//import htmlSetup from './htmlSetup';

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../docs/index.html'), 'utf8');

jest.dontMock('fs');

beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
});
afterEach(() => {
  // restore the original func after test
  jest.resetModules();
});
//htmlSetup.setHtml();
//htmlSetup.resetHtml();
let input = setLeftView.newProjectInput;

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
  buildAll.startProject();
  const listItem = setLeftView.showlistItem();
  const editIcon = setLeftView.showEditIcon();
  setLeftView.myListsBtn.click();
  input.click();
  input.value = 'Project One';
  setLeftView.newProjectSaveBtn.click();
  expect(listItem.textContent).toStrictEqual('Project One');
});

it('displays project form with projectName on the input field after clicking on editProject button', () => {
  newProject();
  setLeftView.editIcon.click();
  expect(input.value).not.toBe('');
});

it('hides project form after clicking Cancel button', () => {
  buildAll.startProject();
  setLeftView.myListsBtn.click();
  setLeftView.newProjectCancelBtn.click();
  expect(setLeftView.newProjectForm.style.display).not.toBe('flex');
});
