async function get3Pokemon() {
    const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
    const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
    const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");

    //instead of this
    /*
    const poke1 = await prom1;
    const poke2 = await prom2;
    const poke3 = await prom3;
    */

    //this is a better way
    const results = await Promise.all([prom1, prom2, prom3])//array with results
    
    printPokemon(results)
  }

function printPokemon(res){
    for(let pokemon of res){
        console.log(pokemon.data.name)
    }
}
  
  get3Pokemon();
  
