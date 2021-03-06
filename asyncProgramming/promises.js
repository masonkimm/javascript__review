const posts = [
  {
    title: 'Post One',
    body: 'This is post 1',
  },
  {
    title: 'Post Two',
    body: 'This is post 2',
  },
];

const getPosts = async () => {
  await setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = true;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
};

createPost({ title: 'Post Three', body: 'This is post 3' })
  .then(getPosts)
  .catch((err) => console.log(err));

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'GoodBye');
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(
  (res) => res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
