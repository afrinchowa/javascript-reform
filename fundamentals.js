/* JavaScript is a client-side scripting language used to make web pages interactive. Unlike HTML (structure) and CSS (style), JavaScript adds behavior.
2. Variables & Constants
let – Block-scoped variable

const – Block-scoped constant

var – Function-scoped (legacy, avoid in modern JS)

*/ 
let name = "Soya";
const age = 24;

// 3. Data Types
// JavaScript is dynamically typed. Data types include:

// Primitive: String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Non-Primitive: Objects, Arrays, Functions
// let isStudent = true;
// let courses = ["JS", "React"];
// let user = { name: "Soya", role: "Developer" };

// 4. Operators
// Arithmetic: +, -, *, /, %

// Assignment: =, +=, -=

// Comparison: ==, ===, !=, <, >

// Logical: &&, ||, !

// let score = 85;
// if (score > 80 && score < 100) {
//   console.log("Great job!");
// }

// 5. Control Flow
// if, else, else if

// switch

// Ternary: condition ? trueVal : falseVal
let lang = "js";
switch (lang) {
  case "js":
    console.log("JavaScript selected");
    break;
}
// 6. Loops
// for, while, do...while

// for...of for arrays

// for...in for objects

for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 7. Functions

function greet(name) {
  return `Hello, ${name}`;
}
const sayHi = (name) => `Hi, ${name}`;

// 8. Arrays and Methods
// Arrays are list-like objects.
let techs = ["HTML", "CSS", "JavaScript"];
techs.push("React");
techs.map(item => console.log(item));
// 9. Objects
// Objects store key-value pairs.
const dev = {
  name: "Soya",
  stack: "MERN",
  greet() {
    console.log("Welcome!");
  }
};
// 10. DOM Manipulation
// JavaScript can interact with the webpage via the DOM.
document.getElementById("btn").addEventListener("click", () => {
  alert("Clicked!");
});
// 11. Events
// JavaScript handles browser events:
try {
  // code that might throw
} catch (err) {
  console.error(err.message);
}
// 12. Error Handling
try {
  // code that might throw
} catch (err) {
  console.error(err.message);
}
// 13. ES6+ Features (Modern JS Goodies)
// Arrow functions

// Destructuring

// Template literals

// Spread/rest operator

// Promises & Async/Await

const [first, second] = [1, 2];
const user = { name: "Soya", age: 24 };
const greet = ({ name }) => `Hello ${name}`;



