console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var user = os.userInfo();
var res = notes.add(10, -2);
console.log(res);

console.log(_.isString(true));
console.log(_.isString('Tobi'));

// fs.appendFile('greetings.txt',`\nWelcome to notes app ${user.username}\n`, (err) =>{
//      if(err)
//      {
//          console.log('unable to write file');
//         throw err;
//      }   
// });

// test commit from new mac