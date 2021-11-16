function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Prototypes
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Magazine constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

// Inherit Protoype (has to be above mag instantiation)
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Obj
const mag1 = new Magazine('Golf Digest', 'My Golf Spy', 2021, 'November');
console.log(mag1);

// Inherit Protoype (Does Not Work)
// Magazine.prototype = Object.create(Book.prototype);

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1.getSummary());
