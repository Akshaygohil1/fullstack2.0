// Prototypal inheritance: How objects inherit properties from their prototype.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
}

const person1 = new Person('John', 25);
const person2 = new Person('Jane', 30);

person1.greet(); // Output: Hello, my name is John and I'm 25 years old.
person2.greet(); // Output: Hello, my name is Jane and I'm 30 years old.
