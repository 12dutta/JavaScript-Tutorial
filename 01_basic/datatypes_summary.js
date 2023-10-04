//  Primitive ->they all are call by value

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

//*******************Memory Allocation******************

// STACK Memory(Primitive) and HEAP Memory(Non-Primitive)
// In stack we will get a copy of the entity  whereas in Heap we keep the value we will get the reference(jo bhi changes karte ho vo aap original value me karte ho)

let myYoutubeName = "vaibhavdotcom"

let anotherName = myYoutubeName
anotherName = "vaibhavEmpower" 
console.log(myYoutubeName);
console.log(anotherName);

let userone = {
    email: "user@google.com",
    upi: "user@ylb"
}

let usertwo = userone
usertwo.email = "vaibhav@google.com"
console.log(userone.email);
console.log(usertwo.email);