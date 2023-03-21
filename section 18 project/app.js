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
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup", filterTodos);
}

function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    console.log(filterValue)
    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        
        //if the string that is filtered is not a index of the list items text content
        if(text.indexOf(filterValue) === -1 ) {
            listItem.setAttribute("style","display : none!important");
        }
        else {
            listItem.setAttribute("style","display : flex!important ");
        }
    })

}

function deleteTodo(e) {
    let todo = e.target.parentElement.parentElement //you reach to the li element with parentElement
    
    if(e.target.className === "fa fa-remove") { // deletes todos from UI
        todo.remove();  //then you remove it
        deleteTodoFromStorage(todo.textContent)
        showAlert("success","todo has been deleted successfuly")
    }
}

function deleteTodoFromStorage(deleteTodo) {
    let todos = getTodosFromStorage();
    todos.forEach((todo) => {
        if(todo === deleteTodo) {
            todos.splice(index,1); // we delete the value from the array of todos like this
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos)); //with this we update the todo array with the new one that no longer has the deleted value
}

function loadAllTodosToUI() {
    let todos = getTodosFromStorage();

    todos.forEach(function(todo) {
        addTodoToUI(todo);
    })
}

function addTodo(e) {
    const newTodo = todoInput.value.trim(); //trim gets rid of the excess whiespaces
    
    if (newTodo === "") {
        showAlert("danger","todo input is empty");
    }else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert ("success","you added a new todo")
    }

    e.preventDefault(); //to prevent from submitted form to renwe the page
}

function getTodosFromStorage() { //gets all the todos from storage
    let todos;
    if (!localStorage.getItem("todos")) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    return todos;
}

function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
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