import React, { useState } from 'react';
import './projects.css'
import { Link } from 'react-router-dom';

export function Display_Projects() {
    const [projects, setProjects] = React.useState([]);

    React.useEffect(() => {
        const project_text = localStorage.getItem('projects');
        if (project_text) {
            setProjects(JSON.parse(project_text));
        }
    }, []);

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
        <div>
            {project_names.map((name, index) => (
                    <Link className="projectName list_item" to="../example_project" key={index} style={{ textAlign: 'center' }}>{name}</Link>
                ))}
        </div>
    )
}

