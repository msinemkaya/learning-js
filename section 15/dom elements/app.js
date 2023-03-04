let value;

const ulElement = document.querySelector(".example-ul-element");
const liElement = document.querySelector(".example-li-element:nth-child(2)");

//child nodes - including "text"

value = ulElement.childNodes; //what is that "text" node that comes ?
value = ulElement.childNodes[0]; //it counts those line breaks as a node too

// children - only childrens

value = ulElement.children;
value = ulElement.firstElementChild.textContent = "you can get the first child element like that";


//sibling

value = liElement.previousElementSibling; 
value = liElement.nextElementSibling;

console.log(value);