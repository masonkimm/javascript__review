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

const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};

// getPosts();
createPost({ title: 'Post Three', body: 'This is post 3' }, getPosts);
