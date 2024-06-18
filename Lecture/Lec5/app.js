// Object Oriented

const bookPrototype = {
  getSummary() {
    return `The book ${this.name} is published in year ${this.year}`;
  },
};

const book1 = {
  name: "Intro to Javascript",
  author: "John Smith",
  year: 2015,
  getSummary() {
    return `The book ${this.name} is published in year ${this.year}`;
  },
};

const book2 = {
  name: "Intro to Javascript",
  author: "John Smith",
  year: 2016,
  getSummary() {
    return `The book ${this.name} is published in year ${this.year}`;
  },
};

const summary = book1.getSummary();
console.log(summary);

// console.log(book1.getSummary === book2.getSummary); // object is not primitive

// Prototype: obj will have all of it's prototype's properties
const obj0 = {
  foo: "foo",
};

const obj1 = {
  a: "a",
  __proto__: obj0,
};

const obj2 = {
  a: "a2",
  b: "b",
  // obj2 will have all obj1's properties
  __proto__: obj1,
};

console.log(obj2.foo);

// Constructor Function

// function Book(name, year) {
//   this.name = name;
//   this.year = year;
// }

// Book.prototype.getSummary = function () {
//   return `The book ${this.name} is published in year ${this.year}`;
// };

// ES6 Class Syntax
class Book {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  getSummary() {
    return `The book ${this.name} is published in year ${this.year}`;
  }
}

// const book3 = new Book("Intro to C", 2000);
// const book4 = new Book("Intro to Java", 2001);
// console.log(book1);
// console.log(book2);

// console.log(book1.getSummary === book2.getSummary);
// console.log([].forEach === [].forEach);

// ####################### Array prototype method #########################

const nums = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
const oddNum = nums.filter((num) => {
  return num % 2 == 1;
});

nums.map((num) => {
  return num + 1;
});

// ####################### Prototype(Instance) Methods  #########################
// must know array
// find, includes, join, pop, push, reduce, sort
// slice, reverse,
// some, every, findIndex,

console.log({ name: "book", year: 2000 } instanceof Book); // false cuz it's not created by Book
console.log(100 instanceof Number);

// must know string
// split, toUpperCase, toLowerCase
// useful ones:
// includes, charAt, slice, replace, substring, trim

// must know Object
// entries, key, values

// const boxes = document.querySelectorAll(".box"); // it's a NodeList not a array
// console.log(boxes);

// const box = boxes.item(0);
// boxes.forEach(function (box) {
//   console.log(box);
// });

// function

// ####################### Static(class) Methods  #########################
class Book2 {
  #name;
  #year;
  constructor(name, year) {
    this.#name = name;
    this.#year = year;
  }
  static foo() {
    console.log("foo");
  }

  getSummary() {
    return `The book ${this.name} is published in year ${this.year}`;
  }
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
};

Object.entries(obj).forEach((pair) => {
  const [key, value] = pair;
  console.log(key, value);
});

// ####################### This keyword  #########################

// this refers to the object that is invoking the method

// function foo() {
//   console.log(this);
// }
// foo();

const person = {
  firstName: "Bob",
  sayHiDelay() {
    console.log("this", this);
    // setTimeout(
    //   function () {
    //     //   console.log(this.firstName);
    //     console.log(`Hi, my name is ${this.firstName}`);
    //     // console.log("this", this);
    //   }.bind(this),
    //   10,
    // );
    setTimeout(() => {
      console.log(`Hi, my name is ${this.firstName}`);
    }, 1000);
  },
};

person.sayHiDelay();
