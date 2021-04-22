const setMiddleView = () => {
  const middleView = document.createElement('div');
  middleView.classList.add('column-view');

  const middleViewTitle = document.createElement('h3');
  middleViewTitle.textContent = 'Default List';

  middleView.appendChild(middleViewTitle);

  return middleView;
};

// const showMiddleView = () => {
//   const main = document.getElementById('main');
//   main.textContent = '';
//   main.appendChild(setMiddleView());
// };

export default setMiddleView;