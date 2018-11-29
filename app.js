console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;
 var command = argv._[0]
// console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add'){
  var note =  notes.addNote(argv.title, argv.body);  
  if(_.isUndefined(note))
  {
      console.log(`Note with title ${argv.title} exists`);
  }else
  {
      console.log(`added note with ${note.title}`);
  }

}
else if (command === 'list'){
    notes.getAll();
}
else if (command=== 'read'){
    notes.getNote(argv.title);
}
else if(command === 'remove'){
    notes.removeNote(argv.title);
}
else{
    console.log('Command not recognized');
}




