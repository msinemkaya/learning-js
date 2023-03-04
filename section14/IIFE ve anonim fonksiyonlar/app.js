//normal function
function merhaba() {
    return "merhaba"
}
console.log(merhaba());

//function expression
const mrb = function() {
    return "merhaba";
}
console.log(mrb());

//IIFE
(function(name){
    console.log("merhaba " + name)
})("meliko");
//it is being invoked as soon as it is declared