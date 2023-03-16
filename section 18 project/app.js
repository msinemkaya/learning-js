const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();
//all event listeners
function eventListeners() {
    form.addEventListener("submit", addTodo);
}

function addTodo(e) {
    const newTodo = todoInput.value.trim(); //trim gets rid of the excess whiespaces
    
    if (newTodo === "") {
        showAlert("danger","todo input is empty");
    }else {
        addTodoToUI(newTodo);
        showAlert ("success","you added a new todo")
    }

    e.preventDefault(); //to prevent from submitted form to renwe the page
}

function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert);
    
    // deletes the alert after 1 second
    setTimeout(() => {
        alert.remove();
    }, 1000);
}

function addTodoToUI(newTodo) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(newTodo)); // it appends the new todo that we added with creating a new text node 
    // you have to crate a text node you cant pass newtodo directly
    //we dont use textContent because it would delete the i element we added
    listItem.appendChild(link);
    todoList.appendChild(listItem); //we added li to ul
    todoInput.value = ""; // to clear iput area after adding a task
}   