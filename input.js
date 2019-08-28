let connection;
const handleUserInput = ('data', (data) => {
  if (data == "\u0003") {
    process.exit();
  }
  if (data == '\u0077') {
    // console.log('up');
    connection.write('Move: up')
  }
  if (data == '\u0073') {
    // console.log('down');
    connection.write('Move: down');
  }
  if (data == '\u0061') {
    // console.log('left');
    connection.write('Move: left');
  }
  if (data == '\u0064') {
    // console.log('right');
    connection.write('Move: right');
  }
  if (data == '\u0071') {
    connection.write('Say: BOO!')
  }
  
})

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
}

module.exports = {setupInput};