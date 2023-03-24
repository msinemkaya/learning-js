// fetch supports promises but is not supported on internet explorer

/*
    The fetch() method takes one mandatory argument, 
    the path to the resource you want to fetch. 
    It returns a Promise that resolves to the Response to that request 
    --mdn fetch api
*/

//if u run this code on console u will see that u get a promise back
fetch("https://swapi.dev/api/planets/")
.then((response) => {

    if(!response.ok){
        //console.log("error", response.status)
        throw new Error (`status code error: ${response.status}`)
        //and then catch() catches the error so you become being able to use it
    }

    /*
        console.log(response)
        you will see in Response object there is body:ReadableStream
        what is this ?
        it is a stream of byte data and is the key difference from using xhr
        content of the response is in the form of readable stream
        with doing response.json() we read that stream to completion.
        but it takes time since its async(meaning it takes time) so json() returns a promise too
    */
   response.json().then((data) => {
    for(let planets of data.results) {
        console.log(planets.name)
    }
   })

})
.catch((err) => {
    console.log(err)
    console.log("smth went wrong with fatch")
})
/*
    The Promise returned from fetch() won't reject on HTTP error status even if the response is an HTTP 404 or 500.
    Instead, it will resolve normally (with ok status set to false),
    and it will only reject on network failure or if anything prevented the request from completing.
    -mdn fetch api
    sooo it wont catch the error like that
    fetch only looks if you got a response or not and since 
    404 is a response too it will not see it as an error
    what you can do is at 14th line
*/