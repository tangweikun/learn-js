function uniq(arr) {
  const helper = [];
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (helper.findIndex(n => n === arr[i]) === -1) {
      res.push(arr[i]);
    }

    helper.push(arr[i]);
  }

  return res;
}

console.log(uniq([-2, 3, 3, 4]));
