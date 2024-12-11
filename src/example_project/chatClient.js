// export async function configureWebSocket(user) {
//   console.log('Configuring WebSocket');
//   let socket;
//   const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
//   socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
//   console.log(socket);
//   let userChat;

//   socket.onopen = (event) => {
//     console.log('WebSocket connection is open.');
//     socket.send(JSON.stringify({ type: 'UserConnected', sender: user.email }));
//     userChat = new Chat(user, socket);
//     console.log("User chat: ", userChat);
//     userChat.displayChat();

//   };

//   socket.onclose = (event) => {
//       console.log('WebSocket connection closed');
//   };

//   socket.onmessage = async (event) => {
//     const msg = JSON.parse(event.data);
//     console.log(`Received message: ${msg.message}`);
//     const response = await fetch(`/api/secureUser`);
//     const customer = await response.json();
//     // userChat.displayChat(customer);
//   };
  
//   socket.onerror = (error) => {
//     console.log(`WebSocket error: ${error}`);
//   };

// }

// class Chat {

//   user;
//   messages;
//   socket;

//   constructor(user, socket) {
//       this.user = user;
//       if (user) {
//           this.messages = user.chatData;
//       } else {
//           this.messages = [];
//       }
//       this.socket = socket;
      
//   }

//   async displayChat(newMessage = null) { 

//     if (newMessage) {
//         this.messagessList = newMessage.chatData;
//     }

//     let userChatData = this.messages;
//     let chatBox = document.getElementById("chatbox");
//     chatBox.innerHTML = '';
//     let chatContainer = document.createElement("div");
//     chatContainer.id = "messages";
//     chatContainer.className = "messages";
//     chatContainer.style.maxHeight = '500px';
//     chatContainer.style.overflow = 'auto';
//     chatBox.appendChild(chatContainer);
//   }
// }







  
