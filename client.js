var options = {forceNew:true,timeout:15000,reconnection:true,reconnectionDelay:35000};
var socket = require('socket.io-client')('http://localhost:3000',options);

process.stdin.resume();

connInit(socket);

function connInit(socket) {
  socket.on('connect', function(data) {
    console.log('connect ' + socket.id);
  });

  socket.on("disconnect", function(data) {
    console.log("disconnect: "+data);
    socket.io.reconnect();
    console.log("skipReconnect:"+socket.io.skipReconnect);
  });

  socket.on("reconnect", function(data) {
    console.log("reconnect: "+data);
  });
}
