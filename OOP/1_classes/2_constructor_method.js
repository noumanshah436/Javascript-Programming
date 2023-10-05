// The Constructor Method
// The constructor method is a special method:

// It has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties

// If you do not define a constructor method, JavaScript will add an empty constructor method.

// *******************************

// A constructor is a special keyword reserved to create a constructor function.
// A constructor function is always called automatically upon the creation of an object/instance of a class.
// It implicitly returns an instance of the newly created object.

//  A default constructor is built-in to the class and we override it by implementing our own.
// The new keyword is necessary to use with object creation as it will tell the compiler to invoke the constructor function.

class Animal {
  constructor(name) {
    this.name = name;
  }
}
// Let's create Object from the class Animal
var animal = new Animal("Dog");
console.log(animal.name);

// *********************************

// In Javascript, we can create Objects using functions without the use of the class keyword.

function Car(name) {
  this.name = name;
}
var car = new Car("Toyota");
console.log(car.name);

// This is how we create Objects from functions and classes in javascript
