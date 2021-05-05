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

  const findProject = (taskDescrip) => {
    console.log('method findproject');
    let currentProject;
    const projects = buildProject.getProjects();
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
    const projects = buildProject.getProjects();
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

  const editTaskDescription = (projectObj, newDescrip, index) => {
    projectObj.content[index].description = newDescrip;
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const editTaskDate = (projectObj, newDate) => {
    const projects = buildProject.getProjects();
    projectObj.dueDate = newDate;
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const editTaskPriority = (projectObj, newPriority) => {
    const projects = buildProject.getProjects();
    projectObj.priority = newPriority;
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const deleteTaskDescription = (projectName) => {
    const projects = buildProject.getProjects();
    projects.forEach((project, index) => {
      if (project.name === projectName) {
        projects.splice(index, 1);
      }
    });
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  return { addTask,
          findProject,
          findIndex,
          editTaskDescription,
          editTaskDate,
          editTaskPriority,
          deleteTaskDescription
        };
})();

export default buildTask;