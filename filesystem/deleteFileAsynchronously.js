/**
 * Created by rakeshchouhan on 4/6/17.
 */
const fs = require('fs');

fs.unlink('../data/deleteMe1.txt', (err) => {
    if (err) throw err;
    console.log('successfully deleted ../../data/deleteMe1.txt');
});