console.log('Starting notes.js')

module.exports.age = 25

module.exports.addNote = () => {
  console.log('addNote')
  return 'New note';
}
// console.log(module.exports.addNote())

module.exports.add = (a,b) => {
  return a + b
}