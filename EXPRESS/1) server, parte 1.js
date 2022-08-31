const express = require('express');

const server = express();

server.use(express.json());

// var morgan = require('morgan');

// let postId = 0;
// let posts = [];

// const STATUS_USER_ERROR = 422;

// const bodyParser = require('body-parser');/* to enable parsing of json bodies for post requests */

// module.exports = { posts, server }; /* Para exportar si es necesario */
