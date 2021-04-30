import buildProject from './projectsList-Store';

const buildTask = (() => {
  let task = {
    'description': '',
    'dueDate': '',
    'priority': '',
    //'checklist': {}
  }

  const addTask = (project, description, date, priority) => {
    const projects = buildProject.getProjects();
    const selectedProject = projects.find(function() {
      if (project) {
        return true;
      }
    });
    const content = selectedProject.content;
    task.description = description;
    task.dueDate = date;
    task.priority = priority;
    content.push(task);
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  return { addTask };
})();

export default buildTask;