var nquest = require('../index');

nquest.get( '127.0.0.1', '3000', '/nquestGetTest', {
  username: '张三',
  age: 18
}, function ( res ) {
  console.log( JSON.parse(res) );
});