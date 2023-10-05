// JavaScript does not have a concept of class variables in the same way that some other object-oriented programming languages do.

// However, you can achieve similar behavior using
// 1) prototype properties or
// 2) static properties introduced with the ES6 class syntax.

// *************************

// 2) static properties introduced with the ES6 class syntax.

class MyClass {
  // instance variable
  constructor() {
    this.instanceVar = 10;
  }

  // static property (like a class variable)
  static classVar = 20;
}

// usage
const obj1 = new MyClass();
const obj2 = new MyClass();

console.log(obj1.instanceVar); // 10
console.log(obj2.instanceVar); // 10

console.log(MyClass.classVar); // 20
console.log(obj1.classVar); // undefined
console.log(obj2.classVar); // undefined
