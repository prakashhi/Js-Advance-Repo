// "use strict";

// function PrintData() {
//   console.log(`This is My First ${this.name}`);
// }

// PrintData();

// new this Object on new Keyword

// function printer(name, age) {
//   ((this.name = name), (this.age = age));
// }
// const newPerson = new printer("Prakash", 22);
// const newPerson2 = new printer("Prakash2", 23);

// newPerson.sayHello = function () {
//   console.log("SeyaHelloo");
// };

// console.log(newPerson);
// console.log(newPerson2);

// function greet() {
//   console.log(this);
// }

// const user = {
//   greet
// };

// user.greet();

// function Counter(startingValue) {
//   this.value = startingValue;
// }

// Counter.prototype.incrementFactory = function (incrementStep) {
//   return function ()  {
//     this.value += incrementStep;
//      console.log(this.value)
//   }.bind(this);

// };

// const counter = new Counter(0);
// const increment5 = counter.incrementFactory(5);
// increment5(); // NaN
// increment5(); // NaN
// increment5(); // NaN

// const oneData = {
//   name: "Prakahsh",
//   sayHello:  function () {
//     console.log(`Hello ${this.name}`);
//   },

//   return sayHello.bind(this)
// };

// const TowData = {
//   name: "Kushal",
// };


// let take =  oneData.sayHello
// take()

// console.log(global);


