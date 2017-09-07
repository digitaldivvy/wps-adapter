'use strict'
/**
 * Logic
 *  Read latest data via wps-reader
 *  Write data locally via sqlite w
 */
// import hearbeat from './hearbeat';
const heartbeat = require('./heartbeat')
const writer=require('./sqlite-writer')
const execute= setInterval(writer,1000)