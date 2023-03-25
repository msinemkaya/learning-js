//async functions ALWAYS return a promise
//if the function returns a value promise will be resolved with that value
//otherwise if function throws an exception it will be rejected

// function getData() {
//     const data = axios.get("https://swapi.dev/api/planets/") //returns a promise
// }

async function greet() {
  return "hi";
}

//you can attach a then() to the greet() since it returns a promise
greet().then((val) => {
  console.log("promise is resolved with", val);
});

async function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "x and y must be numbers";
  }
  return x + y;
}

add("h", "m")
  .then((val) => {
    console.log("promise resolved with", val);
  })
  .catch((err) => {
    console.log("promise rejected with", err);
  });
