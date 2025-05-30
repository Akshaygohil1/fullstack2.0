// The __proto__ property in JavaScript is used to access or set the prototype of an object. 
// It is considered outdated and its usage is generally discouraged in favor of Object.getPrototypeOf() and Object.setPrototypeOf().

const obj = {};
const prototype = { greeting: "Hello" };

// Setting the prototype using __proto__
obj.__proto__ = prototype;
console.log(obj.greeting); // Output: Hello

// Object.getPrototypeOf() is a modern way to retrieve an object's prototype.
const objPrototype = Object.getPrototypeOf(obj);
console.log(objPrototype === prototype); // Output: true

// Object.setPrototypeOf() can be used to set the prototype of an object.
const newPrototype = { farewell: "Goodbye" };
Object.setPrototypeOf(obj, newPrototype);
console.log(obj.farewell); // Output: Goodbye
console.log(obj.greeting); // Output: undefined

