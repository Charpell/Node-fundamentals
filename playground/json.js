//Used for writing
// var obj = {
//   name: 'Andrew'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj)
// console.log(stringObj)

//Used for Reading
// var personString = '{"name": "Andrew"}';
// var person = JSON.parse(personString)
// console.log(typeof person)
// console.log(person)

const fs = require('fs');

// Use the code to save a note
var originalNote = { 
  title: 'Some title',
  body: 'Some body'
}
var orginalNoteSrtring =JSON.stringify(originalNote)
fs.writeFileSync('notes.json', orginalNoteSrtring);

// Use this code to read a note
var noteString = fs.readFileSync('notes.json')
var note = JSON.parse(noteString);
console.log(typeof note)
console.log(note.title)