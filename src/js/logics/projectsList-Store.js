const buildProject = (() => {
  let projects;
  const projectObject = {
    name: '',
    content: [],
  };
  const defaultProject = {
    name: 'General List',
    content: [],
  };

  const getProjects = () => {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects === null || storedProjects[1] === null) {
      projects = [defaultProject];
    } else {
      projects = JSON.parse(localStorage.getItem('projects'));
    }
    return projects;
  };

  const addProject = (name) => {
    const projects = getProjects();
    projectObject.name = name;
    projects.push(projectObject);
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const editProject = (projectObj, newName) => {
    projectObj.name = newName;
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const deleteProject = (projectName) => {
    const projects = buildProject.getProjects();
    projects.forEach((project, index) => {
      if (project.name === projectName) {
        projects.splice(index, 1);
      }
    });
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const findProject = (project) => {
    let currentProject;
    const projects = buildProject.getProjects();
    projects.forEach((projectObj) => {
      if (project === projectObj.name) {
        currentProject = projectObj;
      }
    });
    return currentProject;
  };

  return {
    projects, getProjects, addProject, editProject, deleteProject, findProject,
  };
})();

export default buildProject;