const { WebSocketServer} = require('wasi');

function websocket(httpServer) {
  const socketServer = new WebSocketServer({ server: httpServer });

}