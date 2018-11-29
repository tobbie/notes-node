console.log('starting notes.js');

const fs = require('fs');
const notesFileName = 'notes-data.json';

var fetchNotes = () => {
    try{
        var notesString = fs.readFileSync(notesFileName);
        return JSON.parse(notesString);
    }catch {
        return [];
    }
     
}

var saveNote = (notes) =>{
         fs.writeFileSync(notesFileName, JSON.stringify(notes));
   }

var addNote = (title, body)=> {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }
    var duplicateNotes = notes.filter(((note) => {
        return note.title === title;
    }));

    if(duplicateNotes.length === 0)
    {
        notes.push(note);
        saveNote(notes);
        return note;
    }
}

var getAll = () =>{
   return fetchNotes();
    
}

var getNote = (title) => {
    console.log('fetching note', title);
}

var removeNote = (title) =>{
    console.log('removing note', title);
    
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}