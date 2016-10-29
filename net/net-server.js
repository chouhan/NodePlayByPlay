/**
 * Created by rakeshchouhan on 10/18/16.
 */
const net = require('net');
var server = net.createServer((socket) => {
        socket.end('Hello Rakesh - This is the message being sent from server. \n');
    }).on('error', (err) => {
        console.log(err);
        throw err;
});

//get a random port and ask the client to use the same
server.listen(() => {
    address = server.address();
    console.log('openened server on %j', address);
});
