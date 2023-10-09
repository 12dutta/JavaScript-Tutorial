const name = "vaibhav"
const repoCount = 50

// console.log(name + repoCount + " Value");  ->outdated syntax therefore not using in today culture

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Newer way to declare string and it is readable and easy to use, it called as string intrepolation

// const gameName = new String('vaibhav-vd')
const gameName = new String('vaibhav-vd-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "   vaibhav    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://vaibhav.com/vaibhav%20dutta"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));