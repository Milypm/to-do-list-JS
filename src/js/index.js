import setLeftView from './dom/leftView';
import setMiddleView from './dom/middleView';
import setRightView from './dom/rightView';

require('../css/style.css');

const setHeader = () => {
  const header = document.createElement('header');
  header.classList.add('main-header');

  const headerTitle = document.createElement('h1');
  headerTitle.classList.add('header-title');
  headerTitle.textContent = 'ToDo List';

  header.appendChild(headerTitle);

  return header;
};

const setMain = () => {
  const main = document.createElement('main');
  main.classList.add('main-container');
  main.setAttribute('id', 'main');

  main.appendChild(setLeftView());
  main.appendChild(setMiddleView());
  main.appendChild(setRightView());

  return main;
};

const startProject = () => {
  const content = document.getElementById('content');
  content.textContent = 'Hello!';
  content.appendChild(setHeader());
  content.appendChild(setMain());
};

startProject();