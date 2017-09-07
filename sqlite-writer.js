'use strict'

//write the responses to sqlite
// https://github.com/mapbox/node-sqlite3/wiki

var sqlite3 = require ('sqlite3').verbose()


let memoryWriter=function(){
    let db = new sqlite3.Database(':memory:')//in-memory
    db.serialize(function(){
        db.run('CREATE TABLE LOT (loop INT, daily INT, monthly INT , updated DATETIME)')
    //var stmt = db.prepare('INSERT INTO LOT VALUES (?,?,?)')
        for(var i=1; i< 10; i++){
            let loop=i,daily=i+10,monthly=i+12, now=new Date()
            db.run("INSERT INTO LOT VALUES ($loop,$daily,$monthly, $now)",{$loop:loop,$daily:daily,$monthly:monthly, $now:now})
        }
        db.each("SELECT * from LOT",function(err,row){
            console.log(row);
        })
    })
    db.close();
    
}

module.exports = memoryWriter