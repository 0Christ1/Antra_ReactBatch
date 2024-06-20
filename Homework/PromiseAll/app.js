const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Async task 1");
    reject('connection error');
  }, 500);
});
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log("Promise failed");
// });

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Async task 2');
  }, 1000);
});
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log("Promise failed!");
// });

const myPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Async task 3');
  }, 2000);
});
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log("Promise failed!");
// });

const myPromises = [myPromise1, myPromise2, myPromise3];

// Promise.all
Promise.all(myPromises)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err, 'failed!');
  });

console.log('######');

// Promise.allSettled: with status and value or reason
Promise.allSettled(myPromises)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err, 'failed!');
  });

console.log('######');

// Promise.any: it's only taking the first successful promise
Promise.any(myPromises)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err, 'failed!');
  });

console.log('######');

// Promise.race: it's only care about the first one no matter s or f
Promise.race(myPromises)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
