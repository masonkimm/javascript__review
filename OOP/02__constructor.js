function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = () => {
    return `${this.title} was written by ${this.author} in ${year}`;
  };
}

// const book1 = new Book('Book One', 'John Doe', 2003);
// console.log(book1);
// console.log('title: ', book1.title);
// console.log('summary: ', book1.getSummary());

const book2 = new Book('Book Two', 'Jane Doe', 2020);
console.log(book2);
