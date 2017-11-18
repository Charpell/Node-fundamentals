
console.log('Starting app.')

const fs = require('fs')
const os = require('os')
const notes = require('./notes')
const lodash = require('lodash')

console.log(lodash.isString('And'))
var filteredArray = lodash.uniq([2,2,3,1,4,2])
console.log(filteredArray)

// var res = notes.addNote()
// console.log(res)

// var user = os.userInfo();
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);