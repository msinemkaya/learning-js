const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", function () {
  console.log("first request works");
  const data = JSON.parse(this.responseText);
  const filmURL = data.results[0].films[0];
  const filmReq = new XMLHttpRequest();
  filmReq.addEventListener("load", function () {
    console.log("second request works");
    const filmData = JSON.parse(this.responseText);
    console.log(filmData);
  });
  filmReq.addEventListener("error", function (e) {
    console.log(e);
  });
  filmReq.open("GET", filmURL);
  filmReq.send();
});
firstReq.addEventListener("error", () => {
  console.log("error");
});

firstReq.open("GET", "https://swapi.dev/api/planets/");
firstReq.send();

console.log("request sent!");

//since this is hard fetch was created