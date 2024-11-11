import React, { useState } from 'react';

export function Display_Projects() {
    return (
        <>
        <Link className="projectName list_item" to="../example_project">💠 Example Project 1 💠</Link>
        <Display />
        </>
    )

    function Display() {
        const [projects, setProjects] = React.useState([]);

        React.useEffect(() => {
            const project_text = localStorage.getItem('projects');
            if (project_text) {
                setProjects(JSON.parse(project_text));
            }
        }, []);

        
    }

}