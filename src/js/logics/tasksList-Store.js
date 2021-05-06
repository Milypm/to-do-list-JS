import buildProject from './projectsList-Store';

const { format } = require('date-fns');

const buildTask = (() => {
  let task = {
    'description': '',
    'dueDate': '',
    'priority': '',
  }

  const addTask = (project, description, date, priority) => {
    let currentProject;
    const newDate = format(new Date(date), 'd MMMM yyyy');
    const projects = buildProject.getProjects();
    projects.forEach((projectObj) => {
      if (project === projectObj.name) {
        currentProject = projectObj;
      }
    });
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
        i++;
      });
    });
    return index;
  };

  const editTask = (projectObj, index, description, date, priority) => {
    const task = projectObj.content[index];
    task.description = description;
    console.log(task.description = description);
    task.dueDate = format(new Date(date), 'd MMMM yyyy');
    task.priority = priority;
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const deleteTask = (projectObj, taskIndex) => {
    projectObj.content.splice(taskIndex, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  return { addTask, findProject, findIndex, editTask, deleteTask };
})();

export default buildTask;