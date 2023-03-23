//promise is an js object 
// representing failure or completion of an async operation
// think it as a promise to give a value

const willDo = new Promise((resolve, reject) => {
    //if you dont resolve or reject a promise its statuse will be stay as pending
    //reject(); or resolve();
    const rand = Math.random();
    if(rand<0.5) {
        resolve();
    }
    else {
        reject();
    }
})

// .then() - it helps the code to run if the promise is resolved
// .catch()- will run if the promise is rejected
willDo.then(() => {
    console.log("code is resolved")
}).catch(() => {
    console.log("::::(((")
})