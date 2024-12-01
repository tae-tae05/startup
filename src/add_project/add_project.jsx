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

    // updateLocalData(new_project);
    updateData(new_project);
  }

  // function updateLocalData(newProject) {
  //   let projects = [];
  //   const project_texts = localStorage.getItem("projects");
  //   if (project_texts) {
  //     projects = JSON.parse(project_texts);
  //   }

  //   projects.push(newProject);

  //   localStorage.setItem('projects', JSON.stringify(projects));
  // }

  async function updateData() {
    const new_proj = { name: projectName, hook: hookSize, yarn: yarnType }
    await fetch('/api/new_project', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(new_proj),
    });
  }

  const handleClick = () => {
      if (projectName.trim() !== '' && hookSize.trim() !== '' && yarnType.trim !== '') { //prevent sending empty messages
          saveProject(projectName, hookSize, yarnType);
          setInputValue1(''); //clear input field after sending
          setInputValue2(''); //clear input field after sending
          setInputValue3(''); //clear input field after sending
      }
    };

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
    // saveProject(projectName, hookSize, yarnType);
  };

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
      {/* <Link to="/example_project"> */}
      <button className="button1" onClick={handleClick}>Submit</button>
    {/* </Link> */}
    </>
  );
}