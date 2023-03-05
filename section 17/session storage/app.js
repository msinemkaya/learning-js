//session storage is storing data as long as your browser is open 

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItems);

function addItem(e) {    
    sessionStorage.setItem(addkey.value, addvalue.value) 
    // when you hit add it adds your keys and values value to the session storage
}
function deleteItem(e) {    
    sessionStorage.removeItem(deletekey.value)
    //it deletes the item according to the key name you entered
}
function clearItems(e) {    
    sessionStorage.clear()
    //it removes all 
}