// A simple Node.js module that exports a function.
// This function will be tested by our workflow.
const add = (a, b) => {
  return a + b;
};

// You can optionally export a simple HTTP server to demonstrate a full app.
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from the Node.js App!\n');
});

// Export the 'add' function for testing.
module.exports = { add, server };
