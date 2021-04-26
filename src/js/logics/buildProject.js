const createProject = (name) => {
  return name;
};

const buildProject = () => {
  let projects = [];
  let projectObject = {
    'name': '',
    'content': []
  }

  const getProjects = () => {
    if (localStorage.getItem('projects')[1] === null) {
      projectObject['name'] = 'Main List';
      projects.push(projectObject);
    } else {
      projects = JSON.parse(localStorage.getItem('projects'));
    }
    return projects;
  };

  const addProject = (project) => {
    const projects = buildProject.getProjects();
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
  };
};

export {
  createProject, buildProject
}