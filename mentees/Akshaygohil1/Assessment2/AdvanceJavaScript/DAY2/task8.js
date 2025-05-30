// Example 1: Using an IIFE to encapsulate variables
(function () {
    let counter = 0;

    function increment() {
        counter++;
    }

    function reset() {
        counter = 0;
    }

    window.counterApp = {
        increment,
        reset
    };
})();

// Example 2: Using a function to create a namespace
function createNamespace() {
    let counter = 0;

    function increment() {
        counter++;
    }

    function reset() {
        counter = 0;
    }

    return {
        increment,
        reset
    };
}

const counterApp = createNamespace();
