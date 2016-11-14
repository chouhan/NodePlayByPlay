/*
To load the web page, we need to use a library that makes HTTP(s) requests. There are a lot of modules doing that that. Like always, I recommend choosing simple/small modules - I wrote a tiny package that does it: tinyreq.

    Using this module, you can easily get the HTML rendered by the server from a web page:

    tinyreq is actually a friendlier wrapper around the native http.request built-in solution.*/

const request = require('tinyreq');

request("http://rakeshchouhan.com", (err, res) => {
    console.log( "Received error " + err );
    console.log( "Received error " + res );
});