const buildProject = (() => {
  let projects;
  let projectObject = {
    'name': '',
    'content': []
  }
  let defaultProject = {
    'name': 'General List',
    'content': []
  }

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
    projectObject['name'] = name;
    projects.push(projectObject);
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  return { projects, getProjects, addProject };
})();

export default buildProject;