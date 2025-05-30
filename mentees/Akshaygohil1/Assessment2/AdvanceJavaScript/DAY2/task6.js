// Unintended Sharing of Variables in Loops

// When using closures inside loops, all closures may share the same variable due to how JavaScript handles scope.
const functions = [];
for (var i = 0; i < 3; i++) {
    functions.push(function () {
        console.log(i); // All closures will log the same value (3)
    });
}
functions[0](); // 3
functions[1](); // 3
functions[2](); // 3

// using let instead of var to create block-scoped variables
const functions1 = [];
for (let i = 0; i < 3; i++) {
    functions.push(function () {
        console.log(i); // Correctly logs 0, 1, 2
    });
}
functions1[0](); // 0
functions1[1](); // 1
functions1[2](); // 2

// Using IIFE (Immediately Invoked Function Expression) to create a new scope for each iteration
const functions2 = [];
for (var i = 0; i < 3; i++) {
    (function (j) {
        functions.push(function () {
            console.log(j); // Correctly logs 0, 1, 2
        });
    })(i);
}
functions2[0](); // 0
functions2[1](); // 1
functions2[2](); // 2