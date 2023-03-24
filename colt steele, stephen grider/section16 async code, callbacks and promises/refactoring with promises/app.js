const btn = document.querySelector("button");

const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        reject({bodyBoundary,elRight,amount});
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

moveX(btn, 300, 1000)
  .then(() => {
    return moveX(btn, 300, 1000);
  })
  .then(() => {
    return moveX(btn, 300, 1000);
  })
  .then(() => {
    console.log("done moving");
  })
  .catch(({bodyBoundary,elRight,amount})=> {
    console.log(`body is ${bodyBoundary}px wide`)
    console.log(`element is at ${elRight}px , ${amount}px is too big`)
  });
