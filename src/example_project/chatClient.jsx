import React, { Component } from 'react'
import ChatInput from './input'
import ChatMessage from './message'

const URL = 'ws://localhost:3030'

class Chat extends Component {
  state = {
    messages: [],
  }

  ws = new WebSocket(URL)

  componentDidMount() {
    this.ws.onopen = () => {
      console.log('connected')
    }

    this.ws.onmessage = evt => {
      const message = JSON.parse(evt.data)
      this.addMessage(message)
    }

    this.ws.onclose = () => {
      console.log('disconnected')
      this.setState({
        ws: new WebSocket(URL),
      })
    }
  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }))

  submitMessage = messageString => {
    const message = {message: messageString }
    this.ws.send(JSON.stringify(message))
    this.addMessage(message)
  }

  render() {
    return(
      <div>
            <ul>
            {this.state.messages.map((message, index) =>
                <ChatMessage
                  key={index}
                  message={message.message}
                />,
              )
            }
            </ul>
            <input
                type="text"
                value={message}
                onChange={handleInput}> 
            </input>
            <ChatInput
                ws={this.ws}
                onSubmitMessage={messageString => this.submitMessage(messageString)}
              />
        </div>
    )
  }
}


const ChatThing = new Chat();
export { ChatThing };



















// configureWebSocket();

// // If the webSocket is closed then disable the interface
// socket.onclose = (event) => {
//   appendMsg('system', 'websocket', 'disconnected');
//   document.querySelector('#name-controls').disabled = true;
//   document.querySelector('#chat-controls').disabled = true;
// };

// function appendMsg(cls, from, msg) {
//   const chatText = document.querySelector('#chat-text');
//   const chatEl = document.createElement('div');
//   chatEl.innerHTML = `<span class="${cls}">${from}</span>: ${msg}</div>`;
//   chatText.prepend(chatEl);
// }

// const input = document.querySelector('#new-msg');
// input.addEventListener('keydown', (e) => {
//   if (e.key === 'Enter') {
//     sendMessage();
//   }
// });

// function sendMessage() {
//   const msgEl = document.querySelector('#new-msg');
//   const msg = msgEl.value;
//   if (!!msg) {
//     appendMsg('me', 'me', msg);
//     // const name = document.querySelector('#my-name').value;
//     socket.send(`"msg":"${msg}"}`);
//     msgEl.value = '';
//   }
// }

// function configureWebSocket() {
//   const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
//   socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
//   socket.onopen = (event) => {
//       appendMsg('system', 'websocket', 'connected');
//   };
//   socket.onclose = (event) => {
//     appendMsg('system', 'websocket', 'disconnected');
//   }
//   socket.onmessage = async (event) => {
//       const text = await event.data.text();
//       const chat = JSON.parse(text);
//       appendMsg('friend', chat.name, chat.msg);
//   };
// }