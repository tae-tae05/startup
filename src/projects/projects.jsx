import React from 'react';
import './projects.css'
import { Link } from 'react-router-dom';
import { Display_Projects } from './display_projects';

export function Projects() {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    const project_text = localStorage.getItem('projects');
    if (project_text) {
      setProjects(JSON.parse(project_text));
    }
  }, []);

  function clearLocalStorage() {
    localStorage.clear();
  }

  const handleClearStorage = () => {
    clearLocalStorage();
    // Optionally, you can add some feedback to the user
    alert('Local storage cleared!');
  }

  return (
    <main className="container-fluid text-center">
            <nav>
                <menu>
                    <div className="vertical-menu">
                        <Link className="projectName list_item" to="..">Home</Link>
                        <Link className="projectName list_item" to="../add_project">Add Project</Link>
                        {/* make a way to display all projects from the local storage */}
                        <Display_Projects />
                        <button className="button button1" onClick={handleClearStorage}>Clear All Projects</button>
                    </div>
                </menu>
            </nav>
        </main>
  );
}
