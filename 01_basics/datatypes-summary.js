// Primitive

// 7 types: String, Number ,Boolean, null, undefined, Symbol, Bigint

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

// const bigNumber = 3426272672464736473647647n


// Reference (Non primitive)

//Array , Objects, Functions 

const heros = ["shaktiman", "naagraj","doga"]
let myObj = {
    name:"Alok",
    age: 21,
}

const myFunction = function(){
    console.log("Hello worls");
}

console.log(typeof outsideTemp);

