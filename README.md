# nquest
Node http request helper for get, post, put and so on.

```
var nquest = require('../index');

console.log(nquest);
console.log(nquest.get());

var testConfig1 = {
  host: '127.0.0.1',
  port: '3000',
  path: '/nquestGetTest',
  data: {
    username: '张三',
    age: 18
  }
};

var testConfig2 = {
  method: 'POST',
  host: '127.0.0.1',
  port: '3000',
  path: '/nquestPostTest',
  data: {
    username: '张三',
    age: 18
  }
};

nquest(testConfig1, function ( res ) {
  console.log( JSON.parse(res) );
});
```

```
var nquest = require('../index');

nquest.get( '127.0.0.1', '3000', '/nquestGetTest', {
  username: '张三',
  age: 18
}, function ( res ) {
  console.log( JSON.parse(res) );
});
```

```
var nquest = require('../index');

nquest.post( '127.0.0.1', '3000', '/nquestPostTest', {
  username: '李四',
  age: 17
}, function ( res ) {
  console.log( JSON.parse(res) );
});
```