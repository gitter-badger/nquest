var nquest = require('../index');

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