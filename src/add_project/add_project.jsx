import React from 'react';
import "./add_project.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';


export function Add_Project() {
  return (
    <main className="parent">
        <Submit />
    </main>

  );
}

function Submit() {
  const [projectName, setInputValue1] = useState('');
  const [hookSize, setInputValue2] = useState('');
  const [yarnType, setInputValue3] = useState('');
  // const [text_holder, setCurrentValue] = useState(''); //handle next phase

  async function saveProject(projectName, hookSize, yarnType) {
    const new_project = {name: projectName, hook: hookSize, yarn: yarnType};

    updateLocalData(new_project);
  }

  function updateLocalData(newProject) {
    let projects = [];
    const project_texts = localStorage.getItem("projects");
    if (project_texts) {
      projects = JSON.parse(project_texts);
    }

    projects.push(newProject);

    localStorage.setItem('projects', JSON.stringify(projects));
  }

  const handleInput = (event, index) => {
    switch (index) {
      case 1:
        setInputValue1(event.target.value);
        break;
      case 2:
        setInputValue2(event.target.value);
        break;
      case 3:
        setInputValue3(event.target.value);
        break;
      default:
        break;
    }
    saveProject(projectName, hookSize, yarnType);
  };

  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    const project_text = localStorage.getItem('projects');
    if (project_text) {
      setProjects(JSON.parse(project_text));
    }
  }, []);

  const project_rows = [];
  if (projects.length) {
    for (const [i, project] of projects.entries()) {
      project_rows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{project.name}</td>
          <td>{project.hook}</td>
          <td>{project.yarn}</td>
        </tr>
      );
    }
  }


  // const handleClick = () => {
  //     if (text.trim() !== '') { //prevent sending empty messages
  //         // setCurrentValue(text); //handle during next phase
  //         setInputValue(''); //clear input field after sending
  //     }
  //   };

  return (
    <>
      <div className="box_input">
        <label for="name">Project Name</label>
        <input type="text" id="name" value={projectName} onChange={(event) => handleInput(event, 1)} />
      </div>
      <div className="box_input">
        <label for="name">Hook Size</label>
        <input type="text" id="hook" value={hookSize} onChange={(event) => handleInput(event, 2)} />
      </div>
      <div className="box_input">
        <label for="name">Yarn Type</label>
        <input type="text" id="yarn" value={yarnType} onChange={(event) => handleInput(event, 3)} />
      </div>
      <Link to="/example_project">
      <button className="button1">Submit</button>
    </Link>
    <ul id='project'>{project_rows}</ul>
    </>
  );
}