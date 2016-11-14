/**
 * Created by rakeshchouhan on 11/14/16.
 */
"use strict"

// Import the dependencies
const cheerio = require("cheerio"), 
    req = require("tinyreq");

// Define the scrape function
function scrape(url, data, cb) {
    // 1. Create the request
    req(url, (err, body) => {
        if (err) { return cb(err); }

        // 2. Parse the HTML
        let $ = cheerio.load(body)
        , pageData = {}
    ;

    // 3. Extract the data
    Object.keys(data).forEach(k => {
        pageData[k] = $(data[k]).text();
});

    // Send the data in the callback
    cb(null, pageData);
});
}

// Extract some data from my website
scrape("http://rakeshchouhan.com", {
    // Get the website title (from the top header)
    title: "h1"
    // ...and the description
    , description: "h2"
}, (err, data) => {
    console.log(err || data);
});
