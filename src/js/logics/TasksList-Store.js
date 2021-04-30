import buildProject from './projectsList-Store';

const buildTask = (() => {
  let task = {
    'description': '',
    'dueDate': '',
    'priority': '',
    //'checklist': {}
  }

  const addTask = (project, description, date, priority) => {
    //buildProject.findProject(project);
    let currentProject;
    const projects = buildProject.getProjects();
    projects.forEach((projectObj) => {
      if (project === projectObj.name) {
        currentProject = projectObj;
      }
    });
    task.description = description;
    task.dueDate = date;
    task.priority = priority;
    currentProject.content.push(task);
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  return { addTask };
})();

export default buildTask;