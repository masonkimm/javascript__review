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
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
};

// createPost({ title: 'Post Three', body: 'This is post 3' })
//   .then(getPosts)
//   .catch((err) => console.log(err));

const init = async () => {
  await createPost({ title: 'Post Three', body: 'This is post 3' });
  // waits until 'await' gets done to move onto the next function
  getPosts();
};

init();

// With fetch(API)
const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
};

fetchData();
