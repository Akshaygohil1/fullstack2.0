const exampleObj = {
  name: "Akshay",
  age: 30,
  occupation: "Engineer"
};
// Using Object.keys() to get an array of property names for a nested object
const nestedObj = {
  person: {
    name: "Akshay",
    age: 30
  },
  occupation: "Engineer"
};

const nestedKeys = Object.keys(nestedObj.person);
console.log(nestedKeys); // Output: ['name', 'age']

// Using Object.values() to get an array of property values
const values = Object.values(exampleObj);
console.log(values); // Output: ['Akshay', 30, 'Engineer']

// Using Object.entries() to get an array of [key, value] pairs
const entries = Object.entries(exampleObj);
console.log(entries); // Output: [['name', 'Akshay'], ['age', 30], ['occupation', 'Engineer']]

