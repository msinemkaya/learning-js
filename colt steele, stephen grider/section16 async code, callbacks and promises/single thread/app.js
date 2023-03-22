//js is single threaded so that means it can do one thing at a time

console.log("first")
alert("hello")
console.log("second")

//what happens is second wont work until u interact with alert
//because it can do only one thing at at time as we said

//if you send a request to an API because you will have to wait for server to respond to ur request and wont be able to do anything else until u get the responce
// so it would take time and you would have to wait with ur code doing nothing until the request is finished and you get the responce
// but for that to not happen we use async codes