// Encapsulation is the process of hiding and securing the properties of objects.
// Direct access to encapsulated properties is not possible and we have to provide other mechanisms to operate/read that data.

// Typically, this is done by making class variable properties private and
//  providing public class methods to access necessary data.


// We can make class variables private using # before the name of the variable.

class Car {
  #name;

  constructor(name) {
    this.#name = name;
  }

  setName(val) {
    this.#name = val;
  }

  getName() {
    return this.#name;
  }
}
var car = new Car("Toyota");
car.setName("Corolla");

console.log(car.getName()); // output: CAT
console.log(car.name); // output: undefined


// Encapsulation can also be done by making modules out of code
