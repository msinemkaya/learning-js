// == compares if equal for value
console.log(2 == "2"); //true
//returns true because it looks if two of them has the same value or not
//and since their types are not the same it changes the one that is integer to a string too


// === compares if equal for both value and type
console.log(2 === "2"); //false 

//ternary is shorthand version of if statement
// a ? "do this" : "do that"

//There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.

//null === undefined //false
//null == undefined //true

//lowecase letters > capital letters 

//since or returns the first truthy first alert will not be printed 
//but the second one will be printed and doing it like so is called "short-circuit"
true || alert("will not be printed")
false || alert("will be printed")

//&& finds the first falsy || finds the first truthy
// ?? returns the first not null or undefined value (so first defined value)