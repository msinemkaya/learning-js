//bubbling

document.querySelector(".bigger-div").addEventListener("click",function(e) {
    console.log("bigger div");
});

document.querySelector(".div").addEventListener("click",function(e) {
    console.log("div");
});
// when you click to the element inside of the div it still triggers the click event on the div
// so what you do to child still counts as you did it to the parent (parent catches the event too)
//this is called event bubbling

//event capturing (delegation)
const bigDiv = document.querySelector(".bigger-div");

bigDiv.addEventListener("click", run);

function run(e){
    console.log("hello")
}

//in this case what you do on parent affects the child too


//Event Capturing is opposite to event bubbling, where in event capturing, an event moves from the outermost element to the target. Otherwise, in case of event bubbling, the event movement begins from the target to the outermost element in the file.