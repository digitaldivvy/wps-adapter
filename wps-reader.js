'use strict'
const request = require('request')

let heartbeat=()=>{
    console.log('Pinging')
    //SECURE POST to HeartBeat End-Point


request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred 
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    console.log('body:', body); // Print the HTML for the Google homepage. 
  });
}
module.exports= heartbeat

