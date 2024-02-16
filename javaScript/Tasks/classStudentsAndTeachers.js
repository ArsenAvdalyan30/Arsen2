class Person {
  constructor({ firstName, lastName, gender, age } = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._gender = gender;
    this.age = age;
  }
  get firstNameName() {
    return this._firstName;
  }
  set firstNameName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }

  get gender() {
    return this._gender;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }

  toString() {
    return JSON.stringify(this);
  }
}

class Students extends Person {
  constructor({ programs, year, fee, ...rest } = {}) {
    super(rest);
    this.programs = programs;
    this.year = year;
    this.fee = fee;
  }

  get programs() {
    return this._programs;
  }
  set programs(value) {
    this._programs = value;
    this.data = {};
  }

  get year() {
    return this._year;
  }
  set year(value) {
    this._year = value;
  }

  get fee() {
    return this._fee;
  }
  set fee(value) {
    this._fee = value;
  }

  toString = function () {
    return JSON.stringify(this);
  };

  passExam = function (program, grade) {
    if (!this.programs.includes(program)) {
      return `${program} is wrong program!`;
    }
    if (grade >= 50) {
      this.data[program] = grade;
      if (
        Object.values(this.data).filter((elem) => elem >= 50).length ===
        this.programs.length
      ) {
        this.year++;
        this.programs = this.programs;
        return `${program} exam done! So all exams done!`;
      }
    }
  };
}

const student1 = new Students({
  firstName: "John",
  lastName: "Smith",
  gender: "male",
  age: 20,
  programs: ["Mathematics", "English", "JavaScript"],
  year: 1,
  fee: 500,
});

console.log(student1.data);
console.log(student1.passExam("Mathematics", 50));
console.log(student1.passExam("English", 40));
console.log(student1.passExam("JavaScript", 90));
console.log(student1.passExam("JavaScript", 70));
console.log(student1.passExam("Physics", 80));
console.log(student1.passExam("English", 60));
console.log(student1.data);
console.log(student1.programs);
student1.programs = ["Russian", "Astrology"];
console.log(student1.data);
console.log(student1.programs);
console.log(student1.year);
console.log(student1.toString());
