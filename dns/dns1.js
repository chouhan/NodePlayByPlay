/**
 * Created by rakeshchouhan on 10/16/16.
 */
'use strict';

var dns = require('dns');

var semver = require('semver');
var chalk = require('chalk');

var HOSTNAME = 'google.com';

var options;
var pre_0_12 = semver.lt(process.version, '0.12.0');
/*
 1) Functions that use the underlying operating system facilities to perform name resolution, and that do not necessarily do any network communication. This category contains only one function: dns.lookup. Developers looking to perform name resolution in the same way that other applications on the same operating system behave should use dns.lookup.
 */

options = pre_0_12 ? 4 : {// in Node before 0.12 this parameter holds family
    //family: 4, // 6
    //hints: dns.ADDRCONFIG | dns.V4MAPPED, // getaddrinfo flags
    all: false
};
/*
 dns.ADDRCONFIG: Returned address types are determined by the types of addresses supported by the current system. For example, IPv4 addresses are only returned if the current system has at least one IPv4 address configured. Loopback addresses are not considered.
 dns.V4MAPPED: If the IPv6 family was specified, but no IPv6 addresses were found, then return IPv4 mapped IPv6 addresses. Note that it is not supported on some operating systems (e.g FreeBSD 10.1).
 */
dns.lookup(HOSTNAME, options, function (err, address, family) {
    if (err) {
        console.log(chalk.red('* dns.lookup(\'%s\', %j): err: %j'), HOSTNAME, options, err);
        return;
    }
    console.log('* dns.lookup(\'%s\', %j): address: %j; family: %d', HOSTNAME, options, address, family);
});

options = pre_0_12 ? 4 : {// in Node before 0.12 this parameter holds family
    //family: 4, // 6
    //hints: dns.ADDRCONFIG | dns.V4MAPPED, // getaddrinfo flags
    all: true
};
dns.lookup(HOSTNAME, options, function (err, addresses) {
    if (err) {
        console.log(chalk.red('* dns.lookup(\'%s\', %j): err: %j'), HOSTNAME, options, err);
        return;
    }
    console.log('* dns.lookup(\'%s\', %j): addresses: %j', HOSTNAME, options, addresses);
});

/*
 2) Functions that connect to an actual DNS server to perform name resolution, and that always use the network to perform DNS queries. This category contains all functions in the dns module but dns.lookup. These functions do not use the same set of configuration files than what dns.lookup uses. For instance, they do not use the configuration from /etc/hosts. These functions should be used by developers who do not want to use the underlying operating system's facilities for name resolution, and instead want to always perform DNS queries.
 */
if (typeof dns.lookupService === 'function') {
    var ADDRESS = '127.0.0.1',
        PORT = 80;
    dns.lookupService(ADDRESS, PORT, function (err, hostname, service) {
        if (err) {
            console.log(chalk.red('* dns.lookupService(\'%s\'): err: %j'), ADDRESS, err);
            return;
        }
        console.log('* dns.lookupService(\'%s\', %n):  hostname: %j; service: %j', ADDRESS, PORT, hostname, service);
    });
} else {
    console.log(chalk.red('* dns.lookupService(): not supported in this Node version'));
}

var recordType = 'A';
dns.resolve(HOSTNAME, recordType, function (err, rec) {
    if (err) {
        console.log(chalk.red('* dns.resolve(\'%s\'): err: %j'), HOSTNAME, err);
        return;
    }
    console.log('* dns.resolve(\'%s\', \'%s\'): rec: %j', HOSTNAME, recordType, rec);
});

dns.resolve4(HOSTNAME, function (err, rec) {
    if (err) {
        console.log(chalk.red('* dns.resolve4(\'%s\'): err: %j'), HOSTNAME, err);
        return;
    }
    console.log('* dns.resolve4(\'%s\'): rec: %j', HOSTNAME, rec);
});

dns.resolve6(HOSTNAME, function (err, rec) {
    if (err) {
        console.log(chalk.red('* dns.resolve6(\'%s\'): err: %j'), HOSTNAME, err);
        return;
    }
    console.log('* dns.resolve6(\'%s\'): rec: %j', HOSTNAME, rec);
});

dns.resolveMx(HOSTNAME, function (err, rec) {
    if (err) {
        console.log(chalk.red('* dns.resolveMx(\'%s\'): err: %j'), HOSTNAME, err);
        return;
    }
    console.log('* dns.resolveMx(\'%s\'): rec: %j', HOSTNAME, rec);
});

dns.resolveTxt(HOSTNAME, function (err, rec) {
    if (err) {
        console.log(chalk.red('* dns.resolveTxt(\'%s\'): err: %j'), HOSTNAME, err);
        return;
    }
    console.log('* dns.resolveTxt(\'%s\'): rec: %j', HOSTNAME, rec);
});

dns.resolveSrv(HOSTNAME, function (err, rec) {
    if (err) {
        console.log(chalk.red('* dns.resolveSrv(\'%s\'): err: %j'), HOSTNAME, err);
        return;
    }
    console.log('* dns.resolveSrv(\'%s\'): rec: %j', HOSTNAME, rec);
});

if (!pre_0_12) {
    dns.resolveSoa(HOSTNAME, function (err, rec) {
        if (err) {
            console.log(chalk.red('* dns.resolveSoa(\'%s\'): err: %j'), HOSTNAME, err);
            return;
        }
        console.log('* dns.resolveSoa(\'%s\'): rec: %j', HOSTNAME, rec);
    });
}

dns.resolveNs(HOSTNAME, function (err, rec) {
    if (err) {
        console.log(chalk.red('* dns.resolveNs(\'%s\'): err: %j'), HOSTNAME, err);
        return;
    }
    console.log('* dns.resolveNs(\'%s\'): rec: %j', HOSTNAME, rec);
});

dns.resolveCname(HOSTNAME, function (err, rec) {
    if (err) {
        console.log(chalk.red('* dns.resolveCname(\'%s\'): err: %j'), HOSTNAME, err);
        return;
    }
    console.log('* dns.resolveCname(\'%s\'): rec: %j', HOSTNAME, rec);
});

var IP = '5.255.255.5';

dns.reverse(IP, function (err, rec) {
    if (err) {
        console.log(chalk.red('* dns.reverse(\'%s\'): err: %j'), IP, err);
        return;
    }
    console.log('* dns.reverse(\'%s\'): rec: %j', IP, rec);
});

if (typeof dns.getServers === 'function') {
    var servers;
    servers = dns.getServers();
    console.log('* dns.getServers(): servers: %j', servers);
} else {
    console.log(chalk.red('* dns.getServers(): not supported by this Node version'));
}

if (typeof dns.setServers === 'function') {
// There is a bug in dns.setServers
// It may be called only when other methods cleaned up
    /*
     node: ../deps/cares/src/ares_destroy.c:102: ares__destroy_servers_state: Assertion `ares__is_list_empty(&server->queries_to_server)' failed.

     bug reports:
     https://github.com/nodejs/node/issues/894
     https://github.com/nodejs/node-v0.x-archive/issues/9243
     */
    var setServersDelay = 3; // seconds
    console.log('delay for ' + setServersDelay + 's as workaround for dns.setServers()');
    setTimeout(
        function () {
            var serversToSet = [
                '8.8.8.8', '8.8.4.4',   // Google Public DNS
                '77.88.8.8', '77.88.8.1', // Yandex Basic
                //'77.88.8.88', '77.88.8.2', // Yandex Safe
                //'77.88.8.7',  '77.88.8.3', // Yandex Family
            ];
            dns.setServers(serversToSet);

            var newServers = dns.getServers();
            console.log('* dns.getServers(%j): newServers: %j', serversToSet, newServers);

        }, setServersDelay * 1000
    );
} else {
    console.log(chalk.red('* dns.setServers(): not supported by this Node version'));
}
