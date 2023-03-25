
fetch("https://swapi.dev/api/planets/")
.then((response) => {

    if(!response.ok){
        throw new Error (`status code error: ${response.status}`)
    }
    return response.json() // as we know this is a promise too
})
.then((data) => {
    //fetched all the planets
    const filmUrl = data.results[0].films[0];
    return fetch(filmUrl)
})
.then((response) => {

    if(!response.ok){
        throw new Error (`status code error: ${response.status}`)
    }
    return response.json()
})
.then((data) => {
    //fetched first film based off of first planet
    console.log(data.title)
}) 
.catch((err) => {
    console.log(err)
    console.log("smth went wrong with fatch")
})
