//Optional chaining (?.)
/*
    The optional chaining ?. stops the evaluation 
    if the value before ?. is undefined or null and returns undefined.
*/

let user = {}; //an emty object

//console.log(user.address.street) 
//since the adress is undefined there is no street to reach from "undefined" so it fails with an eror
//Uncaught TypeError: Cannot read properties of undefined (reading 'street')

//to prevent that we can use
console.log(user.address ? user.address.street : undefined)
//but if there is more object the chain would be so long, hard to read, and repeating itself

//or we can use this
console.log(user.address && user.address.street && user.address.street.name)
//but for the same reasons it would be bad

//SO INSTEAD 
console.log(user?.address?.street)