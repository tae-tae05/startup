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
    // const project_text = localStorage.getItem('projects');
    // if (project_text) {
    //   setProjects(JSON.parse(project_text));
    // }
  }, []);

  async function clearLocalStorage() {
    // fetch('/api/clear', {
    //   method: 'delete'
    // });
    // localStorage.clear();
  }

  const handleClearStorage = () => {
    clearLocalStorage();
    // Optionally, you can add some feedback to the user
    alert('Storage cleared!');
  }

  const project_names = [];

    for (const [i, project] of projects.entries()) {
        project_names.push(
            <tr key={i}>
                <td>
                    {project.name}
                </td>
            </tr>
        );
    }

  return (
    <main className="container-fluid text ">
            <nav>
                <menu>
                    <div className="vertical-menu">
                        <Link className="projectName list_item" to="..">Home</Link>
                        <Link className="projectName list_item" to="../add_project">Add Project</Link>

                        {project_names.map((name, index) => (
                          <Link className="projectName list_item" to="../example_project" key={index}>{name}</Link>
                        ))}
                        <button className="button button1" onClick={handleClearStorage}>Clear All Projects</button>
                    </div>
                </menu>
            </nav>
        </main>
  );
}
