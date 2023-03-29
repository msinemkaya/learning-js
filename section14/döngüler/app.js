const langs = ["a","b","c","d"];

langs.forEach(function(lang) {
    console.log(lang);
});

const a = [
    {name:"meliko" , age:21},
    {name:"hako", age:23}
];

const names = a.map(function(user){
    return user.name;
});

console.log(names);

const b = {
    name:"meliko",
    age:21
}

for (let key in b){
    console.log(key, b[key])
}

//if you were to use break it would only break from the inner loop to we use 
//labels and break (label is "outer" in this case) instead to break from the outer most loop
outer: for(let i = 0; i <3; i++){
    for(let j = 0; j<3; j++) {
        let input = prompt(`Value at coords (${i},${j})`, '');
        // if an empty string or canceled, then break out of both loops
    if (!input) break outer; 
    }
}
alert("done")