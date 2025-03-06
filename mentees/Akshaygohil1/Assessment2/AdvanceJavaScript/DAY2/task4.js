// Closures in JavaScript: How They "Remember" Scope

// What is a Closure?
// A closure is a function that remembers the variables from its lexical scope
// even after the outer function has finished execution.
// This allows the inner function to access variables defined in the outer function,
// even when it's called outside its original scope.


function outerFunction() {
    let message = "Hello, Akshay!"; // This variable is inside the lexical scope

    function innerFunction() {
        console.log(message); // The inner function can access 'message'
    }

    return innerFunction; // Returning the inner function
}

const closureFunc = outerFunction(); // 'outerFunction' runs and returns 'innerFunction'
closureFunc(); // Output: "Hello, Akshay!"

// -----------------------------------------------------------------
// Closures allow creating multiple independent functions with different values.

function createMultiplier(multiplier) {
    return function (num) {
        return num * multiplier; // The inner function "remembers" multiplier
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// -----------------------------------------------------------------

// Example 3: Delayed Execution (setTimeout)
// Closures are commonly used in setTimeout to "remember" variables even after the function has executed.

function delayedMessage(msg, delay) {
    setTimeout(() => {
        console.log(msg);
    }, delay);
}

delayedMessage("Hello after 2 seconds!", 2000);

// -----------------------------------------------------------------

// 4. Closures in a React Component
// Closures are widely used in React hooks, especially with state updates.
import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount((prevCount) => prevCount + 1); // 'prevCount' is a closure
    }

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;
