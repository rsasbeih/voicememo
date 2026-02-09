//the whole file is the server
// whoever runs the code controls the direction
const WebSocket = require("ws");
const PORT=8787;
const server= new WebSocket.Server({port:PORT});
// this is fired everytime I client connects, we pass it ws
// which is the connection to that specific client
console.log(`WebSocket server is running on ws://localhost:${PORT}`);
server.on("connection",(clientSocket)=>{
console.log("Client connected");
//sending a message from server to client
clientSocket.send(JSON.stringify({type:"server",message:"hello from server"}));

clientSocket.on("message",(data)=>{
    const text=data.toString();
    console.log("Received message from client:",text);
});

clientSocket.on("close",()=>{
    console.log("Client disconnected");
});
clientSocket.on("error",(error)=>{
    console.error("Error occurred:", error);
});
});