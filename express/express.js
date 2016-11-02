/**
 * Created by rakeshchouhan on 10/30/16.
 */
const express = require('express');
var app = express();

app.get('/', (req, res) => {
    console.log('URL is : ' + req.url);
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Express App listening on port 3000!');
});