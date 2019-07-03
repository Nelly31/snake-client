const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '192.168.0.102',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to the game server');
    conn.write('Name: NEL');
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
};
 
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  //allows users to exit with ctrl c
  const handleUserInput =
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
  return stdin;
};



module.exports = {connect};

// conn.on('connect', () => {
//   setTimeout(function() {
//     conn.write("Move: up");
//   }, 50);
// });

// conn.on('connect', () => {
//   setInterval(function() {
//     conn.write("Move: up");
//   }, 100);
// });