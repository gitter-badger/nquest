var nquest = require('../index');

nquest.post( 'http://127.0.0.1:3000/nquestPostTest', {
  username: '李四',
  age: 17
}, function ( res ) {
  console.log( JSON.parse(res) );
});