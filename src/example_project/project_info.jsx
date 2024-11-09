import React from 'react';
import { useState } from 'react';
import './example_project.css';

export function Project_Info() {
    return (
        <>
        <h2>💠 Project Name 💠</h2>

      <div className="project-info">
        <Hook_Button />
      </div>

      <div className="project-info">
        <Update />
      </div>

      <div className="project-info">
          <Counter_Button />
      </div>

      <div className="project-info">
          <Counter_Button />
      </div>
      
      <div className="project-info">
          <Counter_Button />
      </div>

        </>
    );
}

function Update() {
    const [text, setInputValue] = useState('');
    const [text_holder, setCurrentValue] = useState('');

    const handleInput = (event) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        if (text.trim() !== '') { //prevent sending empty messages
            setCurrentValue(text);
            setInputValue(''); //clear input field after sending
        }
      };

    return (
        <>
        <span className="color1">Yarn Type: </span><span>{text_holder} </span>
        <input type='text' value={text} onChange={handleInput}/>
        <button className="button button1" onClick={handleClick}>Submit</button>
        </>
    );
}

function Hook_Button() {
    const [text, setInputValue] = useState('');
    const [text_holder, setCurrentValue] = useState('');

    const handleInput = (event) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        if (text.trim() !== '') { //prevent sending empty messages
            setCurrentValue(text);
            setInputValue(''); //clear input field after sending
        }
      };

    return (
        <>
        <span className="color1">Hook: </span><span>{text_holder} </span>
        <input type='text' value={text} onChange={handleInput}/>
        <button className="button button1" onClick={handleClick}>Submit</button>
        </>
    );
}

function Counter_Button() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        if(count > 0){
            setCount(count - 1);
        };
    };

    return (
        <>
            <span className="color1">Count: </span>{count}
            <button className="button button1" onClick={increment}>Up</button>
            <button className="button button1" onClick={decrease}>Down</button>
        </>
    )
}
