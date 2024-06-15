// Recap

// console.log([] == []); // false, diff mem addr

// const arr1 = [1, 2];
// const arr2 = arr1;
// console.log(arr1 === arr2); // true, same type and mem addr

// Today's lecture
```
Summary:
1. Copy: Shallow Copy & Deep Copy
2. Destructure: Object & Array
3. Reset operator
4. DOM Manipulation:  Event Propagation
5. 
```;

// 1. Shallow Copy

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1]; // spread operator: [arr[0], arr[1], arr[2]]

// const person1 = {
//   name: "Bob",
//   age: 1,
//   address: {
//     street: "123 Main St",
//     zip: "20000",
//   },
//   job: null,
//   sayHi() {
//     console.log("hi");
//   },
//   abc: undefined,
// };

// const person2 = { ...person1 }; // share the same mem addr of address in person1
// console.log('person1', person1);
// console.log('person2', person2);
// person2.name = "Joe";
// console.log('person2', person2);
// person2.address.zip = "10000";

// 2. Deep Copy
// first way: use JSON.stringify and parse function
//            will remove
// const p3Str = JSON.stringify(person1);
// const person3 = JSON.parse(p3Str);
// const person3 = JSON.parse(JSON.stringify(person1));

// person3.name = "Mike";
// console.log(person3);
// console.log(person1);

// Second way: use 3rd party library
//              lodash cloneDeep
// const person4 = _.cloneDeep(person1);
// person4.name = "jaofise";

// Destructure  : read destructing assignment mdn article
const address = {
  street: "123 Main Street",
  city: "Anytown",
  state: "CA",
  zip: "12345",
  country: "USA",
};

// redundant and smelly code
const wholeAddress = `${address.street} ${address.city} ${address.state}`;
console.log(wholeAddress);

// object destructure syntax
// order doesn't matter but names do matter
// const { street, city, state, zip, country } = address;
const { street, city, state, zip, country } = address;
const wholeAddress2 = `${street} ${city} ${state} ${zip} ${country}`;
console.log(wholeAddress2);

// if we have a duplicate var name

// Array destructure
// orders do matter, but names don't
const [aaaaaa, bb] = [10, 20];
console.log(b, aaaaaa);

// reset operator
// has to be at the last position
const numbers = [1, 2, 3, 4, 5];
const [a, b, c, ...rest] = numbers;
console.log(a, b);

const user = {
  username: "johnsmith123",
  email: "johnsmith123@gmail.com",
};
