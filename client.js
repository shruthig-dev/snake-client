const net = require('net');
const { IP, PORT,INITIAL } = require('./constants');

/**
 * Establishes connection with the game server
 */
exports.connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected');
    conn.write(`Name: ${INITIAL}`);
  });

  return conn;
};
