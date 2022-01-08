const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const userRouter = require('./users/user-router');
const plantsRouter = require('./plants/plants-router');

const server = express();
server.use(express.json());

server.use(cors());
server.use(morgan('dev'));
server.use(helmet());

server.use('/user', userRouter);
server.use('/plants', plantsRouter);



server.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Welcome to the API',
        time: new Date().toLocaleString()
    })
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
        status: err.status
    });
});


module.exports = server;

