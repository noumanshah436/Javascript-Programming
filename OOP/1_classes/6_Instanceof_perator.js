// The instanceof operator checks if an object is an instance of a particular class or constructor function.

class MyClass {
  constructor(name) {
    this.name = name;
  }
}

// Creating an instance of the class
const obj = new MyClass("John");

console.log(obj instanceof MyClass); // Output: true
