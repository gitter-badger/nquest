var nquest = require('../index');

var testConfig1 = {
  url: 'http://127.0.0.1:3000/nquestGetTest?a=1&b=2',
  data: {
    username: '张三',
    age: 18
  }
};

var testConfig2 = {
  method: 'POST',
  url: 'http://127.0.0.1:3000/nquestPostTest?a=1&b=2',
  data: {
    username: '张三',
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