var url = require('url');

var urltest1 = 'http://127.0.0.1:3000/nquestGetTest?a=1&b=2';

console.log( url.parse(urltest1) );