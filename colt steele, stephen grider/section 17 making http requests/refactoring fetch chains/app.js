const checkStatusAndParse = (response) => {
  if (!response.ok) {
    throw new Error(`status code error: ${response.status}`);
  }
  return response.json();
};

const printPlanets = (data) => {
  for (let planet of data.results) {
    console.log(planet.name);
  }
  //but since this doesnt return any promises .then() chain would be broken
  return Promise.resolve(data.next);
  //this way you return a promise
};

const fetchNextPlanets = (url) => {
  return fetch(url);
};

fetch("https://swapi.dev/api/planets/")
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch((err) => {
    console.log(err);
    console.log("smth went wrong with fatch");
  });
