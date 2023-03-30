//syntactic sugar is a cleaner way of writing something that behind the scenes doing the job for us.

//just like constructor methods class names starts with a capital letter too
class Color {
  constructor(r, g, b, name) {
    this.r = r; //this will refer to the individual object
    this.g = g;
    this.b = b;
  }
  greet() {
    return `hello from ${this.name}`;
  }
  rgb() {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  }
}

const c1 = new Color(66, 66, 66, "meliko");

/*
  If you come from another programming language, then you are probably used to the idea of a "bound this", 
  where methods defined in an object always have this referencing that object.
  In JavaScript this is “free”, its value is evaluated at call-time and 
  does not depend on where the method was declared, but rather on what object is “before the dot”.
*/