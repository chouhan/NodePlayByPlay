/**
 * Created by rakeshchouhan on 10/16/16.
 */
const dns = require('dns');

//getServers()
console.log("dns.getServers(): " + dns.getServers());

//setServers()
console.log("dns.setServers(): " + dns.setServers(['192.168.1.255'])); // Takes in the array of servers

//getServers()
console.log("dns.getServers(): " + dns.getServers());

//lookup()
console.log("dns.lookup(): " + dns.lookup('www.rakeshchouhan.com', (err, addresses, family) => {
    if(err)
    new Error('\nCannot lookup the provided address');
    console.log('addresses: ' + addresses);
    console.log('family: ' + family);
}))

//104.37.35.95: 443
//127.0.0.1 : 22
console.log("dns.lookupService(): " + dns.lookupService('104.37.35.95', 443, (err, hostname, service) => {
        if(err) throw err;
    console.log("hostname: " + hostname);
    console.log("service: " + service);
}))