// console.log($);

// console.log("ajoeifsj");

// const a = "qee";

// ES5
// var number = 5;
// var string = "qjiejif";
// var bool = true;
// var bool2 = false;

// ES6
// let count = 1;
// console.log(count);
// count++;
// console.log(count);

// const foo = "foo";
// foo = "bar";

// var weird behaviors
// 1. var can be re-declared
// 2. var will be hoisted
//         Hoisting is like moving a variable to the top before declaring it
// 3. function scoped

// function foo() {
//   if (true) {
//     var a = "a";
//   }
//   //   console.log("var", a);
// }

// foo();

// let and const
// 1. block
// 2 will also be hoisted
//      However, will throw error, bcf "Temporal Deadzone"

// console.log(url);
// var url = "www.google.com";

// console.log(url);

// if (true) {
//   const a = "a";
//     console.log("let", a);
// }

// Data Type
// 1. primitive
// const str = "abc";
// const num = 0;
// const nul = null;
// const undef = undefined;

// // Type coercion: automatic conversion of one data type to another
// console.log(typeof (1 + "number")); // convert the number to string

// coercion of truthy and falsy values
// const b = true;
// const boolCol = !!1;
// console.log(boolCol);
// console.log(!!0);
// console.log(!!undefined);

// const variable = "";
// if (variable) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

// == is loose comparison, unsafe, bc type coercion will happen
// === is strict comparison, safe, it will compare the type as well
//      it won't do type coercion if types are different, then false

// const bool3 = (1 === 1) == 1; // True, type coercion
// console.log(bool3);

// const variable2 = "";
// if (variable2) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

//Type Conversion / Type Casting: manual conversion
// const numStr = "22";
// const normalNum = 11;
// const sum = Number(numStr) + normalNum;
// console.log(sum);

// convert a number to a string
// console.log(1 + "");
// console.log((1).toString());
// console.log(`${1}`);

//Reference types: literally everything else
// const arr = [1, 2, 3, 4, 5];
// arr.push(6);

// const arr3 = arr; // copy by reference

// arr3[2] = 5;
// console.log(arr3 == arr);  // they are the same bcof mem addr

// const person = {
//   name: "Bob",
//   age: 1,
// }
// person.age++;
// console.log(person);

// const arr2 = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr2.length; i++) {
//   arr2.pop();
// }
// console.log("arr2", arr2);

const person = {
  name: 'Bob',
  age: 1,
  address: {
    street: '123 Main Street',
    zipcode: '1244-9999',
  },
  job: null,
  favNumbers: [1, 2, 3, 4],
  sayHi() {
    console.log('My name is Bob');
  },
};

person.job = 'developer';

console.log(person.address.zipcode);

const person2 = {
  name: 'Joe',
  age: 2,
  job: null,
};

const people = [person, person2];

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  if (person.address) {
    console.log(`${person.name}'s zipcode is ${person.address.zipcode}`);
  } else {
    console.log(`${person.name} doesn't have an address`);
  }
}
