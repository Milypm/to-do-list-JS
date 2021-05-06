import buildProject from '../logics/projectsList-Store';
import buildTask from '../logics/tasksList-Store';

const setRightView = (() => {
  const rightView = document.createElement('div');
  rightView.classList.add('column-view');

  const rightViewTitle = document.createElement('h3');
  rightViewTitle.textContent = 'Task Details';

  const detailsContainer = document.createElement('div');
  detailsContainer.classList.add('details-container');

  const taskDetailsContainer = document.createElement('div');
  taskDetailsContainer.classList.add('taskdetails-container');

  const setRight = () => {
    taskDetailsContainer.appendChild(rightViewTitle);
    taskDetailsContainer.appendChild(detailsContainer);
    rightView.appendChild(taskDetailsContainer);

    return rightView;
  };

  const displayTaskDetails = (task) => {
    let selectedTask;
    const projects = buildProject.getProjects();
    projects.forEach((projectObj) => {
      projectObj.content.forEach((taskObj) => {
        if (taskObj.description === task) {
          selectedTask = taskObj;
        }
      });
    });

    // const project = buildTask.findProject(selectedTask.description);
    // const index = buildTask.findIndex(selectedTask.description);

    // ###################################################### //
    const descriptionDetail = document.createElement('p');
    descriptionDetail.classList.add('description-detail');
    descriptionDetail.textContent = `Description: ${selectedTask.description}`;

    // const editIcon1 = document.createElement('i');
    // editIcon1.classList.add('edit-icon-right');
    // editIcon1.classList.add('fas');
    // editIcon1.classList.add('fa-pen');
    // editIcon1.addEventListener('click', function() {
    //   descriptionForm.style.display = 'flex';
    // });

    // const deleteIcon1 = document.createElement('i');
    // deleteIcon1.classList.add('delete-icon-right');
    // deleteIcon1.classList.add('fas');
    // deleteIcon1.classList.add('fa-trash');
    // deleteIcon1.addEventListener('click', function() {
    //   //const detailDelete = selectedTask.description;
    //   buildTask.deleteTaskDescription(project, index);
    //   descriptionDetail.textContent = 'Description:';
    // });

    // const editDeleteBtns1 = document.createElement('div');
    // editDeleteBtns1.classList.add('edit-delete-btns');

    // const descriptionContainer = document.createElement('div');
    // descriptionContainer.classList.add('each-detail-container');

    // const editDescriptionInput = document.createElement('input');
    // editDescriptionInput.classList.add('new-description-input');
    // editDescriptionInput.classList.add('details-input');

    // const descriptionSaveBtn = document.createElement('p');
    // descriptionSaveBtn.classList.add('description-save-btn');
    // descriptionSaveBtn.textContent = 'Save';
    // const descriptionCancelBtn = document.createElement('p');
    // descriptionCancelBtn.classList.add('description-cancel-btn');
    // descriptionCancelBtn.textContent = 'Cancel';

    // const descriptionFormBtns = document.createElement('div');

    // const descriptionForm = document.createElement('form');
    // descriptionForm.setAttribute('id', 'description-form');
    // descriptionForm.classList.add('details-form');
    // descriptionForm.addEventListener('click', (e) => {
    //   if (e.target.classList.contains('description-save-btn')) {
    //     const newDescription = document.querySelector('.new-description-input').value;
    //     if (newDescription === '') {
    //       alert('Please fill in the description field.');
    //     } else {
    //       buildTask.editTaskDescription(project, newDescription, index);
    //       descriptionDetail.textContent = `Description: ${newDescription}`;
    //       document.querySelector('.new-description-input').value = '';
    //       descriptionForm.style.display = 'none';
    //     }
    //   } else if (e.target.classList.contains('description-cancel-btn')) {
    //     descriptionForm.style.display = 'none';
    //     document.querySelector('.new-description-input').value = '';
    //   }
    // });

    // const descriptionFormContainer = document.createElement('div');
    // descriptionFormContainer.classList.add('details-form-container');

    // ###################################################### //
    const dueDateDetail = document.createElement('p');
    dueDateDetail.classList.add('description-detail');
    dueDateDetail.textContent = `Due Date: ${selectedTask.dueDate}`;

    // const editIcon2 = document.createElement('i');
    // editIcon2.classList.add('edit-icon-right');
    // editIcon2.classList.add('fas');
    // editIcon2.classList.add('fa-pen');
    // editIcon2.addEventListener('click', function() {
    //   dateForm.style.display = 'flex';
    // });

    // const deleteIcon2 = document.createElement('i');
    // deleteIcon2.classList.add('delete-icon-right');
    // deleteIcon2.classList.add('fas');
    // deleteIcon2.classList.add('fa-trash');
    // deleteIcon2.addEventListener('click', function() {
    //   //const detailDelete = selectedTask.dueDate;
    //   buildTask.deleteTaskDate(project, index);
    //   dueDateDetail.textContent = 'Due Date:';
    // });

    // const editDeleteBtns2 = document.createElement('div');
    // editDeleteBtns2.classList.add('edit-delete-btns');

    // const dateContainer = document.createElement('div');
    // dateContainer.classList.add('each-detail-container');

    // const editDateInput = document.createElement('input');
    // editDateInput.type = 'date';
    // editDescriptionInput.classList.add('new-date-input');
    // editDateInput.classList.add('details-input');
    // editDateInput.setAttribute('id', 'new-date-id');

    // const dateSaveBtn = document.createElement('p');
    // dateSaveBtn.classList.add('date-save-btn');
    // dateSaveBtn.textContent = 'Save';
    // const dateCancelBtn = document.createElement('p');
    // dateCancelBtn.classList.add('date-cancel-btn');
    // dateCancelBtn.textContent = 'Cancel';

    // const dateFormBtns = document.createElement('div');

    // const dateForm = document.createElement('form');
    // dateForm.setAttribute('id', 'date-form');
    // dateForm.classList.add('details-form');
    // dateForm.addEventListener('click', (e) => {
    //   if (e.target.classList.contains('date-save-btn')) {
    //     const newDate = document.querySelector('#new-date-id').value;
    //     if (newDate === '') {
    //       alert('Please fill in the dueDate field.');
    //     } else {
    //       buildTask.editTaskDate(project, newDate, index);
    //       dueDateDetail.textContent = `Due Date: ${buildTask.getFormattedDate()}`;
    //       //document.querySelector('.new-date-input').value = '';
    //       dateForm.style.display = 'none';
    //     }
    //   } else if (e.target.classList.contains('date-cancel-btn')) {
    //     dateForm.style.display = 'none';
    //     document.querySelector('#new-date-id').value = '';
    //   }
    // });

    // const dateFormContainer = document.createElement('div');
    // dateFormContainer.classList.add('details-form-container');

    // ###################################################### //
    const priorityDetail = document.createElement('p');
    priorityDetail.classList.add('description-detail');
    priorityDetail.textContent = `Priority: ${selectedTask.priority}`;

    // const editIcon3 = document.createElement('i');
    // editIcon3.classList.add('edit-icon-right');
    // editIcon3.classList.add('fas');
    // editIcon3.classList.add('fa-pen');
    // editIcon3.addEventListener('click', function() {
    //   priorityForm.style.display = 'flex';
    // });

    // const deleteIcon3 = document.createElement('i');
    // deleteIcon3.classList.add('delete-icon-right');
    // deleteIcon3.classList.add('fas');
    // deleteIcon3.classList.add('fa-trash');
    // deleteIcon3.addEventListener('click', function() {
    //   //const detailDelete = selectedTask.priority;
    //   buildTask.deleteTaskPriority(project, index);
    //   priorityDetail.textContent = 'Priority:';
    // });

    // const editDeleteBtns3 = document.createElement('div');
    // editDeleteBtns3.classList.add('edit-delete-btns');

    // const priorityContainer = document.createElement('div');
    // priorityContainer.classList.add('each-detail-container');

    // const priorityNone = document.createElement('option');
    // priorityNone.classList.add('priority-option');
    // priorityNone.textContent = 'None';
  
    // const priorityUrgent = document.createElement('option');
    // priorityUrgent.classList.add('priority-option');
    // priorityUrgent.textContent = 'Urgent';
  
    // const priorityHigh = document.createElement('option');
    // priorityHigh.classList.add('priority-option');
    // priorityHigh.textContent = 'High';
  
    // const priorityRegular = document.createElement('option');
    // priorityRegular.classList.add('priority-option');
    // priorityRegular.textContent = 'Regular';
  
    // const priorityLow = document.createElement('option');
    // priorityLow.classList.add('priority-option');
    // priorityLow.textContent = 'Low';
  
    // const priorityFormInput = document.createElement('select');
    // priorityFormInput.classList.add('new-priority-input');
    // priorityFormInput.classList.add('details-input');
    // priorityFormInput.classList.add('task-form-input');

    // const prioritySaveBtn = document.createElement('p');
    // prioritySaveBtn.classList.add('priority-save-btn');
    // prioritySaveBtn.textContent = 'Save';
    // const priorityCancelBtn = document.createElement('p');
    // priorityCancelBtn.classList.add('priority-cancel-btn');
    // priorityCancelBtn.textContent = 'Cancel';

    // const priorityFormBtns = document.createElement('div');

    // const priorityForm = document.createElement('form');
    // priorityForm.setAttribute('id', 'priority-form');
    // priorityForm.classList.add('details-form');
    // priorityForm.addEventListener('click', (e) => {
    //   if (e.target.classList.contains('priority-save-btn')) {
    //     const newPriority = document.querySelector('.new-priority-input').value;
    //     buildTask.editTaskPriority(project, newPriority, index);
    //     priorityDetail.textContent = `Priority: ${newPriority}`;
    //     priorityForm.style.display = 'none';
    //     document.querySelector('.new-priority-input').value = newPriority;
    //   } else if (e.target.classList.contains('priority-cancel-btn')) {
    //     priorityForm.style.display = 'none';
    //     document.querySelector('.new-priority-input').value = '';
    //   }
    // });

    // const priorityFormContainer = document.createElement('div');
    // priorityFormContainer.classList.add('details-form-container');

    //descriptionContainer.appendChild(descriptionDetail);
    // editDeleteBtns1.appendChild(editIcon1);
    // editDeleteBtns1.appendChild(deleteIcon1);
    // descriptionContainer.appendChild(editDeleteBtns1);
    // descriptionForm.appendChild(editDescriptionInput);
    // descriptionFormBtns.appendChild(descriptionSaveBtn);
    // descriptionFormBtns.appendChild(descriptionCancelBtn);
    // descriptionForm.appendChild(descriptionFormBtns);
    // descriptionFormContainer.appendChild(descriptionContainer);
    // descriptionFormContainer.appendChild(descriptionForm);

    //dateContainer.appendChild(dueDateDetail);
    // editDeleteBtns2.appendChild(editIcon2);
    // editDeleteBtns2.appendChild(deleteIcon2);
    // dateContainer.appendChild(editDeleteBtns2);
    // dateForm.appendChild(editDateInput);
    // dateFormBtns.appendChild(dateSaveBtn);
    // dateFormBtns.appendChild(dateCancelBtn);
    // dateForm.appendChild(dateFormBtns);
    // dateFormContainer.appendChild(dateContainer);
    // dateFormContainer.appendChild(dateForm);

    //priorityContainer.appendChild(priorityDetail);
    // editDeleteBtns3.appendChild(editIcon3);
    // editDeleteBtns3.appendChild(deleteIcon3);
    // priorityContainer.appendChild(editDeleteBtns3);
    // priorityFormInput.appendChild(priorityNone);
    // priorityFormInput.appendChild(priorityUrgent);
    // priorityFormInput.appendChild(priorityHigh);
    // priorityFormInput.appendChild(priorityRegular);
    // priorityFormInput.appendChild(priorityLow);
    // priorityForm.appendChild(priorityFormInput);
    // priorityFormBtns.appendChild(prioritySaveBtn);
    // priorityFormBtns.appendChild(priorityCancelBtn);
    // priorityForm.appendChild(priorityFormBtns);
    // priorityFormContainer.appendChild(priorityContainer);
    // priorityFormContainer.appendChild(priorityForm);

    // detailsContainer.appendChild(descriptionFormContainer);
    // detailsContainer.appendChild(dateFormContainer);
    // detailsContainer.appendChild(priorityFormContainer);

    detailsContainer.appendChild(descriptionDetail);
    detailsContainer.appendChild(dueDateDetail);
    detailsContainer.appendChild(priorityDetail);
  };

  const clearDetails = () => {
    const detailsToRemove = document.querySelector('.details-container');
    while (detailsToRemove.firstChild) {
      detailsToRemove.removeChild(detailsToRemove.lastElementChild);
    }
  };

  return { setRight, displayTaskDetails, clearDetails };
})();

export default setRightView;