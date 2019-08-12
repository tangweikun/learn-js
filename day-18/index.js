function continuousInteger(arr) {
  if (arr.length < 2) {
    return arr.length;
  }

  let res = 1;
  let currentLength = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      currentLength += 1;
      res = Math.max(res, currentLength);
    } else {
      currentLength = 1;
    }
  }

  return res;
}

console.log(continuousInteger([1, 2, 3, 5, 6, 7, 8, 9]));
