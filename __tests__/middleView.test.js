import setMiddleView from '../src/js/dom/middleView';
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

it('displays a form for adding a new task when clicking addTask button', () => {
  buildAll.startProject();
  setMiddleView.myTasksBtn.click();
  expect(setMiddleView.myTasksForm.style.display).not.toBe('none');
});

it('displays a a new task after clicking the save button', () => {
  buildAll.startProject();
  setMiddleView.titleFormInput.click();
  setMiddleView.titleFormInput.textContent = 'Going to the gym'
  setMiddleView.ddescripFormInput.textContent = 'Routine Exerisw'
  setMiddleView.dateFormInput.textContent = '5 Jun 2021'
  setMiddleView.priorityFormInput.textContent = 'high'
  setMiddleView.newTaskSaveBtn.click();
  expect(setMiddleView.taskItem.textContent).toEqual('Going to the gym');
});