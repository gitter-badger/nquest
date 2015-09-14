# nquest

[![Join the chat at https://gitter.im/wangchi/nquest](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/wangchi/nquest?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Node http request helper for get, post, put and so on.

## Methods

**nquest( opts, callback )**

The argument `opts` example:
```
{
  method: 'GET', // default
  url: 'http://localhost/test',
  data: {
    "test": "hello"
  }
}
```

**nquest.get( url, data, callback )**

Simple to use nquest when method is equre to `GET`.

**nquest.post( url, data, callback )**

Simple to use nquest when method is equre to `POST`.

## Install

You should install [`Node.js`](https://nodejs.org/en/) first.

```
npm install nquest --save
```

## Use and Examples

**nquest( options, callback )**
```
var nquest = require('nquest');

var testConfig1 = {
  url: 'http://127.0.0.1:3000/nquestGetTest?a=1&b=2',
  data: {
    username: 'abc',
    age: 18
  }
};

var testConfig2 = {
  method: 'POST',
  url: 'http://127.0.0.1:3000/nquestPostTest?a=1&b=2',
  data: {
    username: 'cde',
    age: 18
  }
};

nquest(testConfig1, function ( res ) {
  console.log('get');
  console.log( JSON.parse(res) );
});

nquest(testConfig2, function ( res ) {
  console.log('post');
  console.log( JSON.parse(res) );
});
```

**nquest.get( url, data, callback )**
```
var nquest = require('nquest');

nquest.get( 'http://127.0.0.1:3000/nquestGetTest', {
  username: 'abc',
  age: 18
}, function ( res ) {
  console.log( JSON.parse(res) );
});
```

**nquest.post( url, data, callback )**
```
var nquest = require('nquest');

nquest.post( 'http://127.0.0.1:3000/nquestPostTest', {
  username: 'abc',
  age: 17
}, function ( res ) {
  console.log( JSON.parse(res) );
});
```

MIT License