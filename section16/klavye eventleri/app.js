const input = document.querySelector("#input");
const p = document.querySelector(".empty-p-element")

// only for the letters and numbers
document.addEventListener("keypress", run);

function run(e){
    console.log("naber"); //when you press any key event is executed
    console.log(e.which); //returns ascii value of the key pressed
    console.log(e.key); //returns the key you pressed
}

//keydown can read other keys too it detects it when you press it
//keyup is the same but detects the key when you stop pressing it

input.addEventListener("keyup", changeText);

function changeText(e){
    p.textContent = e.target.value;
}
// what you wrote on the input area shows inside of the empty p element