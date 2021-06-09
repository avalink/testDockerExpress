const express = require('express')();
const server = require('http').createServer(express);
server.listen (3000, () => {
  console.log ('SERVER STARTED');
  console.log ('port:', 3000);
});
