let wss = require("ws").Server;
let server = new wss({port:590});
let clients = new Set();
let document = "";
server.on("connection", function(socket) {
  clients.add(socket);
  socket.send(document);
  socket.on("message", function(message) {
    document = message;
    for (let editor of clients) {
      if (editor !== this) editor.send(document)
    };
  });
  socket.on("close", function() {
    clients.delete(socket);
  });
});
