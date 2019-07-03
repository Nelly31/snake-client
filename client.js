const net = require('net');
const {IP, PORT} = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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