function sum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }

  return res;
}

console.log(sum([1, 2, 3]));
