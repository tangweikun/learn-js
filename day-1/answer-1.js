function doubleArr(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] * 2);
  }

  return res;
}

console.log(doubleArr([2, 3, 4]));
