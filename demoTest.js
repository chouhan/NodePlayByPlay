/**
 * Created by rakeshchouhan on 3/31/17.
 */

1). How do you make synchronous http calls natively in nodejs?
2). How do you catch Errors globally in Nodejs?
3). How do you create child processes in NodeJs?
4). == vs ===. How do you equate 1.0 and '1.00' to true
5). Convert a JSON object to string and parse it.
6). Prototype in Nodejs?
7). what is process bindings in nodejs?
8). npm local vs global

npm install angularjs@1.2


var http = require('http');

url = appConfig.urlsConstant


try {


}

catch(error) {
    ErrorUtils.catch(e);
}


spawn() // creates child process from the master process
fork() // grabs a child process
execute() // is like shell commands

MyObject.prototype.toString = function(something) {
    return something.//some oprations
}


==  vs ===

    1.0 === Number('1.00') // if both are numbers - true
'number'
"string"

1.0 === 1

JSON.parse('{...}') // a JSON object
JSON.stringify({}); '{....}'




http.createServer(function(response, request){

    request.url =  url.something;
    request.writeHead(200, {
        'Set-cookie': 'cookie=test'
    });

    request.end('test');

}).listen(8000);

// read - write files
// non blocking
// web sockets // What is web sockets?
// databases?
// chat applications?
// data streaming?
//
