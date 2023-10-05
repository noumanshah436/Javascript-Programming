// ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

// A JavaScript class is not an object. It is a template for JavaScript objects.

// Syntax
// class ClassName {
//   constructor() { ... }
// }


class Car {
  constructor(name, year) {
    // instance variables
    this.name = name;
    this.year = year;
  }
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log(myCar1.name);
console.log(myCar1.year);


// Adding a property outside of the constructor
myCar1.color = "white";

// Accessing the added property
console.log(myCar1.color);

// In this example, this.color is added to the instance outside of the constructor, and it becomes a property of that specific instance.
// However, it is not part of the class definition itself, and it won't be shared among other instances of the class.

// *******************************
// this keyword:

// In JavaScript classes, the this keyword is a reference to the instance of the class.
// It is used to refer to the current object and access its properties and methods within class methods or the constructor.

// this keyword is only accessible in the constructor or methods of the class.

// *******************************

// JavaScript doesn't have classical access specifiers like some other object-oriented languages such as Java or C++.
// In JavaScript, properties and methods of objects are inherently public, meaning they can be accessed and modified from outside the object.

// *******************************

