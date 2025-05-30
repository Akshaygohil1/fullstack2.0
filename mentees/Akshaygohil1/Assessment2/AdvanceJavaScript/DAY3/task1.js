// Creating objects using literals
const personLiteral = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Creating objects using constructors
function PersonConstructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name}`);
    };
}

const personConstructor = new PersonConstructor("Jane", 25);

// Creating objects using Object.create()
const personPrototype = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const personCreate = Object.create(personPrototype);
personCreate.name = "Doe";
personCreate.age = 40;

// Example usages
personLiteral.greet();
personConstructor.greet();
personCreate.greet();

