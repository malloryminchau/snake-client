const net =require('net');


const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost', //use localhost to play on your machine or ip of server machine
    port: 50541
  });
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  })
  conn.on('connect', () => {
    conn.write('Name: MAL');
  })
  // conn.on('connect', () => {
  //   conn.write("Move: up");
  // })
  // conn.on('connect', () => {
  //   setTimeout (() => {
  //     conn.write("Move: left");
  //   }, 1000);
  // })
  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write("Move: up");
  //   }, 500);
    
  // })
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
}
module.exports = {connect};