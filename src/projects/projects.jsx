import React from 'react';
import './projects.css'
import { Link } from 'react-router-dom';
// import { ProjectEvent, ProjectNotifier } from './projectNotifier';
// import { User } from './user';

export function Projects(props) {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/projects')
      .then((response) => response.json())
      .then((projects) => {
        setProjects(projects);
      });
  }, []);

  return (
    <main className="container-fluid text ">
            <nav>
                <menu>
                    <div className="vertical-menu">
                        {/* <User username={props.userName}/> */}
                        <Link className="projectName list_item" to="..">Home</Link>
                        <Link className="projectName list_item" to="../add_project">Add Project</Link>
                        {projects.map((project, index) => (
                          <Link className="projectName list_item" to={`../example_project/${project.num}`} key={index}>{project.name}</Link>
                        ))}
                    </div>
                </menu>
            </nav>
        </main>
  );
}
