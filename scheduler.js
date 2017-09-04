'use strict'

// import hearbeat from './hearbeat';
const heartbeat = require('./heartbeat');

const execute= setInterval(heartbeat,1000)