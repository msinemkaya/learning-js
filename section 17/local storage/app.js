// local storage stored the data as long as your computer is open 

localStorage.setItem("hako", "meliko");
localStorage.setItem("hako bebek", 50); 
//even if you give integer it converts it to string on its own

const value = localStorage.getItem("hako bebek");
console.log(typeof value); //returns string

//clearing local storage
//localStorage.clear();

const todo = ["todo1","todo2","todo3"];

localStorage.setItem("todo",JSON.stringify(todo))
// this way it behaves like an array rather than a string

const value2 = JSON.parse(localStorage.getItem("todos"));
console.log(value2)
//this way it returns the values behaving like an array.


const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addTodo);

function addTodo(e) {
    const value = todoInput.value;

    let todos;

    if ( localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);
    localStorage.setItem("todos", JSON.stringify(todos))

    e.preventDefault(); // to prevent from renewing the page when submitted
}