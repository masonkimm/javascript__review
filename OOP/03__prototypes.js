function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  // this.getSummary = () => {
  //   return `${this.title} was written by ${this.author} in ${this.year}`;
  // };
}

// Prototypes
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return years;
};

// Revise: change year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

// const book1 = new Book('Book One', 'John Doe', 2003);
// console.log(book1);
// console.log('title: ', book1.title);
// console.log('summary: ', book1.getSummary());

const book2 = new Book('Book Two', 'Jane Doe', 2020);
console.log(book2);
console.log(book2.getSummary());
console.log("book's age: ", book2.getAge());

book2.revise('2018');
console.log(book2);
