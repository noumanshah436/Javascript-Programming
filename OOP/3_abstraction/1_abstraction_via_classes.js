// Abstraction means hiding the implementation details and showing only behavior.
// It’s done on the design level as opposed to encapsulation which is implemented at the application level.
//  With abstraction, only essential details are shown to the user.

// Consider this code snippet:

class Employee {
  #name;
  #baseSalary;

  setName(val) {
    this.#name = val;
  }

  setBaseSalary(val) {
    this.#baseSalary = val;
  }

  getName() {
    return this.#name;
  }

  getSalary() {
    // here is the abstraction
    let bonus = 100;
    return this.#baseSalary + bonus;
  }
}

var emp = new Employee();
emp.setName("abc");
emp.setBaseSalary(1000);

console.log(emp.getName());
console.log(emp.getSalary());

// Notice how getSalary method is updating salary in the backend that the end user wouldn’t know.
// In a real application, this bonus can be fetched from some database and added to the base salary.

// *******************************
