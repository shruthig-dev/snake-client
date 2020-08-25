const { MOVE_DOWN,MOVE_UP,MOVE_LEFT,MOVE_RIGHT,EXIT,HI,BYE} = require('./constants');
let connection;

exports.setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = function(key) {
  if (String(key) === EXIT) {
    console.log("Game Over !");
    process.exit();
  } else if (String(key) === MOVE_UP) {
    connection.write("Move: up");
  } else if (String(key) === MOVE_LEFT) {
    connection.write("Move: left");

  } else if (String(key) === MOVE_DOWN) {
    connection.write("Move: down");
  } else if (String(key) === MOVE_RIGHT) {
    connection.write("Move: right");
  } else if (String(key) === HI) {
    connection.write("Say: Hi");
  } else if (String(key) === BYE) {
    connection.write("Say: BYE");
  }
};

// conn.write("Move: up");
// conn.write("Move: down");

// setInterval(function(){
//     conn.write("Move: down");
// }, 3000 * interval);