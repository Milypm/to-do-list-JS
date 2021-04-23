const setMiddleView = () => {
  const middleView = document.createElement('div');
  middleView.classList.add('column-view');

  const myItemsTitleBtn = document.createElement('div');
  myItemsTitleBtn.classList.add('myItems-title-btn');

  const middleViewTitle = document.createElement('h3');
  middleViewTitle.textContent = 'General List';

  const plusBtn = document.createElement('i');
  plusBtn.classList.add('fas');
  plusBtn.classList.add('fa-plus');
  plusBtn.classList.add('plus-btn-sm');

  const addItemTextBtn = document.createElement('span');
  addItemTextBtn.textContent = 'Add Task';

  const myItemsBtn = document.createElement('button');
  myItemsBtn.setAttribute('id', 'add-item-btn');

  myItemsBtn.appendChild(plusBtn);
  myItemsBtn.appendChild(addItemTextBtn);
  myItemsTitleBtn.appendChild(middleViewTitle);
  myItemsTitleBtn.appendChild(myItemsBtn);
  middleView.appendChild(myItemsTitleBtn);

  return middleView;
};

// const showMiddleView = () => {
//   const main = document.getElementById('main');
//   main.textContent = '';
//   main.appendChild(setMiddleView());
// };

export default setMiddleView;