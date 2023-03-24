const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Hako" },
          { id: 6, username: "Meliko" },
        ],
        "/users/1": {
          id: 1,
          username: "Hako",
          upvotes: 66,
          city: "Aydın",
          topPostId: 636363,
        },
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data }); //resolve with a value
      } else {
        reject({ status: 404 }); //reject with a value
      }
    }, 1000);
  });
};

fakeRequest("/users").then((res) => {
  const id = res.data[0].id; //obvious enough id of this object { id: 1, username: 'Hako' }
  //we use fakeRequest() inside fakeRequest() for the reason being you can reach the id inside of the first fakeRequest() only
  //so you nest it
  fakeRequest(`/users/${id}`).then((res) => console.log(res));
})
//and ideally if it was a real request you would catch the error like that 
//but you have to put another catch for every level on the nesting
//because .catch cannot catch the errors that might happen inside of other .thens
.catch((err) => {
    console.log(err);
});

//so instead of nesting it you can do 

fakeRequest("/users").then((res)=> {
    const id = res.data[0].id
    return fakeRequest(`/users/${id}`)
})
.then((res) => console.log(res))
.catch((err) => {
    console.log(err);
});

//this way .then is on the same level as the first one so you prevent nesting
//and you would only write one .catch and it would catch the errors that might happen 
//on all the .thens

