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





module.exports = {connect};