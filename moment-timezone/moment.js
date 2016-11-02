/**
 * Created by rakeshchouhan on 10/29/16.
 */
var moment = require('moment-timezone');
var date = moment().tz('America/Los_Angeles').format();
console.log(date);