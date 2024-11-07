import React from 'react';
import { useState } from 'react';
import './example_project.css';

export function Example_Project() {
  return (
    <main className='container-fluid text-center'>
      <h2>💠 Project Name 💠</h2>

      {/* <div className="project-info">
        <span className="color1">Hook Size: </span>3.5mm
        <Update />
      </div>

      <div className="project-info">
        <span className="color1">Yarn Type: </span>Acrylic yellow 5ply medium weight
        <Update />
      </div> */}

      <div className="project-info">
          <Counter_Button />
      </div>

      <div className="project-info">
          <Counter_Button />
      </div>
      
      <div className="project-info">
          <Counter_Button />
      </div>

      <h2>Message History</h2>
        <div>
            <Chat />
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
            palceholder="Type your message..."></input>
            <button className="button button1" onClick={sendMessage}>Send</button>
        </div>
    )
}

// function Update() {
//     return ( 
//         <>
//         Update: 
//         <input className="color2" type="text" id="type" value="input here" readonly />
//         <button className="button button1">Submit</button>
//         </>
//     )
// }

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
            Count: {count}
            <button className="button button1" onClick={increment}>Up</button>
            <button className="button button1" onClick={decrease}>Down</button>
        </>
    )
}
