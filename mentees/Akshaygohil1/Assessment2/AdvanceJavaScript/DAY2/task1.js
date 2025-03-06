// Deep Dive into Functions: Declarations vs. Expressions: Differences and use cases.


// Declarations
// A function declaration defines a named function using the function keyword. 
// These functions are hoisted to the top of their scope,
//  meaning they can be called before they are defined in the code.

function greet(name) {
    return `Hello, ${name}!`;
}
// ---------------------------------------
console.log(add(5, 3)); // ✅ Works fine due to hoisting
function add(a, b) {
    return a + b;
}

// 2. Function Expressions
// A function expression assigns a function to a variable.
// These functions are not hoisted like function declarations.

const greet = function (name) {
    return `Hello, ${name}!`;
};

// ---------------------
console.log(add(5, 3)); // ❌ ReferenceError: Cannot access 'add' before initialization

const add = function (a, b) {
    return a + b;
};