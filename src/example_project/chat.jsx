import React from 'react';
import { useState } from 'react';
import './example_project.css';

export const Chat = ({ user }) => {
    // const [message, setMessage] = useState('');
    // const [messages, setMessages] = useState([]);

    // const handleInput = (event) => {
    //     setMessage(event.target.value);
    // };

    // const sendMessage = () => {
    //     if (message.trim() !== '') { //prevent sending empty messages
    //         setMessages([...messages, message]);
    //         setMessage(''); //clear input field after sending
    //     }
    // };
        React.useEffect(() => {
            if (user) {
                configureWebSocket(user);
            } else {
                console.log('User not found');
            }
            
        }, [user]);
    
      return (
        <div id="chatbox">
          <div id="messages" className="messaging" style={{maxHeight: '500px', overflow: 'auto'}} ></div>
          <div className="messageInput">
            <form className = "input-group" type="text" id="form-control" >
              <input type="text" id="messageText" className="form-control" placeholder="Send a message..." name='messageText' />
              <button className='button button1'>Send</button>
            </form>
          </div>
        </div>
      );
}

        //<div>
        //     <ul>
        //         {messages.map((msg, index) => (
        //             <li className="messaging" key={index}>{msg}</li>
        //         ))}
        //     </ul>
        //     <input
        //         type="text"
        //         value={message}
        //         onChange={handleInput}> 
        //     </input>
        //     <button className="button button1" onClick={sendMessage}>Send</button>
        // </div>
        