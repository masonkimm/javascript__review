// const s1 = 'hello';
// console.log('type: ', typeof s1);

// const s2 = new String('Hello');
// console.log('type: ', typeof s2);

// console.log('window: ', window);

// console.log(window.navigator.appVersion);

// Object Literal
const book1 = {
  title: 'Book One',
  author: 'John Doe',
  year: '2013',
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

// console.log(book1);
// console.log('title: ', book1.title);
console.log(book1.getSummary());

const book2 = {
  title: 'Book Two',
  author: 'Jane Doe',
  year: '2020',
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
console.log(book2.getSummary());
console.log('keys: ', Object.keys(book2));
console.log('values: ', Object.values(book2));
