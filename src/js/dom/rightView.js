const setRightView = () => {
  const rightView = document.createElement('div');
  rightView.classList.add('column-view');

  const rightViewTitle = document.createElement('h3');
  rightViewTitle.textContent = 'Item List Details';

  rightView.appendChild(rightViewTitle);

  return rightView;
};

// const showRightView = () => {
//   const main = document.getElementById('main');
//   main.textContent = '';
//   main.appendChild(setRightView());
// };

export default setRightView;