/*
async function getPlanets() {
    const res = await axios.get("https://swapi.dev/api/planets")
    console.log(res.data)
}
*/

//if there is an error axios.get will reject it but we dont have any ways to catch that reject -meaning we dont handle that error-
// so either we can use

//this is more of a backup to catch multiple potential errors
/*
getPlanets().catch((err) => {
    console.log("in catch" , err)
})
*/

//or 

//this is more spesific
async function getPlanets() {
    try {
        const res = await axios.get("https://swapi.dev/api/planets")
        console.log(res.data)
    }catch(e) {
        console.log("in catch",e )
    }
}