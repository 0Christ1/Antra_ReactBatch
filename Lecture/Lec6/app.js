// hw review

// obejct
// const getPerson = () => {
//   return { name: "Jack", age: 1 };
// };
// console.log(getPerson());

// sort
// const arr = [13, 9, 5, 4, 10, 2];
// const newArr = [...arr].sort();
// console.log(arr === newArr);

// traversal array
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 13) continue; // skip 13
//   console.log(arr[i]);
// }

// in shows the index
// for (const num in arr) {
//     console.log(num);
// }

// function

const person = [
  {
    name: "Bob",
    age: 20,
    occupation: "Student",
    wealth: 100,
  },
  {
    name: "John Doe",
    age: 45,
    occupation: "CEO",
    wealth: 8250000,
  },
  {
    name: "Buffet",
    age: 60,
    occupation: "Investor",
    wealth: 99999999,
  },
  {
    name: "Dylan",
    age: 42,
    occupation: "Singer",
    wealth: 19394855,
  },
];

// destructure
function canDrink({ age }) {
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}
// console.log(canDrink(person[1]));

function sum(...numbers) {
  return numbers.reduce((accu, curr) => {
    return accu + curr;
  }, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
// console.log(sum(2, 4, 5, 9));

function delayedCall(callbackFn, ...args) {
  setTimeout(() => {
    callbackFn(...args);
  }, 500);
}

function sayHi(name) {
  console.log("Hello", name);
}

function sum(...numbers) {
  const total = numbers.reduce((accu, curr) => accu + curr, 0);
  console.log(total);
}

// delayedCall(sayHi, "Christ");
// delayedCall(sum, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6);

// IIFE: immediately invoked function expression
// (() => {
//   setTimeout(() => {
//     console.log("hello world");
//   }, 1000);
// })();

// const message = (() => {
//   const msg = "private message";
//   return `message: ${msg}`;
// })();
// console.log(message);

const counter = (function () {
  let count = 0;
  function incr(amount = 1) {
    count += amount;
  }
  function decr(amount = 1) {
    count -= amount;
  }
  function getCount() {
    return count;
  }

  return {
    getCount,
    incr,
    decr,
  };
})();

// closure:
// inner function can access outer function properties
// even after the outer function has returned
// console.log(counter.getCount());
// console.log(counter.incr());

function getSuggestions(query) {
  console.log("You spent $1 for the query:", query);
}

function debounce(callback, ...args) {
  let id = null;
}
