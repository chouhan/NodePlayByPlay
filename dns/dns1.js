/**
 * Created by rakeshchouhan on 10/17/16.
 */
const dns = require('dns');

// www.rakeshchouhan.com  -- This website has a IP4 but there are no IPV6 enabled
//dns.resolve4()
console.log("dns.resolve4(): " + dns.resolve4('nodejs.org', (err, addresses) => {
        if(err) throw err;
        console.log('addresses IPV4: ' + addresses);

}))

//dns.resolve6()
console.log("dns.resolve6(): " + dns.resolve6('nodejs.org', (err, addresses) => {
        console.log("addresses IPV6: " + addresses);
}))

//dns.resolveCname() // Any website with {someName}.website.com
console.log("dns.resolveCname(): " + dns.resolveCname('chouhans.wordpress.com', (err, addresses) => {
        console.log("addresses with CNAME: " + addresses);
}))


//dns.resolveMx() // Any website with email exchange records // [{priority: 10, exchange: 'mx.example.com'}, ...]
console.log("dns.resolveMx(): " + dns.resolveMx('gmail.com', (err, res) => {
        for(var obj in res); {
            console.log("resolve with Mx: " + obj);
            //console.log("resolve with Mx: Priority: " + obj.priority + ", Exchange: " + obj.exchange);
        }
}))

/* Check NodeJS documentation on the rest of them
dns.resolveNs(hostname, callback)
dns.resolveSoa(hostname, callback)
dns.resolveSrv(hostname, callback)
dns.resolvePtr(hostname, callback)
dns.resolveTxt(hostname, callback)*/

//dns.reverse() // takes ip (of rakeshchouhan.com) and gives domain name
console.log("dns.reverse(): " + dns.reverse('104.37.35.95', (err, hostnames) => {
        console.log("reverse: " + hostnames);
    }
))