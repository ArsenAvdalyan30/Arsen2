class Jungle {
  constructor(energy = 20) {
    this.energy = energy;
    this.soundOff = true;
  }
}

class Animal extends Jungle {
  constructor(energy = 20, soundOff) {
    super(energy, soundOff);
  }
  sound() {
    if (!soundOff) {
      this.energy -= 3;
    } else {
        console.log('soundOFF')
    }
  }
  eat() {
    this.energy += 5;
  }
  sleep() {
    this.energy += 10;
  }
}

class Food {}

class Tiger extends Animal {}

class Monkey extends Animal {}

class Snake extends Animal {}

class Fish extends Food {}

class Grain extends Food {}

class Meat extends Food {}
