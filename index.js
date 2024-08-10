const express = require('express');
const {createServer} = require("node:http");
const {join} = require("node:path");
const {Server} = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req,res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) =>{
    console.log("connection established");
    socket.on('chat message', (msg) => { //listening to any custom event from client
        console.log("recieved msg", msg);
        socket.emit("chat message", msg); // broadcasting event to everyone from server
    })

    socket.on('disconnect', (msg) => {
        console.log("user got disconnected!");
    })
})

server.listen(3000, () => {
    console.log(`Server running at Port: 3000`)
})