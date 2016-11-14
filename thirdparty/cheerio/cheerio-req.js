/**
 * Created by rakeshchouhan on 11/14/16.
 */
const cheerioReq = require('cheerio-req');

cheerioReq('http://rakeshchouhan.com', (err, $) => {
   // console.log("Received Response: " + res); 
   console.log($("h1").text());
});