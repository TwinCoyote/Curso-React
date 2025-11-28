const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
    reject(`El Truco se perdio`);
  }, 2000);
});

myPromise
  .then((myMoney) => {
    console.log(`Tengo mi dinerito de vuelta ${myMoney}`);
  })
  .catch((reason) => {
    console.warn(reason);
  });
