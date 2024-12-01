import React from 'react';
import { useState } from 'react';
import './example_project.css';
import { Project_Info } from './project_info';


export function Example_Project() {
    const [fact, setFact] = React.useState('Loading fact...');

    React.useEffect(() => {
        
        fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
        .then((response) => response.json())
        .then((data) => {
            setFact(data.text);
        })
        .catch();
    }, []);

    return (
        <main className='container-fluid text-center'>
        <Project_Info />
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
