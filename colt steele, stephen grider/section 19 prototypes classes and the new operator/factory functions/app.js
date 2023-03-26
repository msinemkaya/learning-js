// function hex(r, g, b) {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r, g, b) {
//   return `rgb(${r},${g},${b})`;
// }


//this function starts with an empty object and we add some properties
//based off of arguments we provided then we add some methods and return that object back
//this is what factory function is

//this is one way of making objects based off of a pattern or a recipe
function makeColor(r, g, b) {
  const color = {};
  
  color.r = r;
  color.g = g;
  color.b = b;

  color.rgb = function () {
      const { r, g, b } = this; //this refers to the color object
      return `rgb(${r},${g},${b})`;
    };
  color.hex =function() {
      const { r, g, b } = this;
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
    
    return color;
}

const firstColor = makeColor(66, 66, 66);
console.log(firstColor)

//but this is not the main way most people create objects based off of a pattern