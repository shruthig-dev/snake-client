const net = require('net');
let name = "SG";
/**
 * Establishes connection with the game server
 */
exports.connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log(`Hello from ${name}`);
   
    // conn.write("Move: up");
    // conn.write("Move: down");

    // setInterval(function(){
    //     conn.write("Move: down");
    // }, 3000);

  });

  return conn;
};
