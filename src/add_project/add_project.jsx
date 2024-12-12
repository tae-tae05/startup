import React from 'react';
import "./add_project.css";
import { useState } from 'react';
import { ProjectEvent, ProjectNotifier } from '../projects/projectNotifier';
import { User } from '../projects/user';

export function Add_Project(props) {
  const userName = props.userName;
  return (
    <main className="parent">
        <Submit userName={userName}/>
    </main>

  );
}

function getRandomInt() {
  return Math.floor(Math.random() * 10000);
}

function Submit(props) {
  const [projectName, setInputValue1] = useState('');
  const [hookSize, setInputValue2] = useState('');
  const [yarnType, setInputValue3] = useState('');
  const index = getRandomInt();
  const counter1 = 0;
  const counter2 = 0;
  const counter3 = 0;
  const userName = props.userName;

  async function saveProject(projectName, hookSize, yarnType) {
    const new_project = {name: projectName, hook: hookSize, yarn: yarnType, num: index, counter1: counter1, counter2: counter2, counter3: counter3, userName: userName};
    await fetch('/api/add_project', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(new_project),
    });
    ProjectNotifier.broadcastEvent(projectName, ProjectEvent.Submit, projectName);
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
  };

  return (
    <>
      <User />
      <div className="box_input">
        <label htmlFor="name">Project Name</label>
        <input type="text" id="name" value={projectName} onChange={(event) => handleInput(event, 1)} />
      </div>
      <div className="box_input">
        <label htmlFor="name">Hook Size</label>
        <input type="text" id="hook" value={hookSize} onChange={(event) => handleInput(event, 2)} />
      </div>
      <div className="box_input">
        <label htmlFor="name">Yarn Type</label>
        <input type="text" id="yarn" value={yarnType} onChange={(event) => handleInput(event, 3)} />
      </div>
      <button className="button1" onClick={handleClick}>Submit</button>
    </>
  );
}