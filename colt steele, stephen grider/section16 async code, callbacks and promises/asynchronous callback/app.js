//we use callback functions to prevent our app from stopping until something finishes

console.log("first");
setTimeout(() => {
    console.log("third")
}, 3000);
console.log("second");

// based on what we know u would think that until the code starting on 4th line finishes
// code on 7th line couldnt get executed (so i meant in the order of "first" "third" "second") but 
//in reality if u look, it is printed as "first" "second" "third" at the console

//but how? 
//browser does that js is a language that is implemented in ur browser
// browsers usually are written in c++ so browsers arecapable of doing some things that js cant do (with Web APIs)
// js says browsers to "I need u to do that for me" and browsers takes over the job and when its done lets js know that its done
//so when browser finishes the tasks given, they return and pushed onto the stack (call stack) as callback

//so setTimeout is a browser function