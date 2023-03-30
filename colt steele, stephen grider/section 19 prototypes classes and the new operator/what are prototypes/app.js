/*
    prototypes are the mechanism by which js objects 
    inherit features from one another 
    objects can have a prototype object which acts as a template object
    --mdn
*/    

/*
    what does it mean?
    so for example we have array functions like .push .pop .lenght ect.
    and prototype is the template object for arrays to access to these methods
    those methods are not defined on arrays but is defined on the prototype object
    and each array has reference to that prototype ( __proto__ )
*/

//we can create our won prototypes too like that

//accessing prototype object for every string and creating a new one called meliko
String.prototype.meliko = () => alert("my own prorotype")

const hako = "hhk";
hako.meliko();

//and we can overwrite existing ones too

//The assignment to F.prototype sets up [[Prototype]] for new objects, but it does not affect the existing ones.