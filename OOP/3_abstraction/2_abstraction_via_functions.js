
// Via function, abstraction can be done using the following code:

function Employee(){
  let name;
  let baseSalary;

  var publicApi = {};

  publicApi.setName = function (val){
      name = val;
  }
  publicApi.setBaseSalary = function (val){
      baseSalary = val;
  }

  publicApi.getName = function (){
      return name;
  }

  publicApi.getSalary = function (){
      let bonus = 1000;
      return baseSalary + bonus;
  }

  return publicApi;
}

var emp = new Employee();
emp.setName("abc");
emp.setBaseSalary(100);

console.log(emp.getName());
console.log(emp.getSalary());
console.log(emp.name);
