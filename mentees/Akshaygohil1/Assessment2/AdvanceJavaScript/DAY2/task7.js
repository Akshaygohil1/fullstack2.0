// An IIFE is a function that runs immediately after it’s defined.

(function () {
    console.log("IIFE ran!");
})();

//   Avoid polluting the global scope
// Encapsulate variables so they don’t interfere with other code

let counter = 0;

function increment() {
    counter++;
    console.log(counter);
}

// iffe with arrow function
(() => {
    const name = "Akshay";
    console.log("Hello", name);
})();


// example of IIFE with parameters
const counterApp = (function () {
    let count = 0;

    return {
        increment() {
            count++;
            console.log(count);
        },
        reset() {
            count = 0;
            console.log("Reset");
        }
    };
})();

counterApp.increment(); // 1
counterApp.increment(); // 2
counterApp.reset();     // Reset


// 🔒 Benefits of IIFE (Encapsulation)

// Benefit	Description
// Private Variables	Keeps internal data hidden
// Clean Global Scope	Avoids name clashes
// Modular Structure	Acts like a mini module
// Immediate Execution	Runs logic right away