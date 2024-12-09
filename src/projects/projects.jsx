import React from 'react';
import './projects.css'
import { Link } from 'react-router-dom';

export function Projects() {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/projects')
      .then((response) => response.json())
      .then((projects) => {
        setProjects(projects);
      });
  }, []);

  // const project_names = [];

  // for (const [i, project] of projects.entries()) {
  //     project_names.push(
  //         <ul key={i}>
  //             <li>{project.name}</li>
  //             <li>{project.id}</li>
  //         </ul>
  //     );
  // }

  return (
    <main className="container-fluid text ">
            <nav>
                <menu>
                    <div className="vertical-menu">
                        <Link className="projectName list_item" to="..">Home</Link>
                        <Link className="projectName list_item" to="../add_project">Add Project</Link>

                        {/* {project_names.map((name, index) => (
                          <Link className="projectName list_item" to="../example_project" key={index}>{name}</Link>
                        ))} */}
                        {projects.map((project, index) => (
                          <Link className="projectName list_item" to={"../example_project/$"} key={index}>{project.name}</Link>
                        ))}
                    </div>
                </menu>
            </nav>
        </main>
  );
}
