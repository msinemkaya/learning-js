const input = document.getElementById("example-input");

input.onfocus = function() {
    console.log("focused")
}

input.addEventListener("focus", function(e){
    console.log("same thing but used more like that")
    console.log(e.type) //gives you the type of the event
    console.log(e.target) //gives you the element that is effected from the event
})

// e.preventDefault() prevents the default behaviour of the event 