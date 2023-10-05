// Getters and Setters:

// Getters and setters allow you to define methods for getting and setting the values of properties.
// They are defined using the get and set keywords.

class Student {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    // You can add validation logic if needed
    this._name = newName;
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age
  set age(newAge) {
    // You can add validation logic if needed
    this._age = newAge;
  }

  // Additional method
  displayInfo() {
    console.log(`Name: ${this._name}, Age: ${this._age}`);
  }
}

// Creating an instance of the Student class
const student1 = new Student("John Doe", 20);

// Using the getter to access properties
console.log(student1.name); // Output: John Doe
console.log(student1.age);  // Output: 20

// Using the setter to modify properties
student1.name = "Jane Doe";
student1.age = 21;

// Displaying information using a method
student1.displayInfo(); // Output: Name: Jane Doe, Age: 21

// ***************************************

// Do chatGPT
// why we need get and set methods as I can still directly use the instance properties

