export async function configureWebSocket(user) {
  console.log('Configuring WebSocket');
  let socket;
  const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
  socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
  console.log(socket);
  let userChat;

  socket.onopen = (event) => {
    console.log('WebSocket connection is open.');
    socket.send(JSON.stringify({ type: 'UserConnected', sender: user.email }));
    userChat = new Chat(user, socket);
    console.log("User chat: ", userChat);
    userChat.displayChat();

  };
  socket.onclose = (event) => {
      console.log('WebSocket connection closed');

  };
}

class Chat {

  user;
  messages;
  socket;

  constructor(user, socket) {
      this.user = user;
      if (user) {
          this.messages = user.chatData;
      } else {
          this.messages = [];
      }
      this.socket = socket;
      
  }
}







  
