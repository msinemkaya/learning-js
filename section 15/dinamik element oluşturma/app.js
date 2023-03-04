const newElement = document.createElement("p");
const divElement = document.getElementsByClassName("example-div");

newElement.className = "new-element";
// newElement.textContent = "new p element" //not safe
// text content overrides already existing content

// text node

const text = document.createTextNode("text node");
divElement[0].appendChild(text)
//[0] is because if not use it it returns a HTML collection 
//if you specify the index it returns the element directly

newElement.appendChild(document.createTextNode("yeni p elementi"));
divElement[0].appendChild(newElement);

console.log(divElement[0])

//replaceChild(new,old) replaces elements