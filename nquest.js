/**
 * nquest core
 * @author  hiwangchi@gmail.com
 * https://github.com/wangchi/nquest
 * MIT
 */

'use strict';

var http        = require('http');
var querystring = require('querystring');
var url         = require('url');


function Nquest ( options, callback ) {

  var urlParse = url.parse(options.url);

  merge(options, {
    hostname : urlParse.hostname,
    port     : urlParse.port,
    path     : urlParse.path
  });

  var opts = merge({
    method   : 'GET',
    hostname : 'localhost',
    port     : '80',
    path     : '/',
    data     : ''
  }, options);

  requestCore( opts, callback, opts.data );
}

function nquest ( options, callback ) {
  return new Nquest( options, callback );
}

function requestCore ( options, callback ) {

  merge(options, {
    method: options.method.toLowerCase()
  });

  if ( options.method === 'get' ) {
    merge(options, {
      path: url.parse(options.path).pathname + '?' + querystring.stringify(options.data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } else if ( options.method === 'post' ) {
    merge(options, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }

  var request = http.request( options, function ( res ) {
    res.setEncoding('utf-8');

    var resData = '';

    res.on('data', function ( chunk ) {
      resData += chunk;
    });

    res.on('end', function () {
      callback&&callback( resData );
    });

  });

  request.on('error', function ( e ) {
    console.log( 'http.request() Error' + e.message );
  });

  if ( options.method === 'post' ) {
    request.write( querystring.stringify(options.data) );
  }

  request.end();
}

function merge ( defaults, options ) {
  for ( var key in options ) {
    defaults[key] = options[key];
  }
  return defaults;
}

nquest.get = function ( url, data, callback ) {
  nquest({
    url  : url,
    data : data
  }, callback);
};

nquest.post = function ( url, data, callback ) {
  nquest({
    method : 'POST',
    url    : url,
    data   : data
  }, callback);
};


module.exports = nquest;