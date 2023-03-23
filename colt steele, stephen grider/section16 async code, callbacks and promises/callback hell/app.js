const btn = document.querySelector("button");

// setTimeout(() => {
//     btn.style.transform = `translateX(100px)`;
//     setTimeout(() => {
//         btn.style.transform = `translateX(200px)`;
//     }, 1000);
// }, 1000);

const moveX = (element, amount, delay, onSuccess, onFailure) => {
  const bodyBoundary = document.body.clientWidth;
  const elRight = element.getBoundingClientRect().right;
  //getBoundingClientRect() gives x and y axis and width and height of the element
  const currLeft = element.getBoundingClientRect().left;

  if (elRight + amount > bodyBoundary) {
    onFailure();
  } else {
    setTimeout(() => {
      element.style.transform = `translateX(${currLeft + amount}px)`;
      onSuccess();
    }, delay);
  }
};

//thats how you nest it
// moveX(btn, 100, 1000, () =>
//   moveX(btn, 100, 1000, () =>
//     moveX(btn, 100, 1000, () =>
//       moveX(btn, 100, 1000, () =>
//         moveX(btn, 100, 1000, () => moveX(btn, 100, 1000))
//       )
//     )
//   )
// );

moveX(
  btn,
  100,
  1000,
  () => {
    moveX(
      btn,
      100,
      1000,
      () => {
        console.log("success");
      },
      () => {
        alert("cant go");
      }
    );
  },
  () => {
    alert("cant go");
  }
);

//it will go on like that so it will look ugly and hard to understand so nesting callbacks are hard like this
//so we use promises for this

request;
