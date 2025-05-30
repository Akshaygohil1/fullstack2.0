// Understanding Object.prototype and its methods (hasOwnProperty, toString)

// hasOwnProperty
// Returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

const person = {
  name: 'Akshay',
  age: 25
};

console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('age')); // true
console.log(person.hasOwnProperty('toString')); // false

// toString
// Returns a string representation of the object.

console.log(person.toString()); // [object Object]

// If we want a more meaningful string representation, we can override the toString method.

const personWithToString = {
  name: 'Akshay',
  age: 25,
  toString() {
    return `Person { name: ${this.name}, age: ${this.age} }`;
  }
};

console.log(personWithToString.toString()); // Person { name: Akshay, age: 25 }
