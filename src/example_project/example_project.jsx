import React from 'react';
import { useState } from 'react';
import './example_project.css';
// import { Project_Info } from './project_info';


export function Example_Project(props) {
    const [fact, setFact] = React.useState('Loading fact...');
    // const [projects, setProjects] = React.useState([]);

    React.useEffect(() => {
        
        fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
        .then((response) => response.json())
        .then((data) => {
            setFact(data.text);
        })
        .catch();
    }, []);

    // React.useEffect(() => {
    //     fetch('/api/example_project')
    //       .then((response) => response.json())
    //       .then((project) => {
    //         setProjects(project);
    //       });
    // }, []);

   
    return (
        <main className='container-fluid text-center'>
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

            <h2>Message History</h2>
                <div>
                    <Chat />
                    <p className='fact'>{fact}</p>
                </div>

        </main>
    );
}

function Chat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleInput = (event) => {
        setMessage(event.target.value);
    };

    const sendMessage = () => {
        if (message.trim() !== '') { //prevent sending empty messages
            setMessages([...messages, message]);
            setMessage(''); //clear input field after sending
        }
    };

    return (
        <div>
            <ul>
                {messages.map((msg, index) => (
                    <li className="messaging" key={index}>{msg}</li>
                ))}
            </ul>
            <input
            type="text"
            value={message}
            onChange={handleInput}
            ></input>
            <button className="button button1" onClick={sendMessage}>Send</button>
        </div>
    )
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
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    const increment = (index) => {
        switch (index) {
            case 1:
              setCount1(count1 + 1);
              break;
            case 2:
                setCount2(count2 + 1);
              break;
            case 3:
                setCount3(count3 + 1);
              break;
            default:
              break;
          }
    };

    const decrease = (index) => {
        switch (index) {
            case 1:
                if(count1 > 0){
                    setCount1(count1 - 1);
                    break;
                }
            case 2:
                if(count2 > 0){
                    setCount2(count2 - 1);
                    break;
                }
            case 3:
                if(count3 > 0){
                    setCount3(count3 - 1);
                    break;
                }
            default:
                break;
            }
    };

    return (
        <>
            <span className="color1">Count: </span>{count1}
            <button className="button button1" onClick={() => increment(1)}>Up</button>
            <button className="button button1" onClick={() => decrease(1)}>Down</button>
            <span className="color1">Count: </span>{count2}
            <button className="button button1" onClick={() => increment(2)}>Up</button>
            <button className="button button1" onClick={() => decrease(2)}>Down</button>
            <span className="color1">Count: </span>{count3}
            <button className="button button1" onClick={() => increment(3)}>Up</button>
            <button className="button button1" onClick={() => decrease(3)}>Down</button>
        </>
    )
}

