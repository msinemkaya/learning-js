// değişken oluşturma 
// var const and let 
// doesn't matter if the variable is a float or integer type of it is always number 

var a = 6;
var b = 3.1;
var c = null
var d
var e =[1,2,3];
var f = NaN

console.log(typeof a, typeof b, typeof d);
console.log(typeof c); //returns object not null
console.log(typeof e); //all referance typed variables returns object
console.log(typeof f) //returns number ???

var f = 10;
var g = f;
console.log(f,g);
f = 30;
console.log(f,g);
//only f changed because g only looks into the value of f 
//not to the place it contains in the memory


var h = [1,2,3];
var i = h;

h.push(6);
console.log(i);
//this one does not look into the h directly it looks up to the place h references to
// so as a result i is changing when h changes

//We can put any type in a variable. For example, a variable can at one moment be a string and then store a number
let message = "hello";
message = 123456;
//Programming languages that allow such things, such as JavaScript,
// are called “dynamically typed”, meaning that there exist data types,
// but variables are not bound to any of them.

//NaN is sticky. Any further mathematical operation on NaN returns NaN
// there is an exception tho NaN ** 0 is 1

console.log(NaN ** 0)

/*
    You may also come across another syntax: typeof(x). It’s the same as typeof x.  
    To put it clear: typeof is an operator, not a function. The parentheses here aren’t a part of typeof. 
    It’s the kind of parentheses used for mathematical grouping
*/

//Some languages (namely PHP) treat "0" as false. But in JavaScript, a non-empty string is always true.

