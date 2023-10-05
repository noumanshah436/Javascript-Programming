
function Animal(val) {
  var name = val;

  var publicApi = {
    setName: function (val) {
      name = val;
    },
    getName: function () {
      return name;
    },
  };

  return publicApi;
}
var animal = new Animal("DOG");
animal.setName("CAT");

console.log(animal.getName());
// output: CAT;

console.log(animal.name);
// output: undefined;

// In the above code, the name property of Animal isn’t directly accessible but only via publicApi methods.
// This is because we are returning publicApi object that doesn’t have a name property.
//  Its properties(setName and getName) utilize name property from its lexical scope.

// ***************************

// Encapsulation can also be done by making modules out of code
