const obj = {
  firstName: "Jane",
  print: () => {
    console.log(this); // {}
    console.log(this.firstName);
  },
};

obj.print();
