let element;

element = document.getElementsByClassName("example-heading-class"); //colleciton
element = document.getElementById("example-heading-id"); //element
element = document.getElementsByTagName("h1");


//query selector - returns only 1 element - just like css selectors

element = document.querySelector("#example-heading-id");
element = document.querySelector(".example-heading-class");

// query selector all 
element = document.querySelectorAll(".example-heading-class"); //NodeList 
//NodeList is smth in between html collection and array 
//unlike html collection you can use forEach on them

console.log(element);