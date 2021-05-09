import buildProject from './projectsList-Store';

const { format } = require('date-fns');

const buildTask = (() => {
  const task = {
    title: '',
    description: '',
    dueDate: '',
    priority: '',
  };

  let formattedDate;

  const addTask = (project, title, description, date, priority) => {
    let currentProject;
    const newDate = format(new Date(date), 'd MMMM yyyy');
    const projects = buildProject.getProjects();
    projects.forEach((projectObj) => {
      if (project === projectObj.name) {
        currentProject = projectObj;
      }
    });
    task.title = title;
    task.description = description;
    task.dueDate = newDate;
    task.priority = priority;
    currentProject.content.push(task);
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const projects = buildProject.getProjects();

  const findProject = (taskDescrip) => {
    let currentProject;
    projects.forEach((projectObj) => {
      projectObj.content.forEach((taskObj) => {
        if (taskDescrip === taskObj.description) {
          currentProject = projectObj;
        }
      });
    });
    return currentProject;
  };

  const findIndex = (taskDescrip) => {
    let index;
    let i = 0;
    projects.forEach((projectObj) => {
      projectObj.content.forEach((taskObj) => {
        if (taskDescrip === taskObj.description) {
          index = i;
        }
        i += 1;
      });
    });
    return index;
  };

  const editTaskDescription = (projectObj, newDescrip, index) => {
    const task = projectObj.content[index];
    task.description = newDescrip;
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const editTaskTitle = (projectObj, newTitle, index) => {
    const task = projectObj.content[index];
    task.title = newTitle;
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const editTaskDate = (projectObj, date, index) => {
    const newDate = format(new Date(date), 'd MMMM yyyy');
    const task = projectObj.content[index];
    task.dueDate = newDate;
    localStorage.setItem('projects', JSON.stringify(projects));
    formattedDate = newDate;
  };

  const getFormattedDate = () => formattedDate;

  const editTaskPriority = (projectObj, newPriority, index) => {
    const task = projectObj.content[index];
    task.priority = newPriority;
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const deleteTaskTitle = (projectObj, index) => {
    const task = projectObj.content[index];
    delete task.title;
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const deleteTaskDescription = (projectObj, index) => {
    const task = projectObj.content[index];
    delete task.description;
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const deleteTaskDate = (projectObj, index) => {
    const task = projectObj.content[index];
    delete task.dueDate;
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const deleteTaskPriority = (projectObj, index) => {
    const task = projectObj.content[index];
    delete task.priority;
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  return {
    addTask,
    findProject,
    findIndex,
    editTaskTitle,
    editTaskDescription,
    editTaskDate,
    getFormattedDate,
    editTaskPriority,
    deleteTaskTitle,
    deleteTaskDescription,
    deleteTaskDate,
    deleteTaskPriority,
  };
})();

export default buildTask;