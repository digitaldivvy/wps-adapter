'use strict'
const request = require('request')
const ip = require ('ip')

/**
 * heartbeat with ip
 */
let heartbeat=()=>{
    //SECURE POST to HeartBeat End-Point
let myip=ip.address();
console.log(myip)
//then hit post to save it with a key?
/* 
request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred 
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    console.log('body:', body); // Print the HTML for the Google homepage. 
  });
 */}
module.exports= heartbeat

