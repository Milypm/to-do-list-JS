const setLeftView = () => {
  const leftView = document.createElement('div');
  leftView.classList.add('column-view');

  const myListsTitle = document.createElement('h3');
  myListsTitle.textContent = 'My Lists';

  const myListsTitleBtn = document.createElement('div');
  myListsTitleBtn.classList.add('mylists-title-btn');

  const plusBtn = document.createElement('i');
  plusBtn.classList.add('fas');
  plusBtn.classList.add('fa-plus');

  const myListsContainer = document.createElement('div');
  myListsContainer.classList.add('mylists-container');
  const defaultList = document.createElement('button');
  defaultList.textContent = 'Default List';
  defaultList.classList.add('default-list-btn');

  const myListsBtn = document.createElement('button');
  
  myListsBtn.appendChild(plusBtn);
  myListsTitleBtn.appendChild(myListsTitle);
  myListsTitleBtn.appendChild(myListsBtn);
  leftView.appendChild(myListsTitleBtn);
  leftView.appendChild(myListsContainer);
  leftView.appendChild(defaultList);


  return leftView;
};


// const showLeftView = () => {
//   const main = document.getElementById('main');
//   main.textContent = '';
//   main.appendChild(setLeftView());
// };

export default setLeftView;