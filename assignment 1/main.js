function fibs(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const fibArray = [0, 1];
  for (let i = 0; i < n - 2; i += 1) {
    fibArray.push(
      fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
    );
  }
  return fibArray;
}

console.log(fibs(8));

function fibsRec(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const smallerArray = fibsRec(n - 1);
  return smallerArray.concat([
    smallerArray[smallerArray.length - 1] +
      smallerArray[smallerArray.length - 2],
  ]);
}
// could replace smallerArray.length with n-1

console.log(fibsRec(8));
