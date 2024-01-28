// reduce() =  Reduces an array to a single value
//             Calls the specified callback function for all the elements in an array.
//             The return value of the callback function is the accumulated result,
//             and is provided as an argument in the next call to the callback function.

let letters = ["H", "E", "L", "P"];

// args= (  previousValue: string, currentValue: string, currentIndex: number, array: string[])
function combineLetters(total, nextLetter, index, array) {
  // console.log(total, nextLetter)
  return total + nextLetter;
}

let word = letters.reduce(combineLetters);
// let word = letters.reduceRight(combineLetters);   //  works in reverse order

console.log(word);

// *******************************

// Problem: make an array of all the value attributes and omit "*" value from this array of objects using reduce

list = [
  {
    label: "All",
    value: "*",
  },
  {
    label: "About Me",
    value: "about_me",
  },
  {
    label: "Account Status",
    value: "deleted_at",
  },
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "Blood Group",
    value: "blood_group",
  },
];

const result = list.reduce(
  (options, option) =>
    option.value !== "*" ? options.concat(option.value) : options,
  []
);
console.log(result);
