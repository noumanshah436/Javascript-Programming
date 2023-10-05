// Polymorphism is the practice to design objects in such a way that they share and override behavior from parent objects.

// When a property is referred to by an object whether it’s a method or variable,
//  the object first looks for it in its own scope, if not found then go one level above and look for it in the parent scope.
//  It goes on until that property is found or returned undefined otherwise.
//  This behavior of javascript objects can be utilized in such a way that child objects can override the functionality of their parent objects where required
//  without modifying the parent.

// In the above code from the inheritance, the student object calls sayName function which is not present in the Student class but in its parent, yet it is callable. We can override this function in the Student class and customize it’s behavior.


class Person{
  constructor(name){
      this.name = name;
  }
  sayName(){
      console.log(this.name);
  }
}

class Student extends Person{
  constructor(name, rollNumber){
      super(name);
      this.rollNumber = rollNumber;
  }
  logDetails(){
      console.log(`Name: ${this.name}, Roll number: ${this.rollNumber}`)
  }
  sayName(){
      // do stuff
      console.log("From Student");
      super.sayName();
  }
}

var student = new Student("Heisenberg", 1);
student.logDetails();
student.sayName();      // From Student   Heisenberg
