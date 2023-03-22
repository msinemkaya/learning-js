// how js works behind the scenes ? 
// call stack - it helps js to know and keep track of its place 
// like which fnction is running rn and which are not done yet

//call stack works like a stack as you can already guess 
//so last in first out 

const multiply = (x,y) => x*y;
const square = (x) => multiply(x,x);
const isRightTriangle = (a,b,c) => {
    return square(a) + square(b) === square(c);
};

isRightTriangle(3,4,5); // true

//first it calls square(3) and since it returns nothing it stacks on top of isRightTriangle(3,4,5)
//then square(3) calls multiply(3,3) because it doesnt have a return value to and multiply(3,3) stacks too
//and multiply(3,3) returns 9 and it gives the result to the square and below 
//so last in (multiply function) is first out (9)