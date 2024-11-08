import React from 'react';
import "./add_project.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';


export function Add_Project() {
  return (
    <main className="parent">
            <form method="get" action="projects.html">
              <Submit />
            </form>
        </main>

  );
}

function Submit() {
  const [text1, setInputValue1] = useState('');
  const [text2, setInputValue2] = useState('');
  const [text3, setInputValue3] = useState('');
  // const [text_holder, setCurrentValue] = useState(''); //handle next phase

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

  const handleClick = () => {
      if (text.trim() !== '') { //prevent sending empty messages
          // setCurrentValue(text); //handle during next phase
          setInputValue(''); //clear input field after sending
      }
    };

  return (
    <>
      <div className="box_input">
        <label for="name">Project Name</label>
        <input type="text" id="name" value={text1} onChange={(event) => handleInput(event, 1)} />
      </div>
      <div className="box_input">
        <label for="name">Hook Size</label>
        <input type="text" id="hook" value={text2} onChange={(event) => handleInput(event, 2)} />
      </div>
      <div className="box_input">
        <label for="name">Hook Size</label>
        <input type="text" id="hook" value={text3} onChange={(event) => handleInput(event, 3)} />
      </div>
      <Link to="/example_project">
      <button className="button1">Submit</button>
    </Link>
    </>
  );
}