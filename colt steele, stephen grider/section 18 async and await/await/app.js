//we can use await only with async functions
//await will pause the execution of the function and wait for a promise to be resolved

//insted of doing it like this
/*
function getPlanets() {
   return axios.get("https://swapi.dev/api/planets")
}

getPlanets.then((res) => {
    console.log(res.data);
})
*/

async function getPlanets() {
  const res = await axios.get("https://swapi.dev/api/planets");
  console.log(res.data);
}

//normally axios.get returns a promise as we know but if you try to console.log(res.data)
//you will get undefined becuse promise has not been resolved yet.
//if you put await tho, console.log(res.data) will wait until the promise is resolved
//so you will become able to use the data

//but where does it resolve?
/*
    the value that resolved normally is passed to then()
    but in this scenario it will be stored in the variable -res in this example-
    and we ll get access to it.
*/

getPlanets();
