/**
 * Created by rakeshchouhan on 10/16/16.
 */
/*Node.js OS provides some basic operating-system related utility functions. Let's see the list generally used functions or methods.

 Index	    Method	            Description
 1.	    os.arch()	            This method is used to fetch the operating system CPU architecture.
 2.      os.cpus()               This method is used to fetch an array of objects containing information about each cpu/core installed: model, speed (in MHz), and times (an object containing the number of milliseconds the cpu/core spent in: user, nice, sys, idle, and irq).
 3.	    os.endianness()	        This method returns the endianness of the cpu. Its possible values are 'BE' for big endian or 'LE' for little endian.
 4.	    os.freemem()	        This methods returns the amount of free system memory in bytes.
 5.	    os.homedir()	        This method returns the home directory of the current user.
 6.      os.hostname()           This method is used to returns the hostname of the operating system.
 7.	    os.loadavg()	        This method returns an array containing the 1, 5, and 15 minute load averages. The load average is a time fraction taken by system activity, calculated by the operating system and expressed as a fractional number.
 8.	    os.networkinterfaces()	This method returns a list of network interfaces.
 9.	    os.platform()	        This method returns the operating system platform of the running computer i.e.'darwin', 'win32','freebsd', 'linux', 'sunos' etc.
 10.	    os.release()	        This method returns the operating system release.
 11.	    os.tmpdir()	            This method returns the operating system's default directory for temporary files.
 12.	    os.totalmem()	        This method returns the total amount of system memory in bytes.
 13.	    os.type()	            This method returns the operating system name. For example 'linux' on linux, 'darwin' on os x and 'windows_nt' on windows.
 14.	    os.uptime()	            This method returns the system uptime in seconds.
 15.	    os.userinfo([options])	This method returns a subset of the password file entry for the current effective user.

 */
const os = require('os');
console.log("\n os.freemem():", os.freemem());
console.log("\n os.homedir():", os.homedir());
console.log("\n os.endianness():", os.endianness());
console.log("\n os.hostname():", os.hostname());
console.log("\n os.loadavg():", os.loadavg());
console.log("\n os.platform():", os.platform());
console.log("\n os.release():", os.release());
console.log("\n os.tmpdir():", os.tmpdir());
console.log("\n os.totalmem():", os.totalmem());
console.log("\n os.type():", os.type());
console.log("\n os.uptime():", os.uptime());
console.log("\n os.cpus():", os.cpus());
console.log("\n os.arch():", os.arch());
//console.log("\n os.userinfo():", os.userinfo([username])); // Need to check on this
console.log("\n os.networkInterfaces():", os.networkInterfaces());
/*
 OUTPUT:

 Chouhan:NodePlayByPlay rakeshchouhan$ node operatingsystem/os.js

 os.freemem(): 3796180992

 os.homedir(): /Users/rakeshchouhan

 os.endianness(): LE

 os.hostname(): Chouhan

 os.loadavg(): [ 1.9970703125, 1.7021484375, 1.52587890625 ]

 os.platform(): darwin

 os.release(): 15.6.0

 os.tmpdir(): /var/folders/0z/4qv0rwv56ksb4r_90xm__2rr0000gn/T

 os.totalmem(): 17179869184

 os.type(): Darwin

 os.uptime(): 585333

 os.cpus(): [
    {
       "model": "Intel(R) Core(TM) i7-3820QM CPU @ 2.70GHz",
       "speed": 2700,
       "times": {
          "user": 15939710,
          "nice": 0,
          "sys": 21622110,
          "idle": 163965270,
          "irq": 0
       }
    },
    {
       "model": "Intel(R) Core(TM) i7-3820QM CPU @ 2.70GHz",
       "speed": 2700,
       "times": {
          "user": 2045480,
          "nice": 0,
          "sys": 995790,
          "idle": 198481200,
          "irq": 0
       }
    },
    {
       "model": "Intel(R) Core(TM) i7-3820QM CPU @ 2.70GHz",
       "speed": 2700,
       "times": {
          "user": 13147530,
          "nice": 0,
          "sys": 8202820,
          "idle": 180172320,
          "irq": 0
       }
    },
    {
       "model": "Intel(R) Core(TM) i7-3820QM CPU @ 2.70GHz",
       "speed": 2700,
       "times": {
          "user": 2093670,
          "nice": 0,
          "sys": 1128890,
          "idle": 198299860,
          "irq": 0
       }
    },
    {
       "model": "Intel(R) Core(TM) i7-3820QM CPU @ 2.70GHz",
       "speed": 2700,
       "times": {
          "user": 12935670,
          "nice": 0,
          "sys": 7325100,
          "idle": 181261830,
          "irq": 0
       }
    },
    {
       "model": "Intel(R) Core(TM) i7-3820QM CPU @ 2.70GHz",
       "speed": 2700,
       "times": {
          "user": 2107940,
          "nice": 0,
          "sys": 1130300,
          "idle": 198284130,
          "irq": 0
       }
    },
    {
       "model": "Intel(R) Core(TM) i7-3820QM CPU @ 2.70GHz",
       "speed": 2700,
       "times": {
          "user": 12935580,
          "nice": 0,
          "sys": 6991640,
          "idle": 181595310,
          "irq": 0
       }
    },
    {
       "model": "Intel(R) Core(TM) i7-3820QM CPU @ 2.70GHz",
       "speed": 2700,
       "times": {
          "user": 2115100,
          "nice": 0,
          "sys": 1130650,
          "idle": 198276560,
          "irq": 0
       }
    }
 ]

 os.arch(): x64

 os.networkInterfaces(): {
    "lo0": [
       {
          "address": "::1",
          "netmask": "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff",
          "family": "IPv6",
          "mac": "00:00:00:00:00:00",
          "scopeid": 0,
          "internal": true
       },
       {
          "address": "127.0.0.1",
          "netmask": "255.0.0.0",
          "family": "IPv4",
          "mac": "00:00:00:00:00:00",
          "internal": true
       },
       {
          "address": "fe80::1",
          "netmask": "ffff:ffff:ffff:ffff::",
          "family": "IPv6",
          "mac": "00:00:00:00:00:00",
          "scopeid": 1,
          "internal": true
       }
    ],
    "en0": [
       {
          "address": "fe80::1610:9fff:fed5:df1d",
          "netmask": "ffff:ffff:ffff:ffff::",
          "family": "IPv6",
          "mac": "14:10:9f:d5:df:1d",
          "scopeid": 4,
          "internal": false
       },
       {
          "address": "192.168.1.86",
          "netmask": "255.255.255.0",
          "family": "IPv4",
          "mac": "14:10:9f:d5:df:1d",
          "internal": false
       },
       {
          "address": "2602:304:ae4e:b219:1610:9fff:fed5:df1d",
          "netmask": "ffff:ffff:ffff:ffff::",
          "family": "IPv6",
          "mac": "14:10:9f:d5:df:1d",
          "scopeid": 0,
          "internal": false
       },
       {
          "address": "2602:304:ae4e:b219:e822:62fd:25bb:2640",
          "netmask": "ffff:ffff:ffff:ffff::",
          "family": "IPv6",
          "mac": "14:10:9f:d5:df:1d",
          "scopeid": 0,
          "internal": false
       }
    ],
    "awdl0": [
       {
          "address": "fe80::9862:59ff:fe43:dc5f",
          "netmask": "ffff:ffff:ffff:ffff::",
          "family": "IPv6",
          "mac": "9a:62:59:43:dc:5f",
          "scopeid": 8,
          "internal": false
       }
    ],
    "utun0": [
       {
          "address": "fe80::f172:b7e3:fa63:e2e0",
          "netmask": "ffff:ffff:ffff:ffff::",
          "family": "IPv6",
          "mac": "00:00:00:00:00:00",
          "scopeid": 12,
          "internal": false
       }
    ]
 }

 */
