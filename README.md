**Node JS**

Low Latency, High Throughput Client Server Communication using Javascript.

Commands:

sudo brew install node - if you do not have brew, then go nodejs.org and install it.
npm - node package manager - this comes with node by default
sudo npm install -g express:  (-g defines global install)
sudo gem install sass (installs SASS for CSS3)

Creating project with express

cd ../WebStormProjects/
express {projectName} - this creates a projectName (here nodeWithExpressDemo)




Advantages:

Build Scalable network applications using JS on server side
V8 JS Runtime - used in Chrome Browser. Node.js provides a wrapper around this V8 JS Runtime

#####################################
#													#		
#	Node.js										#
#													#
#	#############################		#
#	#										#		#
#	#	V8 JavaScript Runtime			#		#
# 	#										#		#
#	#############################		#
#####################################

Fast - because the V8 JS is all written in C.


What can you build with Node?

a). you can build a web socket server - like a chat server - the socket stays opens when there is a communication happening form client to a server.
b). Uploading a big large file. upload and process multiple files.
c). Advertising server.
d). Any real time data apps


What is Node not ?

a) Not a web framework - not gonna replace rails, Django,. Instead it a low level n/w communication.
b). Not a multi threaded application.

Blocking Code:

Read file from filesystem, set equal to “contents”
print contents — We can’t actually print out the content until we read all the contents from the file - This is a blocking code
Do something else.


pseudo code for Blocking code.

var contents = fs.readFileSync(‘etc/hosts’); // stop process until complete
console.log(contents);
console.log(Doing Something else');

Non Blocking Code

Read the file from the file system
whenever you’re complete, print the contents — This is a callback function here — This is a non blocking code because,the print job gets called as soon as the contents are read from the file.
Do Something else 

pseudo code for Non Blocking code.

fs.readFile(‘etc/hosts’, function (err, contents) { // This is a call back function - This function gets called after the file is read
	console.log(contents);	
});
console.log(Doing Something else’);


This above code is same as..

var callback = function(err, contents){
	console.log(contents);
}

fs.readFile(‘etc/hosts’, callback);
 

**Note that blocking code reads one file at a time where as a non blocking code reads multiple files at the same time with some delay reading subsequent files (or files that are in tandem.)

**So ideally, a non blocking code has a callback function that send out responses (could be results or errors);

pseudo code for Non Blocking code for the files that are read in parallel.

var callback = function(err, contents){
console.log(contents);
}

fs.readFile(‘etc/hosts’, callback); — Reads the file and does not wait for it to complete reading.
fs.readFile(‘etc/inetcfg’, callback);  — Starts reading this file as well and does not wait for the previous file to complete reading.

— Blocking pseudo code

fs.readFile(‘etc/hosts’); — Reads and waits for it to complete reading
fs.readFile(‘etc/inetcfg’); — One the above file is completely read then starts reading this file.


Examples of Typical blocking things

1). Calls out to web services
2). Reads/Writes on the Database
3). Calls to extensions

Events in NodeJS

Nodes registers events.

Steps in which node executes the events:

1. Request Events - Node initially registers request events, for whenever requests come in
2. Connection Events - Then once it completes registering the requests events, node goes into the event loop - The event loop continuously checks for the events that come in. Once the request come in, it call the appropriate callback function.
    1. While in the process of Event loop, there could be many more events coming in, which goes into the Event Queue. The event Queue is typically waiting for the first event to complete to process the one which is next in the queue. Events are processed one at a time in the event loop. For each request event there could be a connection and close events associated with it.
3. Close Events - Once the callback is triggered by node, it closes out the connection


Streams:

What are Streams ?

Start processing the data piece by piece as soon as the data arrives. this can be done using streams.

Streams can be readable, writable or both.

Ex: Streaming Response:

Sending data back to the response.

var http = require(‘http’);
http.createServer(function(request, response){ 		// request - Readable Stream and response - Writable Stream
	response.writeHead(200);
	response.write(“Dog is running.”);
	setTimeout(function(){
		response.write(“Dog is done.”);
		response.end();
	}, 5000);
}).listen(8080);

// Output

Dog is running.
# 5 seconds later
Dog is done


How to Read from the Request when we send some data into the server.

Readable Streams:

Read Request when we send some data into the server. This can be done by Readable Stream.
Readable Stream inherits from EventEmitter, which emits 
	data event and 
	end event - when its done transmitting data to the server.

Ex: 

Let’s print what we receive from the request.

// request - Readable Stream and 
// response - Writable Stream

http.createServer(function(request, response){  // Create the server
	response.writeHead(200); // write the status code.
	request.on(‘data’,function(chunk){ // listen to the data event
	console.log(chunk.toString()); // Whenever a chunk of data comes in, we log it to the console.We could be dealing with binary data, so we need to call toString() here
	}); 

	request.on(‘end’, function(){ // Whenever there is no more data to read on the request, it’s going to emit the end event and we can use that to end the response.
	response.end(); // End the response, as there is no no data to be read from the request.
	});
}).listen(8080)

This code whatever we’ve written is from the request but how am I going to create an echo server and echo back to the response what we are getting from the request.

so the above can be replaced by .. 

http.createServer(function(request, response){  // Create the server
	response.writeHead(200); // write the status code.
	request.on(‘data’,function(chunk){ // listen to the data event
	response.write(chunk);
	}); 

	request.on(‘end’, function(){ // Whenever there is no more data to read on the request, it’s going to emit the end event and we can use that to end the response.
	response.end(); // End the response, as there is no no data to be read from the request.
	});
}).listen(8080)


So all what we need to do is read data from readable stream and write data to writeable stream. There is a shortcut for doing so, instead of the long code above.

http.createServer(function(request, response){  // Create the server
	response.writeHead(200); // write the status code.
	request.pipe(response); // Basically its ReadStream pipe (WriteStream)
}).listen(8080)

Upon executing this code above, the server will be listening on 8080 and what ever data we send to this server, is gonna be echo’ed back to the client.

you can run this command below to test it

curl -d ‘hello’ http://localhost:8080

‘hello’ on the client will be shown

the pipe is same as what it does in UNIX command.

Ex: cat ’sometextfile.txt’ | grep ’somethingToFind’

So we are piping a read stream to a write stream

Reading a File from a  HardDrive and writing it back

var fileSystem = require(‘fs’); // we require a file system module
var readFile = fs.createReadStream(‘readme.md’); // Create s a read stream
var writeToFile = fs.createWriteStream(“readme_copy.md”); // Creates a write stream

// So now in order to read file from one file and write to the other file, we need to 

readFile.pipe(writeToFile); // Reads file from file system “readme.md” and writes this read file to write file system “readme_copy.md”

Upload a File

now Combining the above t2 codes, where we connect to the server, we’re gonna send a file to the server, and we write that to disk.

var fileSystem = require(‘fs’); // we require a file system module
var httpModule = require(‘http’); // we require a http module
http.createServer(function(request, response){ 
	var writeToFile = fileSystem.createWriteStream(“readme_copy.md”); // Creates a write stream
	request.pipe(writeToFile);

	request.on(‘end’, function(){
		response.end(‘uploaded’);
	});
}).listen(8080);

curl  - -upload-file readme.md http://localhost:8080 	// readme.md is the request.

// Output

Uploaded.

So the above is non-blocking, so when you send 2 files to the server, its uploading and streaming in parallel.


Back Pressure

Since the read stream reads faster than the write stream to write the files, there could be chunks of data accumulated in the memory and fills up the memory while writing.

The ‘pipe’ takes care of this problem, it pauses the read stream for the write stream to catch up.

Pipe solves back pressure.. Here’s how

Pause when writeStream is full.
readStream.on(‘data,function(chunk)’){
	var buffer_good = writeStream.write(chunk); // Returns false if kernel buffer is full
	if(!buffer_good) readStream.pause(); // Pause the readStream if the buffer is not good.
});

// We need to know when we can resume the read stream again. We do that by listening to the drain event

writeStream.on(‘drain’, function(){ // The drain event trigger’s when the kernel buffer is good to read the stream again
	readStream.resume();
});

All this logic is encapsulated in the pipe, so we do not have to worry about back pressure.

readStream.pipe(writeStream);

This kind of logic is more suitable in file uploads. Because traditionally, when you’ve used file uploads in the olden days, they can lock the server, stops the application from responding.
	
File Upload code using nodeJs

var fs = require(‘fs’); // requires FileSystem module.
var http = require(‘http’); // requires http module.
http.createServer(function(request, response){ 
	var newFile = fs.createWriteStream(“readme_copy.md”);
	var fileBytes = request.headers[“content-length”];
	var uploadedBytes = 0;
	
	request.pipe(newFile);
	request.on(‘data’, function()){-
		uploadedBytes = chunk.length;
		var progress = (uploadedBytes/ fileBytes) * 100;
		response.write(“progress: “ + parseInt(progress,10) + “%\n”);
	});
...

}).listen(8080);

curl  - -upload-file readme.md http://localhost:8080  // readme.md is the request.


Requiring Modules:

var fs = require(‘fs’); // requires FileSystem module.
var http = require(‘http’); // requires http module.

How does require work ?
How does require return the libraries ?
How does require find these libraries ?
How do we define what require returns ?

Lets create our own module


#custom_hello.js
var hello = function(){
	console.log(‘hello’);
}

// To define what we want to return when we want this file, we use the export object.

exports = hello; // Here we are saying exports = hello object, because exports define what require returns.

#app.js

var hello = require(‘./custom_hello’); // We get the hello function from custom_hello.js file 
hello(); // simple calling hello(), will reference to the hello function in custom_hello.js file.

Another way to use require with custom module goodbye

#custom_goodbye
exports.goodBye = function(){
	console.log(“bye”);
}

#app.js
var hello = require(‘./custom_hello’);
var gb = require(“./custom_goodbye”);

hello(); 
gb.goodBye();

// Also you can directly call

require(‘./custom_goodbye’).goodBye();


Making a http Client by Making HTTP Requests

#make_request.js
var makeRequest = function(message){
// Encapsulating this function in makeRequest
var http= require(‘http’);
var options = {
host:’’localhost’, port:8080, path:’/‘, method:’POST’
}

var request = http.request(options, function(response){ 
response.on(‘data’, function(data){
console.log(data); // logs response body
});
});

request.write(message); // begins request
request.end(); // Finishes request.
};

// Inorder for other JS files to use this function, simply..
exports = makeRequest;


// Here is how you call the makeRequest function, by passing message within.
makeRequest(“Here’s looking at you. kid”);

# In any other JS file, in order to call makeRequest function
var mr = require(‘./make_request.js’); // we saying to look for make_request.js file under the same directory.

mr.makeRequest(“Here is what I am looking for.”);



Socket IO to build a Chat application

In a traditional http server, you cannot send and receive the messages at the same time. 
WebSockets send and receive the messages at the same time, which is implemented through a technique called full duplex communication.
Websockets a pretty new technology on the client side. We will need this kind of communication to be supported on new browsers and legacy browsers. This is where socket.io comes in action, where it abstracts webscokets with fallbacks.

sudo npm install -g socket.io

#app.sj
var socket = require(’socket.io’);
var app = express.createServer();
var io = socket.listen(app);

io.sockets.on(‘connection’, function(client){
console.log(‘Client connected…’);

//Sending messages to Client
client.emit(‘messages’, {hello:’world’});

// Broadcasting messages to other clients/subscribers — To test this open 2 different browsers and send messages from one of the client to see if you’ve received the messages on the other browser clients.
client.on(‘messages’,function(data){
client.broadcast.emit(‘messages’,data);
});


});

#index.html
<script src=“/socket.io/socket.io.js”></script>
<script>
var server = io.connect(‘http://localhost:8080');
server.on(‘messages’, function(data){
alert(data.hello); // Output : world

//Listening to all broadcasted messages
insertMessagesToClients(data);
});

//Sending messages to Server

$(‘#chat_form’).submit(function(e){
var message = $(‘#chat_input’).val();
//emit messages event on the server
socket.emit(‘messages’,message);
});
</script>

Resources:

https://github.com/nodejs/node/blob/master/doc/guides/timers-in-node.md
https://github.com/nodejs/node/blob/master/doc/guides/writing_tests.md
https://github.com/nodejs/node/blob/master/doc/topics/event-loop-timers-and-nexttick.md
https://github.com/nodejs/node/blob/master/doc/topics/blocking-vs-non-blocking.md

https://github.com/nodejs/node/tree/master/doc/api

Debugging NodeJS with node-inspector

https://github.com/node-inspector/node-inspector

	

