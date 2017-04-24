/**
 * Created by rakeshchouhan on 4/6/17.
 */
const fs = require('fs');

// fs.access(file, mode, callback)
/*

 Tests a user's permissions for the file or directory specified by path. The mode argument is an optional integer that specifies the accessibility checks to be performed. The following constants define the possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values.

 fs.constants.F_OK - path is visible to the calling process. This is useful for determining if a file exists, but says nothing about rwx permissions. Default if no mode is specified.
 fs.constants.R_OK - path can be read by the calling process.
 fs.constants.W_OK - path can be written by the calling process.
 fs.constants.X_OK - path can be executed by the calling process. This has no effect on Windows (will behave like fs.constants.F_OK).

*/
fs.access('../data/testFile.txt', fs.constants.R_OK | fs.constants.W_OK, (err) => {
    console.log(err ? 'no access!' : 'can read/write');
});