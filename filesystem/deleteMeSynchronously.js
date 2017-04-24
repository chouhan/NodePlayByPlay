/**
 * Created by rakeshchouhan on 4/6/17.
 */
const fs = require('fs');

fs.unlinkSync('../data/deleteMe2.txt');
console.log('successfully deleted ../../data/deleteMe2.txt');