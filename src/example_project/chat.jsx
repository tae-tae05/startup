import React from 'react';
import { useState } from 'react';
import './example_project.css';

export function Chat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    React.useEffect(() => {
        configureWebSocket();
      }, []);

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
                onChange={handleInput}> 
            </input>
            <button className="button button1" onClick={sendMessage}>Send</button>
            {/* <button className="button button1" onclick="sendMessage()">Send</button> */}
        </div>
        
    )
}