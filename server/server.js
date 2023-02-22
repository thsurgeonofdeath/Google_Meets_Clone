const express = require('express');
const http = require('http');
const { v4 : uuidv4} = require('uuid');
const cors = require('cors');
const twilio = require('twilio');


const PORT = process.env.PORT || 5002;

const app = express();

const server = http.createServer(app);

app.use(cors());

const io = require('socket.io')(server, {
    cors : {
        origin: '*',
        methods : ['GET','PORT']
    }
});

server.listen(PORT, () => {
    console.log(`Server is listenning on ${PORT}`)
});