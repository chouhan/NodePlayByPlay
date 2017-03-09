/**
 * Created by rakeshchouhan on 3/8/17.
 */
//Include the https and ,file system modules
var https = require('https');
var fs = require('fs');

//Create the server options object, specifying the SSL key & cert
var options = {
    key: fs.readFileSync('self-signed/server.key'),
    cert: fs.readFileSync('self-signed/server.crt')
};

//Create the HTTPS enabled server - listening on port 443
https.createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
}).listen(443);