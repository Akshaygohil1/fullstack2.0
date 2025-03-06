// function Hoisting 

//1-  Only function declarations are hoisted, meaning they can be called before their actual definition.
// 2- ✅ The function greet is hoisted to the top, so it can be called before it's defined.
greet(); // ✅ Works even though it's called before the declaration

function greet() {
    console.log("Hello, Akshay!");
}

// Behind the Scenes (How JavaScript Reads It)
// Internally, JavaScript moves the function declaration to the top:

function greet() { // Hoisted function
    console.log("Hello, Akshay!");
}

greet(); // Now it works!

// ------------------------------------------------------

// 2. Function Expressions Are NOT Hoisted
// If you assign a function to a variable (Function Expression), it won’t be hoisted.

greet(); // ❌ Error: Cannot access 'greet' before initialization

const greet = function() {
    console.log("Hello, Akshay!");
};

// ❌ Why?
// Here, greet is declared using const, and variables declared with let or const are not hoisted like function declarations.

// 3. Arrow Functions Are Also Not Hoisted
// Arrow functions behave like function expressions and are not hoisted.

hello(); // ❌ Error: Cannot access 'hello' before initialization

const hello = () => {
    console.log("Hello, Akshay!");
};

// 4. Best Practices for Function Hoisting
// 🔹 Use function declarations when hoisting is useful.
// 🔹 Use function expressions or arrow functions when you want predictable execution order.
// 🔹 Be cautious of hoisting in large projects to avoid confusion.
