// arrow functions

// expression -> is something that evaluates to some value.

// creating normal function
function x() {
  const a = 10;
  console.log(a);
}

x();

// anonymous function
var res = function () {
  console.log("I am a anonymous function");
};

// In ES6 -
// arrow function -> we dont have function keyword instead we put the function keyword
// only difference is "this" -> keyword  word works differently
// it takes the lexical parent
const fn = () => {};
