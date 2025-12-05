const { WebSocketServer, WebSocket} = require('ws');

function websocket(httpServer) {
  const socketServer = new WebSocketServer({ server: httpServer });

  socketServer.on('connection', (socket) => {
    console.log("Client connected");
    socket.isAlive = true;

    socket.on('message', function message(data) {
      socketServer.clients.forEach((client) => {
        if (client !== socket && client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      });
    });

    socket.on('pong', () => {
        socket.isAlive = true;
    });
  });

  setInterval(() => {
    socketServer.clients.forEach(function search(client) {
        if(client.isAlive === false) return client.terminate();

        client.isAlive = false;
        client.ping();
    });
  }, 10000)

}

module.exports = { websocket };