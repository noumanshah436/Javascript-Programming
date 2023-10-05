// Class methods

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  // instance method
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }

}

const myCar = new Car("Ford", 2020);

console.log("My car is " + myCar.age() + " years old.");
