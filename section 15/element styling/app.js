const element = document.querySelector(".example-heading-class");

console.log(element.style);

element.style.color = "#bbb"; //changes the text color
element.style.marginLeft = "30px"; //gives margin left obvi
element.textContent = "hako";
element.innerHTML = "<b> meliko </b>"

const pElement = document.querySelectorAll(".example-p-class");
pElement.forEach((el) => el.style.color = "hotpink"); //makes every selected p element pink

const liElement = document.querySelectorAll("li:nth-child(2n)");
console.log(liElement); //gets all the li elements that are even