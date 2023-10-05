// Inheritance is an important concept in Object Oriented Programming paradigm.
// It’s a process by which child objects inherit the properties of the parent object.

// In javascript, inheritance is built into objects and every object has a property called prototype
// which refers to the parent of that object and this chain goes up until the prototype points to null.

// Now let’s implement inheritance via classes and objects:

class Person {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}

class Student extends Person {
  constructor(name, rollNumber) {
    super(name);
    this.rollNumber = rollNumber;
  }

  logDetails() {
    console.log(`Name: ${this.name}, Roll number: ${this.rollNumber}`);
  }
}

var student = new Student("Heisenberg", 1);
student.logDetails(); // Name: Heisenberg, Roll number:1
student.sayName(); // Heisenberg

// Student class has access to all properties of the person class.

// node 4_Inheritance/1_inheritance.js
