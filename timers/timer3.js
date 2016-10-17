/**
 * Created by rakeshchouhan on 10/16/16.
 */
function welcome1() {
    console.log("Rakesh");
}
function welcome2() {
    console.log("Chouhan");
}
function welcome3() {
    console.log("Welcome Rakesh Chouhan");
}
var id1 = setTimeout(welcome1, 1000);
var id2 = setInterval(welcome2, 1000);
var id3 = setImmediate(welcome3, 5000);
//clearTimeout(id1);
//clearInterval(id2);
clearImmediate(id3);