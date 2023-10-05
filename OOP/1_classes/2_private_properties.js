// Private Fields (ES2022):

// The # symbol is used to define private fields in a class, making them accessible only within the class.
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
