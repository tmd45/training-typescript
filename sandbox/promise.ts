const promise: any = (x: number) =>
  new Promise((resolve: (_: string) => void, reject: any) => {
    if (x >= 0) {
      resolve(`${x} is positive number`);
    } else {
      reject(`${x} is negative number`);
    }
  });

promise.then((value: any) => {
  return "finished!";
});
