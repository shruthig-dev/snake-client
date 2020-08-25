exports.setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};
const handleUserInput = function(key) {
  if (String(key) === '\u0003') {
    console.log("Game Over !");
    process.exit();
  }
};