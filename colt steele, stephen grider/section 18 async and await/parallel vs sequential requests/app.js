//it is a sequential request
//meaning you will not get the next pokemons information unless the first one is
//finished -resolved- but since these 3 requests have nothing to do with each other
//on a dependency aspect they dont need to wait on eachother

/*
async function get3Pokemon() {
    const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1")
    const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2")
    const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3")
    console.log(poke1.data)
    console.log(poke2.data)
    console.log(poke3.data)
}
*/

//parallel request
//we are not using the await when we are sending the request
//so we send the requests approx at the same time
//but we wait for the response

//IMPORTANT
/*
    const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1")
    in this poke1 is not representing the promise itself
    when you put await it waits for the resolved value and stores the RESOLVED VALUE in the variable
    so poke1 is a response in this case

    BUT

    const poke1 = axios.get("https://pokeapi.co/api/v2/pokemon/1")
    in this poke1 is representing the promise itself since axios.get() returns a promise
    and you dont use await to resolve it    
*/

async function get3Pokemon() {
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  const poke1 = await prom1;
  const poke2 = await prom2;
  const poke3 = await prom3;
  console.log(poke1.data);
  console.log(poke2.data);
  console.log(poke3.data);
}
get3Pokemon();

function changeBodyColor(color,delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

//we use sequential here because we want other color to come after the other is resolved

async function lightShow(){
    await changeBodyColor('teal', 1000);
    await changeBodyColor('pink', 1000);
    await changeBodyColor('red', 1000);
    await changeBodyColor('lightblue', 1000);
}


//in parallel it would be like that
//it is directly going to the last color since they all start executing the promise
//at the same time

/*
async function lightShow(){
    const p1 = changeBodyColor('teal', 1000);
    const p2 = changeBodyColor('pink', 1000);
    const p3 = changeBodyColor('red', 1000);
    const p4 = changeBodyColor('lightblue', 1000);
   
    await p1;
    await p2;
    await p3;
    await p4;    
}
*/
lightShow()