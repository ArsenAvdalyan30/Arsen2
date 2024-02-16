class Author {
  constructor({ name, email, gender } = {}) {
    this.name = name;
    this.email = email;
    this._gender = gender;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }

  get email() {
    return this._email;
  }
  set email(value) {
    this._email = value;
  }

  get gender() {
    return this._gender;
  }
}

const newAuthor = new Author({
  name: "John",
  email: "JohnSmith@gmail.com",
  gender: "male",
});

console.log(newAuthor);

class Book {
  constructor({ title, author, price, quantity } = {}) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }

  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }

  get author() {
    return this._title;
  }
  set author(value) {
    this._author = value;
  }

  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }

  get quantity() {
    return this._quantity;
  }
  set quantity(value) {
    this._quantity = value;
  }

  get author() {
    return this._author;
  }
  set author(value) {
    if (value instanceof Author) {
      this._author = value;
    } else {
      console.log("Please input a valid author.");
    }
  }

  getProfit = function () {
    return this.price * this.quantity;
  };
}

const book1 = new Book({
  title: "You don't know js",
  author: new Author({
    name: "John",
    email: "JohnSmith@gmail.com",
    gender: "male",
  }),
  price: 20000,
  quantity: 5,
});
console.log(book1);
console.log(book1.getProfit());
