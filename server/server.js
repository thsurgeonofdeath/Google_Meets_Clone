const express = require('express');
const http = require('http');
const { v4 : uuidv4} = require('uuid');
const cors = require('cors');
const twilio = require('twilio');


const PORT = process.env.PORT || 5002;

const app = express();

const server = http.createServer(app);

app.use(cors());

let connectedUsers = [];
let rooms = [];

//create route to check if room exists
app.get('/api/room-exists/:roomId',(req , res)=>{
    const { roomId } = req.params;
    const room = rooms.find((room) => room.id === roomId)

    if(room){
        // send response that room exists
        if(room.connectedUsers.length > 3){
            return res.send({roomExists: true, full: true})
        }else{
            return res.send({roomExists: true, full: false})
        }
    }else{
        // send response that room does not exist
        return res.send({roomExists : false});
    }

})

const io = require('socket.io')(server, {
    cors : {
        origin: '*',
        methods : ['GET','PORT']
    }
});

server.listen(PORT, () => {
    console.log(`Server is listenning on ${PORT}`)
});