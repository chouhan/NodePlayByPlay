/**
 * Created by rakeshchouhan on 10/17/16.
 */
const dns = require('dns');

//dns.resolve(hostname[, rrtype], callback)
/*
 Valid values for rrtype are: //Note

 'A' - IPV4 addresses, default
 'AAAA' - IPV6 addresses
 'MX' - mail exchange records
 'TXT' - text records
 'SRV' - SRV records
 'PTR' - PTR records
 'NS' - name server records
 'CNAME' - canonical name records
 'SOA' - start of authority record
 'NAPTR' - name authority pointer record
 */



var HOSTNAME = 'google.com'; // 'nodejs.org'

// NOTE: ONLY RRTYPE 'A' GIVES THE OUTPUT. ALL OTHERS THROW ERRORS
console.log("dns.resolve(): " + dns.resolve('www.rakeshchouhan.com', 'A', (err, addresses) => {
    if(err) throw err;
    console.log("addresses: " + addresses);
}))
