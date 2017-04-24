/**
 * Created by rakeshchouhan on 4/6/17.
 */
const fs = require('fs');

fs.rename('../data/renameMe.txt', '../data/renamed.txt', (err) => {
   if(err) throw err;
    console.log('successfully renamed  file ../data/renameMe.txt to ../data/renamed.txt');
});