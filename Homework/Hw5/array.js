// must know Array
const nums = [1, 2, 3, 4, 5];

// forEach:
nums.forEach((num) => {
  console.log(num);
});

// filter:
const result = nums.filter((num) => num > 3);
console.log(result);

// map:
const map = nums.map((num) => num * num);
console.log(map);

// find:
const found = nums.find((item) => item > 4);
console.log(found);

// includes:
const include = nums.includes(6);
console.log(include);

// join:
const join = nums.join("-");
console.log(join);

// pop:
const pop = nums.pop();
console.log(pop);
console.log(nums);

// push:
const push = nums.push(6);
console.log(push);
console.log(nums);

// reduce:
const initialVal = 0;
const sum = nums.reduce(
  (accumulator, currVal) => accumulator + currVal,
  initialVal,
);
console.log(sum);

// sort:
nums.push(0);
const sort = nums.sort();
console.log(sort);

// slice:
const slice1 = nums.slice(-1);
console.log(slice1);
const slice2 = nums.slice(2, 5); // [2, 5)
console.log(slice2);

// reverse:
const reversed = nums.reverse();
console.log("reversed:", reversed);
nums.reverse(); //reset

// other useful ones
// some:
const odd = (num) => num % 2 == 1;
const some = nums.some(odd);
console.log(some);

// every:
const isAbove = (num) => num > 6;
const every = nums.every(isAbove);
console.log(every);

// findIndex:
const isLargest = (num) => num > 5;
const findInd = nums.findIndex(isLargest);
console.log(findInd);

// static:
// isInteger, isNaN, parseInt, parseFloat

// must know Strings
// split, toUpperCase, toLowerCase
// useful ones:
// includes, charAt, slice, replace, substring, trim

// must know Object
// static
// entries, keys, values
