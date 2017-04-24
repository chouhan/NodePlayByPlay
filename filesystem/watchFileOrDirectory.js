/**
 * Created by rakeshchouhan on 4/6/17.
 */
/**
 * fs.watch() listener emits 2 events:
 *
 *   change
 *      eventType <string> The type of fs change
        filename <string> | <Buffer> The filename that changed (if relevant/available)
 *
 *   error
 *
 *
 * */
const fs = require('fs');

// Example when handled through fs.watch listener
fs.watch('../data/testFile.txt', {encoding: 'buffer'}, (eventType, filename) => {
    if (filename)
        console.log(filename);
// Prints: <Buffer ...>
});

watcher.close()