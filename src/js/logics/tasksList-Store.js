import buildProject from './projectsList-Store';

const { format } = require('date-fns');

const buildTask = (() => {
  let task = {
    'description': '',
    'dueDate': '',
    'priority': '',
    //'checklist': {}
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

  return { addTask };
})();

export default buildTask;