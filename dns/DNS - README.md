Node.js DNS

The Node.js DNS module contains methods to get information of given hostname. Let's see the list of commonly used DNS functions:

dns.getServers()
dns.setServers(servers)
dns.lookup(hostname[, options], callback)
dns.lookupService(address, port, callback)
dns.resolve(hostname[, rrtype], callback)
dns.resolve4(hostname, callback)
dns.resolve6(hostname, callback)
dns.resolveCname(hostname, callback)
dns.resolveMx(hostname, callback)
dns.resolveNs(hostname, callback)
dns.resolveSoa(hostname, callback)
dns.resolveSrv(hostname, callback)
dns.resolvePtr(hostname, callback)
dns.resolveTxt(hostname, callback)
dns.reverse(ip, callback)