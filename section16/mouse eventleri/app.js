const div = document.querySelector(".empty-div");
const title = document.querySelector(".title");

//title.addEventListener("click", run);

// double click
//title.addEventListener("dblclick", run);

//mouse down - when you click and continue to do so
title.addEventListener("mousedown", run); 
//mouse down works as soon as you click on something (right,left or middle click)
//click is a combination of mouse down and up so it is executed
// when a full click action is completed(left click)

function run(e) {
    console.log(e.type)
}

//mouseover is executed when your curser goes over to an element
//mouseout is when you stop being over on an element

div.addEventListener("mouseover", run);
//it triggers the mouseover event again when your curser goes over to the child elements too

//mouse enter and mouse leave 
//unlike mouse over it is not triggered when you go inside the child elements 
div.addEventListener("mouseenter", run);