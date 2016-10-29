/**
 * Created by rakeshchouhan on 10/23/16.
 */
const crypto = require('crypto');

// Create cipher
const cipher = crypto.createCipher('aes192', 'some password here');
// Pass the text to encrypt
var textToEncrypt = 'Hello Rakesh Chouhan';
var encrypted = cipher.update(textToEncrypt, 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log('encrypted : ' + encrypted); //encrypted : 6b2042db8bcfce1acbc84ed0e966ee52aa7bff4903ab66fe3776f3cc43dc2d8f

// Create decipher

const decipher = crypto.createDecipher('aes192', 'some password here');
var encrypted = '6b2042db8bcfce1acbc84ed0e966ee52aa7bff4903ab66fe3776f3cc43dc2d8f';
var decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('decrypted  : ' + decrypted);