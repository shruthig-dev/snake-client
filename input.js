const { INITIAL ,MOVE_DOWN,MOVE_UP,MOVE_LEFT,MOVE_RIGHT,EXIT} = require('./constants');
let connection;

exports.setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  stdin.on('data', (key) => {
    handleUserInput(key);

    console.log(`Hello from ${INITIAL}`);

    if (String(key) === MOVE_UP) {
        setTimeout(function() {
            connection.write("Move: up");
            setInterval(function() {
                connection.write("Move: up");
              },1000);
          },1000);
    
    } else if (String(key) === MOVE_LEFT) {

        setTimeout(function() {
            connection.write("Move: left");
            setInterval(function() {
                connection.write("Move: left");
              },1000);
          },1000);

    } else if (String(key) === MOVE_DOWN) {

        setTimeout(function() {
            connection.write("Move: down");
            setInterval(function() {
                connection.write("Move: down");
              },1000);
          },1000);
    } else if (String(key) === MOVE_RIGHT) {

        setTimeout(function() {
            connection.write("Move: right");
            setInterval(function() {
                connection.write("Move: right");
              },1000);
          },1000);
    }
    else{
        connection.write("Say: ${key}");
    }
  });
  return stdin;
};

const handleUserInput = function(key) {
  if (String(key) === EXIT) {
    console.log("Game Over !");
    process.exit();
  }
};