/**
 * Created by rakeshchouhan on 10/23/16.
 */

/**
 * Produces a new collection of values by mapping each value in `coll` through
 * the `iteratee` function. The `iteratee` is called with an item from `coll`
 * and a callback for when it has finished processing. Each of these callback
 * takes 2 arguments: an `error`, and the transformed item from `coll`. If
 * `iteratee` passes an error to its callback, the main `callback` (for the
 * `map` function) is immediately called with the error.
 *
 * Note, that since this function applies the `iteratee` to each item in
 * parallel, there is no guarantee that the `iteratee` functions will complete
 * in order. However, the results array will be in the same order as the
 * original `coll`.
 *
 * If `map` is passed an Object, the results will be an Array.  The results
 * will roughly be in the order of the original Objects' keys (but this can
 * vary across JavaScript engines)
 *
 * @name map
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - A function to apply to each item in `coll`.
 * The iteratee is passed a `callback(err, transformed)` which must be called
 * once it has completed with an error (which can be `null`) and a
 * transformed item. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an Array of the
 * transformed items from the `coll`. Invoked with (err, results).
 * @example
 *
 * async.map(['file1','file2','file3'], fs.stat, function(err, results) {
 *     // results is now an array of stats for each file
 * });
 */
const async = require('async');
const fs = require('fs');

// Array of services to be called in asynchronous sequence. So Service 1 gets called and Service 1 does not wait/hold for its result.
// Right after service 1 is called Service 2 to be called.
// Both Service 1 and Service 2 can return the result at a later point of time.
/*var array = ['1', '2'];

async.map(array, getInfo, (err, res) => {
    console.log('res : ' +res);
});

function getInfo(name, callback){
    console.log('name : ' + name);
 //There's no true asynchronous code here, so use setTimeout
 //to prove we've really got it right
    setTimeout(() => {
       callback(null, name + ' new');
        console.log('name : ' + name);
    }, 5000);
}*/

/*async.map([1,2,3,4,5], addOne, function(err, results) {
     // results is now an array of stats for each file
    debugger;
    // console.log('Files Stats : ' + fs);
    console.log("map completed. Error: ", err, " result: ", results);
});

//This is your async worker function
//It takes the item first and the callback second
function addOne(number, callback){
    //There's no true asynchronous code here, so use process.nextTick
    //to prove we've really got it right
    process.nextTick(function () {
        //the callback's first argument is an error, which must be null
        //for success, then the value you want to yield as a result
        callback(null, ++number);
    });
}*/

async.map(['/Users/rakeshchouhan/WebstormProjects/NodePlayByPlay/data/testFile.txt',
     '/Users/rakeshchouhan/WebstormProjects/NodePlayByPlay/data/testFile1.txt',
     '/Users/rakeshchouhan/WebstormProjects/NodePlayByPlay/data/testFile2.txt'], fs.stat, function(err, results) {
        // results is now an array of stats for each file
        // debugger;
        console.log('Files Stats : ' + results);
});