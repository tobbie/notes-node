const fs = require('fs');

var originalNote = {
    title : 'Some title',
    body : 'Some body'
};

var orginalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', orginalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof orginalNoteString);
console.log(typeof note);
console.log(note.title);