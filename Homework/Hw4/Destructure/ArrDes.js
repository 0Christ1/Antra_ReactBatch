const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];

// const a = alphabet[0];
// const b = alphabet[1];
// console.log(a);
// console.log(b);

// Using Destructure: order matters but names don't;

// 1. in order
// const [a, b, c] = alphabet;
// console.log(a);
// console.log(b);
// console.log(c);

// 2. skip item
// const [a, , c] = alphabet;
// console.log(a);
// console.log(c);

// 3. get the rest: using spread operator
// const [a, b, ...rest] = alphabet;
// console.log(a);
// console.log(b);
// console.log(rest);

// 4. combine two arrays by using spread operator and destructure
// const newArray = [...alphabet, ...numbers];
// console.log(newArray);

// 5. combine two arrays or objects by using concat method
// const newArray = alphabet.concat(numbers);
// console.log(newArray);

// 6. function can return more params by using array destructure
function sumAndMultiply(a, b) {
  return [a + b, a * b];
}
// const array = sumAndMultiply(2, 3);
// console.log(array);
// Destructure array to sum and multiply
// const [sum, multiply] = sumAndMultiply(2, 3);
// console.log(sum);
// console.log(multiply);

// 7. default value of destructure
// function sumAndMultiply(a, b) {
//   return [a + b, a * b, a / b];
// }
const [sum, multiply, division = "No division"] = sumAndMultiply(2, 3);
console.log(sum);
console.log(multiply);
console.log(division);
