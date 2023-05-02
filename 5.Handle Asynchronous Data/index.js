let a = 10;
let b = 0;

let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    b = 30;
    resolve(b);
  }, 2000);
});

waitingData.then((data) => {
  console.log(a + data);
});
