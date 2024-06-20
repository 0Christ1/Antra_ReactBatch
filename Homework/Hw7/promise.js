const fetchPosts = async () => {
  //fetch posts from "https://jsonplaceholder.typicode.com/posts"
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //return the posts
  const posts = await res.json();
  return posts;
};

// Test
// fetchPosts().then((posts) => {
//   console.log(posts);
// });

const fetchPostById = async (id) => {
  //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  //return the post
  const posts = await res.json();
  return posts;
};

// Test
// fetchPostById(5).then((post) => {
//   console.log(post);
// });

const sequentialPromise = async (promises, order) => {
  //if there is a rejected promise, throw an error, and stop executing the rest of the promises

  // create an array store the result
  const results = [];
  // check all promise in order
  for (let i = 0; i < order.length; i++) {
    // order starts from 1
    const index = order[i] - 1;
    try {
      // execute promises sequentially
      const promise = await promises[index];
      results.push(promise);
    } catch (error) {
      throw new Error(
        `Promise at the index ${index} failed because of ${error}`
      );
    }
  }

  //return the results in the order specified
  return results;
};

//Example:
// order = [2, 1, 3];
// promises = [
//   Promise.resolve('data1'),
//   Promise.reject('data2'),
//   Promise.resolve('data3'),
// ];
// sequentialPromise(promises, order)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//results = ["data2", "data1", "data3"]

// ################################ Promise method ####################################
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Async task 1');
    // reject('connection error');
  }, 500);
});
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Async task 2');
    reject('connection error');
  }, 1000);
});
const myPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Async task 3');
  }, 2000);
});

const myPromises = [myPromise1, myPromise2, myPromise3];

// Promise.all: execute all promises
Promise.all(myPromises)
  .then((res) => {
    console.log('Promise.all', res);
  })
  .catch((err) => {
    console.log(err, 'failed!');
  });

// Promise.allSettled: with status and value or reason
Promise.allSettled(myPromises)
  .then((res) => {
    console.log('Promise.allSettled', res);
  })
  .catch((err) => {
    console.log(err, 'failed!');
  });

// Promise.any: it's only taking the first successful promise
Promise.any(myPromises)
  .then((res) => {
    console.log('Promise.any', res);
  })
  .catch((err) => {
    console.log(err, 'failed!');
  });

// Promise.race: it's only care about the first one no matter s or f
Promise.race(myPromises)
  .then((res) => {
    console.log('Promise.race', res);
  })
  .catch((err) => {
    console.log(err);
  });
