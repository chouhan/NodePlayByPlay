/**
 * Created by rakeshchouhan on 10/23/16.
 */
/*
Node.js Crypto

The Node.js Crypto module supports cryptography.

It provides cryptographic functionality that includes a set of wrappers for open SSL's hash HMAC, cipher, decipher, sign and verify functions.
*/

// get the crypto library
const crypto = require('crypto'); // sudo npm install crypto --prefix crypto

// Some secret code
const secret = 'abcdefg';
// get hash of the secret based on the some algorithm
const hash = crypto.createHmac('sha256', secret)
    .update('Welcome to crypto')
    .digest('hex');

console.log('hash : ' + hash); //hash : c83f02a53459dfe5444a97a283e0efa16121e5789e0fefa70a0bcc1b96d987d1
