
// In JavaScript, a static method is a method that belongs to a class rather than an instance of the class.

// It is defined using the static keyword in the class. Static methods are called on the class itself rather than on an instance of the class

class MyClass {
  constructor(name) {
    this.name = name;
  }

  // Instance method
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }

  // Static method
  static welcome() {
    console.log('Welcome to the MyClass!');
  }
}

// Creating an instance of the class
const myObject = new MyClass('John');

// Calling the instance method
myObject.sayHello(); // Output: Hello, my name is John

// Calling the static method on the class
MyClass.welcome(); // Output: Welcome to the MyClass!
