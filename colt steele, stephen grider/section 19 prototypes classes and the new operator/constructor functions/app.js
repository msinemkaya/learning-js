//why is factory function is not commonly used ? and why do we use constructor pattern instead?

//when we did use factory functions all the colors we created had a unique copy
//of the functions we created (color.hex and color.rgb) in them but it was a bit unnecessary
//as we saw before on prototypes every array for example gets its built in methods on prototype array object
//so what i mean is
/*
    black.hex === firstColor.hex //would return false
    "hako".slice === "meliko".slice //would return true
*/
//since slice method is not a unique copy but is one function that is located in prototype

/*
    The new operator lets developers create an instance 
    of a user-defined object type or of one of the built-in 
    object types that has a constructor function.
*/

//starts with a capital letter to show it is a constructor function
function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this); //refers to the window object so how do we use this in tle up 3 lines ?
    //now that we use new keyword this returns the Color we created
}

Color.prototype.rgb = function() {
        const {r,g,b} = this
        return`rgb(${r},${g},${b})`
    }

//answer is lying within new operator
//with new :
/*
    creates a blank plain js object
    sets the constructor of this object to another object
    passes newly created object from step 1 as the "this" context
    returns this if the function doesnt return its own object

    so in shor it does what we did with factory functions behind the scenes
*/
const color1 = new Color(66,66,66)
const color2 = new Color(6,66,66)
console.log(color1.rgb === color2.rgb) //and now it returns true
//since it is not creating a new copy for each color but now is referencing to the same place


//under the __proto__ there is a constructor property set to color (2nd step)