// değişken oluşturma 
// var const and let 
// doesn't matter if the variable is a float or integer type of it is always number 

var a = 6;
var b = 3.1;
var c = null
var d
var e =[1,2,3];

console.log(typeof a, typeof b, typeof d);
console.log(typeof c); //returns object not null
console.log(typeof e); //all referance typed variables returns object

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