const a = ["slm",21,null,undefined,2.71];

//sort() method only looks at to the first value so
const nums = [12,34,5,26];

let value = nums.sort();
console.log(value); //you wil see 12, 26, 34, 5

//what you have to do is

value = nums.sort(function(x,y) {
    return x-y;
});