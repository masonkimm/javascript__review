// Object of protos

const bookProtos = {
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge() {
    const years = new Date().getFullYear() - this.year;

    return `${this.title} is ${years} year(s) old`;
  },
};

// Create Obj
const book1 = Object.create(bookProtos);
book1.title = 'Harry Potter';
book1.author = 'J.K. Rowling';
book1.year = 1991;

console.log(book1);
console.log(book1.getAge());
console.log(book1.getSummary());

// Create Obj II
const book2 = Object.create(bookProtos, {
  title: { value: 'Book One' },
  author: { value: 'Mr.Miagi' },
  year: { value: 2009 },
});

console.log(book2);
console.log(book2.getAge());
console.log(book2.getSummary());
