// this -> depends on how we are calling the function
const obj = {
  // function expression
  fn: function () {
    // this refers to the object (calling side)
    console.log(this);
  },
  // arrow function
  fn2: () => {
    // this refers to its parent's this
    console.log(this);
  },
};

// refers to the object
obj.fn(); // { fn: [Function: fn], fn2: [Function: fn2] }

obj.fn2(); // {}


