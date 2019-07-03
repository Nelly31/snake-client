const stdin = process.stdin;

const handleUserInput =
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
  
const setupInput = function() {
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  return stdin;
};

module.exports = {setupInput};