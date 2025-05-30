const obj = {};

// Define a property with descriptors
Object.defineProperty(obj, 'property', {
  value: 42,
  writable: true, // can be changed
  enumerable: true, // will show up in a for...in loop and Object.keys()
  configurable: true // can be deleted or changed to another descriptor type
});

// Testing the descriptors
console.log(obj.property); // 42

obj.property = 100; // writable allows this
console.log(obj.property); // 100

for (let key in obj) {
  console.log(key); // "property", because enumerable is true
}

delete obj.property; // configurable allows this
console.log(obj.property); // undefined

// why Property descriptors: writable, enumerable, and configurable. is used ?
// 1. To prevent accidental changes to an object's properties.
// 2. To make properties non-enumerable, thus hiding them from for...in loops and Object.keys().
// 3. To make properties non-configurable, thus preventing changes to the property's descriptor.
