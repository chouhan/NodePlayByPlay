**Node.js Timer functions are global functions**. You don't need to use require() function in order to use timer functions. Let's see the list of timer functions.

**Set timer functions:**

setImmediate(): It is used to execute setImmediate.
setInterval(): It is used to define a time interval.
setTimeout(): ()- It is used to execute a one-time callback after delay milliseconds.

**Clear timer functions:**

clearImmediate(immediateObject): It is used to stop an immediateObject, as created by setImmediate
clearInterval(intervalObject): It is used to stop an intervalObject, as created by setInterval
clearTimeout(timeoutObject): It prevents a timeoutObject, as created by setTimeout