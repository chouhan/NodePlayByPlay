/**
 * Created by rakeshchouhan on 10/18/16.
 */
const net = require('net');
const client = net.connect({port: 24141}, () => {
        // Use the same port for the server
        console.log('connected to server');
        client.write('world!\r\n');
    });

client.on('data', (data) => {
    console.log(data.toString());
    client.end();
})

client.on('end', () => {
   console.log("Disconnected from server");
});