
console.log('Starting app.')

const fs = require('fs')
const os = require('os')
const notes = require('./notes')

console.log('Result:', notes.add(2,3))

// var res = notes.addNote()
// console.log(res)

// var user = os.userInfo();
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);