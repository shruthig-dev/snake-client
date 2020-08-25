// play.js
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
let obj = connect();

setupInput(obj);

  