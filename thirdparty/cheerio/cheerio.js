/**
 * Created by rakeshchouhan on 11/14/16.
 */
/*
Parsing the HTML

Well, that's a complex thing. Other people did that for us already. I like very much the cheerio module. ' +
'It provides a jQuery-like interface to interact with a piece of HTML you already have.*/

const parseHtml = require('cheerio');

//parse html

var $ = parseHtml.load("<h2 class='title'>Hello World</h2>");

console.log($("h2.title").text());