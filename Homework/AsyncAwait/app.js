// L1
// console.log("Synchronous 1");

// L2
setTimeout(() => {
  // console.log(`Timeout 2`);
}, 0);

// L3
Promise.resolve().then(() => {
  // console.log("Promise 3");
});

// L4
// console.log("Synchronous 4");

// Promise
// const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");

// promise
//   .then((res) => res.json())
//   .then((user) => {
//     throw new Error("uh oh");
//     return user;
//   })
//   .then((user) => {
//     console.log(":)", user.title);
//   })
//   .then((err) => {
//     console.log(":(", err);
//   });

// console.log("Synchronous");

// create promises
const tick = Date.now();
const log = (v) => {
  console.log(`${v} \n Elapsed: ${Date.now() - tick}`);
};

const codeBlocker = () => {
  // let i = 0;
  // while (i < 10000000000) {
  //   i++;
  // }
  // return "billion loops done";

  // return new Promise((resolve, reject) => {
  //   let i = 0;
  //   while (i < 10000000000) {
  //     i++;
  //   }
  //   resolve("billion loops done");
  // });

  return Promise.resolve().then(() => {
    let i = 0;
    while (i < 10000000000) {
      i++;
    }
    return "billion loops done";
  });
};
// log("Synchronous 1");
// log(codeBlocker());
// log("Synchronous 2");

// Basic: use async
const getFruit1 = async (name) => {
  const fruits = {
    pineapple: "1",
    peach: "2",
    strawberry: "3",
  };
  return fruits[name];
};
// getFruit1("peach").then(console.log);

// use promise return
const getFruit2 = (name) => {
  const fruits = {
    pineapple: "1",
    peach: "2",
    strawberry: "3",
  };

  return Promise.resolve(fruits[name]);
};

// getFruit2("peach").then(console.log);

// Async + Await: await pause the execution
const makeSmoothie1 = async () => {
  const a = await getFruit1("pineapple");
  const b = await getFruit2("strawberry");
  return [a, b]; // 1s + 1 s
};

// makeSmoothie1().then(log);

// regular promise
const makeSmoothie2 = () => {
  let a;
  return getFruit1("pineapple")
    .then((v) => {
      v = a;
      return getFruit2("strawberry");
    })
    .then((v) => {
      [v, a];
    });
};

// makeSmoothie2().then(console.log);

// use promise.all
const makeSmoothie3 = async () => {
  const a = getFruit1("pineapple");
  const b = getFruit2("strawberry");
  const smoothie = Promise.all([a, b]); // tell all promises in the array to run concurrently
  return smoothie; // double the speed of the original func
};

// makeSmoothie3().then(log);

// error handling in async way
// const badSmoothie = async () => {
//   try {
//     const a = getFruit1("pineapple");
//     const b = getFruit2("strawberry");
//     const smoothie = Promise.all([a, b]);
//     throw "broken!";
//   } catch (error) {
//     console.log(error);
//   }
// };

// badSmoothie()
//   .then((val) => {
//     console.log({ val });
//   })
//   .then((err) => {
//     console.log({ err });
//   });

// nice way
const fruits = ["peach", "pineapple", "strawberry"];
const smoothie = fruits.map(async (v) => {
  const emoji = await getFruit1(v);
  // log(emoji);
  return emoji;
});

const fruitLoop1 = async () => {
  for (const fruit of fruits) {
    const emoji = await getFruit1(fruit);
    log(emoji);
  }
};
// fruitLoop1();

const fruitLoop2 = async () => {
  for await (const emoji of smoothie) {
    log(emoji);
  }
};
// fruitLoop2();

const fruitInspection = async () => {
  if ((await getFruit1("peach")) === "2") {
    console.log("looks peachy");
  }
};
// fruitInspection();
