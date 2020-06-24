/**
 * Created by rakeshchouhan on 4/24/17.
 */
const elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client( {
    hosts: [
        'http://localhost:9301'
    ]
});

module.exports = client;