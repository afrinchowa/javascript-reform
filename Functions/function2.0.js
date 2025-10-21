// A function is basically a reusable block of code that performs a specific task.

// Syntax:

function functionName(parameters) {
    // code to execute
}


// Example:

function greet() {
    console.log("Hello, Soya!");
}

greet(); 
// Output: Hello, Soya!


// Here, greet is the function name, and calling greet() executes the code inside it.

// 2️⃣ Parameters

// Parameters are placeholders for values you pass into a function. Think of them as input.

// Example:

function greetUser(name) {
    console.log("Hello, " + name + "!");
}

greetUser("Soya"); 
// Output: Hello, Soya!
greetUser("Ali"); 
 // Output: Hello, Ali!


// Here, name is a parameter, and "Soya" or "Ali" are arguments.

// You can have multiple parameters:

function add(a, b) {
    console.log(a + b);
}

add(5, 10); // Output: 15

// 3️⃣ Return Values

// A function can return a value using the return keyword. This allows you to store or use the output elsewhere.

// Example:

function add(a, b) {
    return a + b;
}

let sum = add(5, 10);
console.log(sum); // Output: 15


// Without return, a function just does something but doesn’t give a value back.

// 4️⃣ Scope

// Scope determines where a variable is accessible. JavaScript has mainly two types:

// Global Scope: Accessible anywhere in the code.

// Local Scope (Function Scope): Accessible only inside the function.

// Example:

let globalVar = "I am global";

function checkScope() {
    let localVar = "I am local";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

checkScope();
console.log(globalVar); // Accessible
// console.log(localVar); // ❌ Error: localVar is not defined


// Tip: Variables declared inside a function cannot be accessed outside, which helps prevent conflicts in bigger programs.

// Extra: Function Types

// Function Declaration (we saw this):

function sayHi() { console.log("Hi!"); }


// Function Expression:

const sayHi = function() { console.log("Hi!"); };
sayHi();


// Arrow Function (ES6+):

const sayHi = () => { console.log("Hi!"); };
sayHi();
