var square = x => x*x
console.log(square(9))

var name = 'Ebuka'

var user = {
  name: 'Andrew',
  // sayHi: () => {
  //   console.log(`Hi. I'am ${name}`)
  // },
  sayHiAlt(){
    console.log(arguments)
    console.log(`Hi. I'am ${this.name}`)    
  }
}

// user.sayHi()
user.sayHiAlt(1,2,3)

// Don't use arrow functions when you will be dealing with this kewword