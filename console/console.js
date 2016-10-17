/**
 * Created by rakeshchouhan on 10/16/16.
 */
/*The Node.js console module provides a simple debugging console similar to JavaScript console mechanism provided by web browsers.

 There are three console methods that are used to write any node.js stream:

 console.log()
 console.error()
 console.warn()*/
//The console.log() function is used to display simple message on console.
console.log('\nPlain Old Console.log: Hello Rakesh Chouhan');
console.log('\nConsole.log with String format specifier: Hello %s', 'Rakesh Chouhan\n');

//The console.error() function is used to render error message on console.
console.error(new Error('\nConsole Error: Hell! This is a wrong method.'));

//The console.warn() function is used to display warning message on console.
const name = 'Rakesh Chouhan';

// look at the back tics `
// ES6 feature to replace Strings (aka String Interpolation)
console.warn(`\nConsole Warn: Don't mess with ${name}! \n`);