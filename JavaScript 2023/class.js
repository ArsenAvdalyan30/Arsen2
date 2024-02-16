class User {
  constructor({ name, birthday, lastName, profession, experienceYears } = {}) {
    this.name = name;
    this.lastName = lastName;
    this.birthday = birthday;
    this.profession = profession;
    this.ExperienceYears = experienceYears;
  }
  get age() {
    let todayYear = new Date().getFullYear();
    return todayYear - this.birthday.getFullYear();
  }
  get fullName() {
    return `${this.name} ${this.lastName}`;
  }
  set fullName(value) {
    [this.name, this.lastName] = value.split(" ");
  }
}

let user1 = new User({
  name: "Arsen",
  lastName: "Avdalyan",
  birthday: new Date(1992, 8, 27),
  profession: "programmer",
  experienceYears: 2,
});

user1.name = "ynger";
user1.fullName = "Alice Cooper";
console.log(user1.fullName);

class Teacher extends User() {
  super() {
    
  }
}