class Pet {
  constructor(name, age) {
    console.log("in pet constructor")
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }
}

//since they dont have a constructor they look at the parent constructor
class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log("in cat constructor")
    super(name, age); //this way we use the constructor of the Pet class
    this.livesLeft = livesLeft;
  }
  meow() {
    return "meow";
  }
}

class Dog extends Pet {
  bark() {
    return "bark";
  }

  eat() {
    return `${this.name} is eating too`;
  }
}

const mia = new Cat("mia", 1);
const zeytin = new Dog("zeytin", 2);
console.log(mia.eat());
//so you can overwirte the functions on the parent
console.log(zeytin.eat());
