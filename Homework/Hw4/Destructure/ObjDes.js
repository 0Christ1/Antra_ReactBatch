const personOne = {
  name: "Kyle",
  age: 24,
  //   favFood: "Rice",
  address: {
    city: "Somewhere",
    state: "One of them",
  },
};

const personTwo = {
  name: "Sally",
  age: 32,
  favFood: "Watermelon",
  address: {
    city: "Somewhere else",
    state: "Another one of them",
  },
};

// Using Destructure: name matters but order doesn't;

// 1. get the info you want from the object
// const { name, age } = personTwo;
// console.log(name);
// console.log(age);

// 2. using different name
// const { name: firstName, age } = personTwo;
// console.log(firstName);
// console.log(age);

// 3. using default value inside destructure
// const { name: firstName, age, favFood = "Rice" } = personTwo;
// console.log(firstName);
// console.log(age);
// console.log(favFood);

// 4. if the object has the new property
// const personThree = {
//   name: "Sally",
//   age: 32,
//   favFood: "Watermelon",
//   address: {
//     city: "Somewhere else",
//     state: "Another one of them",
//   },
// };
// const { name: firstName, age, favFood = "Rice" } = personThree;
// console.log(firstName);
// console.log(age);
// console.log(favFood);

// 5. if they don't have the value you defined
// const personThree = {
//   age: 32,
//   favFood: "Watermelon",
//   address: {
//     city: "Somewhere else",
//     state: "Another one of them",
//   },
// };
// const { name: firstName = "john", age, favFood = "Rice" } = personThree;
// console.log(firstName);
// console.log(age);
// console.log(favFood);

// 6. use the spread operator for the rest value
// const { name: firstName, ...rest } = personTwo;
// console.log(firstName);
// console.log(rest);

// 7. destructure nested objects
// const {
//   name: firstName,
//   address: { street },
//   address: { city },
// } = personTwo;
// console.log(firstName);
// console.log(street);  // undefined cuz there's no street property
// console.log(city);

// 8. combine two objects
// const personThree = {
//   age: 32,
//   favFood: "Watermelon",
// };

// const person = { ...personOne, ...personThree };
// console.log(person);

// 9. function using destructure
// function printUser({ name, age, favFood = "Watermelon" }) {
//   console.log(`Name is: ${name}. Age is ${age}. Food is ${favFood}`);
// }
// printUser(personOne);
