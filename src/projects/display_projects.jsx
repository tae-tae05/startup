import React, { useState } from 'react';
import './projects.css'
import { Link } from 'react-router-dom';

export function Display_Projects() {
    return (
        <Display />
    )

    function Display() {
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

        // for (const [i, score] of scores.entries()) {
        //     scoreRows.push(
        //       <tr key={i}>
        //         <td>{i}</td>
        //         <td>{score.name.split('@')[0]}</td>
        //         <td>{score.score}</td>
        //         <td>{score.date}</td>
        //       </tr>
        //     );
        //   }

        return (
            <div className="vertical-menu">
                {project_names.map((name, index) => (
                        <Link className="projectName list_item" to="../example_project" key={index}>{name}</Link>
                    ))}
            </div>
        )
    }

}