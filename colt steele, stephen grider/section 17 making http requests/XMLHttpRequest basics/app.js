/* 
XMLHttpRequest (XHR)
-original way of sending requests via js
-doesnt support promises only callbacks
-hard syntax to remember
*/

const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", () => {
  console.log("it works");
  /*
    if we werent using arrow function you could have use 
    this.responseText to get the response but since we do
    we can use firstReg.responseText 
  */
  const data = JSON.parse(firstReq.responseText); //we turn json into js
  console.log(data);
});
firstReq.addEventListener("error", () => {
  console.log("error");
});

firstReq.open("GET", "https://swapi.dev/api/planets/");
firstReq.send(); //browser does it just like setTimeout

console.log("request sent!");
