const buildProject = (name) => {
  let projects;
  let projectObject = {
    'name': '',
    'content': []
  }
  let defaultProject = {
    'name': 'General List',
    'content': []
  }

  const projectName = name;

  const getProjects = () => {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects === null || storedProjects[1] === null) {
      projects = [defaultProject];
    } else {
      projects = JSON.parse(localStorage.getItem('projects'));
    }
    return projects;
  };

  const addProject = () => {
    const projects = getProjects();
    projectObject['name'] = projectName;
    projects.push(projectObject);
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  return { projects, getProjects, addProject };
};

export default buildProject;