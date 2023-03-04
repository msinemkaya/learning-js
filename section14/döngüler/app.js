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