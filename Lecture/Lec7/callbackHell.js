// async kitchen
// ################################## Asynchronous #################################

// callback is a function
// function getBeef(callbackFn) {
//   // this would take 1s, blocking everything
//   // after one sec it gonna call callbackFn
//   setTimeout(() => {
//     const beef = "beef";
//     callbackFn(beef);
//   }, 1000);
// }

// function cookBeef(beef, callbackFn) {
//   setTimeout(() => {
//     if (beef == "beef") {
//       const patty = "patty";
//       callbackFn(patty);
//     }
//   }, 1000);
// }

// function getBun(callbackFn) {
//   setTimeout(() => {
//     const bun = "bun";
//     callbackFn(bun);
//   }, 1000);
// }

// function getLettuce(callbackFn) {
//   setTimeout(() => {
//     const lettuce = "lettuce";
//     callbackFn(lettuce);
//   }, 1000);
// }

// function makeBurger(patty, bun, lettuce, callbackFn) {
//   setTimeout(() => {
//     if (patty === "patty" && bun === "bun" && lettuce === "lettuce") {
//       const burger = "burger";
//       callbackFn(burger);
//     }
//   }, 1000);
// }

// //callbackFn is ()=>{}
// getBeef((beef) => {
//   console.log(beef);
//   cookBeef("beef", (patty) => {
//     console.log(patty);
//     getBun((bun) => {
//       console.log(bun);
//       getLettuce((lettuce) => {
//         console.log(lettuce);
//         makeBurger(patty, bun, lettuce, (burger) => {
//           console.log(burger, "ready to server");
//         });
//       });
//     });
//   });
// });

// ################################## Promise #################################

// JS Promise: asynchronous default
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("beef");
//   }, 1000);
// });

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("no beef");
//   }, 1000);
// });

function getBeef() {
  // this would take 1s, blocking everything
  // after one sec it gonna call callbackFn
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const beef = "beef";
      resolve(beef);
    }, 1000);
  });
}

function cookBeef(beef) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (beef == "beef") {
        const patty = "patty";
        resolve(patty);
      } else {
        reject("no beef available");
      }
    }, 1000);
  });
}

function getBun() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bun = "bun";
      resolve(bun);
    }, 1000);
  });
}

function getLettuce() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const lettuce = "lettuce";
      resolve(lettuce);
    }, 1000);
  });
}

function makeBurger(patty, bun, lettuce) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (patty === "patty" && bun === "bun" && lettuce === "lettuce") {
        const burger = "burger";
        resolve(burger);
      }
    }, 1000);
  });
}

function makeBurgerWithPromise() {
  let patty = null;
  let bun = null;

  getBeef()
    .then((beef) => {
      console.log(beef);
      return cookBeef(beef);
    })
    .then((_patty) => {
      console.log(patty);
      return getBun();
    })
    .then((_bun) => {
      console.log(bun);
      return getLettuce();
    })
    .then((lettuce) => {
      console.log(lettuce);
      return makeBurger("patty", "bun", "lettuce");
    })
    .then((burger) => {
      console.log(burger, "is ready to serve");
    })
    .catch((err) => {
      console.log("err", err);
    });
}

async function makeBurgerWithAsyncFunc() {
  try {
    const beef = await getBeef();
    console.log(beef);
    const patty = await cookBeef(beef);
    console.log(patty);
    const bun = await getBun();
    console.log(bun);
    const lettuce = await getLettuce();
    console.log(lettuce);
    const burger = await makeBurger(patty, bun, lettuce);
    console.log(burger);
  } catch (err) {
    console.log("err", err);
  }
}

// makeBurgerWithAsyncFunc();

// const p = new Promise((resolve, reject) => {
//   const beef = "beef";
//   resolve(beef);
// });

// p.then((beef) => {
//   console.log(beef);
//   return Promise.resolve(5);
// }).then((data) => {
//   console.log(data);
// });

//async func will always return a promise
async function foo() {
  return 5;
}

// fetch api using promise
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    // console.log("data", data);
  });

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  console.log(posts);
}

async function getTodos() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json(),
  );
}

// if I want to use await, I have to use it inside an async function
async function startApp() {
  const posts = await getPosts();
  const todos = await getTodos();
}

const getUsersInfoByIds = async (...userIds) => {
  const users = await Promise.all(
    userIds.map((userIds) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
        (res) => res.json(),
      );
    }),
  );
  return users;
};

getUsersInfoByIds();
