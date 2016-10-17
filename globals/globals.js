/**
 * Created by rakeshchouhan on 10/16/16.
 */

/*
 Node.js global objects are global in nature and available in all modules. You don't need to include these objects in your application; rather they can be used directly. These objects are modules, functions, strings and object etc. Some of these objects aren't actually in the global scope but in the module scope.

 A list of Node.js global objects are given below:

 __dirname
 __filename
 console
 process
 Class: Buffer
 exports
 global // Something that is defined as a global variable
 module
 require()
 require.cache
 require.extensions
 require.resolve()
 setImmediate(callback[, arg][, ...])
 setInterval(callback, delay[, arg][, ...])
 setTimeout(callback, delay[, arg][, ...])
 clearImmediate(immediateObject)
 clearInterval(intervalObject)
 clearTimeout(timeoutObject)

 */
console.log("\nCurrent Directory: " + __dirname);  // Output: Current Directory: /Users/rakeshchouhan/WebstormProjects/NodePlayByPlay/globals
console.log("\nCurrent File: " + __filename);  // Output: Current Directory: /Users/rakeshchouhan/WebstormProjects/NodePlayByPlay/globals/globals.js
console.log("\nConsole Object: " + console); // Output :  Console Object: [object Object]
/*
 Console Object has the following properties:
 assert
 clear
 constructor
 count
 debug
 dir
 dirxml
 error
 group
 groupCollapsed
 groupEnd
 hasOwnProperty
 info
 isPrototypeOf
 lo
 markTimeline
 memory
 profile
 profileEnd
 propertyIsEnumerable
 table
 time
 timeEnd
 timeStamp
 timeline
 timelineEnd
 toLocaleString
 toString
 trace
 valueOf
 warn
 */
console.log("\nProcess Object: " + process); // Output :  Console Object: [object Object]

// global -- Something that is defined as a global variable
var x = 10; // x is a global variable
console.log("variable x is defined as a global variable and can be accessed from different places, and the value of x is: " + x);