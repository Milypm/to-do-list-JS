const setLeftView = () => {
  const leftView = document.createElement('div');
  leftView.classList.add('column-view');

  const myListsTitle = document.createElement('h3');
  myListsTitle.textContent = 'My Lists';

  leftView.appendChild(myListsTitle);

  return leftView;
};

// const showLeftView = () => {
//   const main = document.getElementById('main');
//   main.textContent = '';
//   main.appendChild(setLeftView());
// };

export default setLeftView;