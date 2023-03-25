// axios is a library for making http requests
//unlike fetch we dont have to parse the data cus axios does that for us
axios.get("https://swapi.dev/api/planets/")
.then((res) => {
    console.log(res.data); //as u can see it is parsed
})
.catch((err)=>{
    console.log(err) //unlike fetch w/axios you dont need to check if response is ok or not 
    //catch will catch it anyways for you 
    //so you dont have to throw a new error fot it to catch
})