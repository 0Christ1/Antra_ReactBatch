// L1
console.log("Synchronous 1");

// L2
setTimeout(() => {
  console.log(`Timeout 2`);
}, 0);

// L3
Promise.resolve().then(() => {
  console.log("Promise");
});

// L4
console.log("Synchronous 4");
