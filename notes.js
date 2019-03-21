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
    var notes = fetchNotes();
    filteredNote = notes.filter((note) => {
        return note.title === title;
    })
    
    return filteredNote[0];
}

var removeNote = (title) =>{
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) =>{
        return note.title != title;
    })
    saveNote(filteredNotes);
    return notes.length !== filteredNotes.length;
}

var logNote = (note) => 
{
    debugger;
    console.log('---------\n')
   console.log('Title :', note.title);
   debugger;
   console.log('Body : ', note.body);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}