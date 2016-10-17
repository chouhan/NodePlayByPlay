/**
 * Created by rakeshchouhan on 10/16/16.
 */
const fs = require('fs');
function nodeStyleCallback(err, data) {
    if (err) {
        console.error('There was an error', err);
        return;
    }
    console.log(data);
}

fs.readFile('/Users/rakeshchouhan/WebstormProjects/NodePlayByPlay/data/testFile', nodeStyleCallback);
fs.readFile('/Users/rakeshchouhan/WebstormProjects/NodePlayByPlay/data/testFile', nodeStyleCallback);

/*
 // The one without errors
 fs.readFile('/Users/rakeshchouhan/WebstormProjects/NodePlayByPlay/data/testFile.txt', nodeStyleCallback);
 fs.readFile('/Users/rakeshchouhan/WebstormProjects/NodePlayByPlay/data/testFile.txt', nodeStyleCallback);
 */
