console.log('starting notes.js');


module.exports.addNote = () =>{
    console.log('calling add  note');  
    return "New Note";
}
module.exports.add = (firstVal, secondVal) => {
    console.log('calling add');  
    return firstVal + secondVal;
}