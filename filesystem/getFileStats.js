/**
 * Created by rakeshchouhan on 4/6/17.
 */
const fs = require('fs');

fs.stat('../data/testFile.txt', (err, stats) => {
   if(err) throw err;
   //console.log(stats);
    console.log(`stats: ${JSON.stringify(stats)}`);
});