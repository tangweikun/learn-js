function sum(arr, N) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }

  return res * N;
}

console.log(sum([1, 2, 3], 2));
