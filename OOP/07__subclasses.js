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
}

// Subclass: Magainze
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

// Instantiate Magazine

const mag1 = new Magazine('Golf Digest', 'My Golf Spy', 2021, 'November');
console.log(mag1);
console.log(mag1.getSummary());
