// A callback function is a function passed as an argument to another function.
//  It allows us to write flexible and reusable code,
//  especially in asynchronous programming, event handling, and functional programming.

//✅ Here, sayGoodbye is passed as a callback to greet, making greet more flexible and reusable.
// A callback function is a function that is passed as an argument to another function and is executed inside that function.
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Akshay", sayGoodbye);

// another example 

function calculator(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calculator(5, 3, add));      // Output: 8
console.log(calculator(5, 3, multiply)); // Output: 15

