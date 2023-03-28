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
