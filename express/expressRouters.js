/**
 * Created by rakeshchouhan on 10/30/16.
 */

var urls = require('./urls');
var router = require('express').Router();
var expressRoutes = function(/*urls, router,*/ app){

    // var appRouter = router,
    //    var urls = urls;
    //console.log(urls.config.rootcontext);

    /* Using app*/
    app.get(urls.operations.main, (req, res) => {
        res.send('Welcome to Express Routes <br><br> Here are the available express routes <br><br>' +
            '<a href="/getUser">Get User</a> <br>' +
            '<a href="/updateUser">Post(Update) User</a> <br>' +
            '<a href="/addUser">Add(Put) User</a> <br>' +
            '<a href="/deleteUser">Delete User</a>'
        );
    });
    
    app.get(urls.operations.getUserURL, (req, res) => {
        res.json(['Rakesh', 'Chouhan']);
    });

    router.post(urls.operations.postUserURL, (req, res, next) => {
        res.send('Got request for Post data');
        next();
    });

    router.put(urls.operations.putUserURL, (req, res, next) => {
        res.send('Got request for Put data');
        next();
    });

    router.delete(urls.operations.deleteUserURL, (req, res, next) => {
        res.send('Got request for Delete data');
        next();
    });
    
    // Respond with Hello World! on the homepage:

    /*appRouter.route(urls.operations.getUserURL)
        .get((req, res) => {
            res.send('Got a GET request at ' + urls.operations.getUserURL);
        });

    // Respond to POST request on the root route (/), the application’s home page:

    appRouter.route(urls.operations.postUserURL)
        .post((req, res) => {
            res.send('Got a POST request at ' + urls.operations.postUserURL);
        });

    // Respond to a PUT request to the /user route:

    appRouter.route(urls.operations.putUserURL)
        .put((req, res) => {
            res.send('Got a PUT request at ' + urls.operations.putUserURL);
        });

    //Respond to a DELETE request to the /user route:

    appRouter.route(urls.operations.deleteUserURL)
        .delete((req, res) => {
            res.send('Got a DELETE request at ' + urls.operations.deleteUserURL);
        });*/
    
    return expressRoutes;
};

module.exports = expressRoutes;