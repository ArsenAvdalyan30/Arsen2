class Employee {
  constructor({
    id,
    firstName,
    lastName,
    position,
    salary,
    workingHours,
  } = {}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.salary = salary;
    this.workingHours = workingHours;
  }
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }

  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
  }

  get salary() {
    return this._salary;
  }
  set salary(value) {
    this._salary = value;
  }

  get workingHours() {
    return this._workingHours;
  }
  set workingHours(value) {
    this._workingHours = value;
  }

  getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };

  getAnnularSalary = function () {
    return this.salary * 12;
  };

  raiseSalary = function (percent) {
    this.salary = (this.salary * percent) / 100 + this.salary;
    return this.salary;
  };
}

let user = new Employee({
  id: 10,
  firstName: "John",
  lastName: "Wick",
  position: "Programmer",
  salary: 200000,
  workingHours: 200,
});

console.log(user.id);
console.log(user.getFullName());
console.log(user.position);
console.log(user.salary);
console.log(user.workingHours);
console.log(user.getAnnularSalary());
console.log(user.raiseSalary(20));
console.log(user.salary);
