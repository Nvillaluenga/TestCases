const ProjectsMenu = ({ projects }) => {

  const mapProject = (project) => {
    const { name, folders, tests } = project
    folders?.length && folders.sort()
    tests?.length && tests.sort()

    const mappedFolders = folders?.length &&
      folders.map((folder, index) => (
        <ul>
          {mapProject(folder)}
        </ul>
      ))

    const mappedTests = tests?.length &&
      tests.map((test, index) =>
        <ul>
          <li><h4>{test}</h4></li>
        </ul>
      )
    return <li>
      <h3>{name}</h3>
      {mappedFolders}
      {mappedTests}
    </li>
  }

  const projectsList =
    projects.map((project, index) =>
      <ul>
        {mapProject(project)}
      </ul>)

  return (
    <div className="ProjectsMenu">
      <h2>Projects Menu </h2>
      {projectsList}
    </div>
  );
}

export default ProjectsMenu;
