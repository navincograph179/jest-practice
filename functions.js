const axios = require('axios')

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull : () => null,
  checkValue : a => a,

  createUser: () => {
    const user = { firstName: 'Navin' };
    user['lastName'] = 'Gurung';
    return user;
  },
  fetchUser : () => axios.get('https://jsonplaceholder.typicode.com/users/1').then(res => res.data)
  .catch(err => 'error' )
}

//module.exports = sum, is sum function is exported for sum.test.js
module.exports = functions;