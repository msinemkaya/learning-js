console.log(document); 
//you can see what is there inside of the html
//document is in inside of the windows object

let value= document.all; 
//all html elements returns as a collection (Html Collection)

value = document.body; 
//you can call body directly like this

value = document.scripts;
value = document.links;
value = document.links[0].getAttribute("id");
value = document.links[0].id; //same as above 

console.log(value);


