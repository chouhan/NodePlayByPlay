/**
 * Created by rakeshchouhan on 10/30/16.
 */
'use strict';
const express = require('express');
// var urls = require('./urls');
const parser = require('body-parser');
var app = express();
// var router = express.Router();

app.use(parser.urlencoded({extended: false}));
app.use(parser.json());

// app.use(express.Router());
var expressRoutes = require('./expressRouters')(/*urls, router,*/ app);
app.use('/', expressRoutes);

// catch 404 and forward error to handler
/*
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
*/

var nodeServer = app.listen(3000, () => {
        var host = nodeServer.address().address;
        var port = nodeServer.address().port;
    console.log('Express App listening at htt://%s:%s', host, port);
});