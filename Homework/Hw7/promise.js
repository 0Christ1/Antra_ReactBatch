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
