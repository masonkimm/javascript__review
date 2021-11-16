class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} year(s) old`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  static topBookStore() {
    console.log('Barnes & Noble');
  }
}

// Instantiate Obj
const book1 = new Book('Golf Monthly', 'My Golf Spy', 2019);

// console.log(book1);
// console.log(book1.getSummary());
// console.log(book1.getAge());
// book1.revise(1991);
// console.log(book1);

// for static
Book.topBookStore();
