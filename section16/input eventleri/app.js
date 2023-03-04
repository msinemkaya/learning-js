const input = document.getElementsByClassName("input");

// event is executed after the page is loaded
document.addEventListener("DOMContentLoaded", load);

function load(e) {
    console.log("page is loaded")
}

//focus as we used before is executed when you focus on the element
//blur is executed when you are out of focus

//paste 
input[0].addEventListener("paste", run); //we used index in here because getElementByClassName returns collection as mentioned before
//paste is executed when you paste something you copied to the target element
function run(e) {
    console.log(e.type)
}

//copy, cut, select - you can guess what they do