function filterMultipleOf3(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 !== 0) {
      res.push(arr[i]);
    }
  }

  return res;
}

console.log(filterMultipleOf3([1, 2, 3, 4, 5, 6]));
