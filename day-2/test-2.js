const person = {
  name: "John",
  print: function () {
    // this will be depend on how this will be called.
    console.log(this);
  },
};

const person2 = {
  name: "Jame",
};

function x() {
  console.log(this);
}

person.print();
person.print.call();
person.print.call(this);
person.print.call(person2);

// NOTE : call , apply , bind they can change the this of the function
// call -> is the way of binding . it is same as x().

// x.call(this);
// x.call(person);
// x.call(person2);
