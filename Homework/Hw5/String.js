// must know Strings
const str = "  Lorem ipsum dolor   sit amet consectetur adipisicing";

// split:
const words = str.split(" ");
console.log(words);

// toUpperCase:
const upperCase = str.toUpperCase();
console.log(upperCase);

// toLowerCase:
const lowerCase = str.toLowerCase();
console.log(lowerCase);

// useful ones:
// includes:
const includes = str.includes("sit");
console.log(includes);

// charAt:
const charAt = str.charAt("10");
console.log(charAt);

// slice:
const slice = str.slice(4, 10);
console.log(slice);

// replace:
const replace = str.replace("dolor", "rmb");
console.log(replace);

// substring:
const substring = str.substring(13, 45);
console.log(substring);

// trim:
const trim = str.trim();
console.log(trim);
