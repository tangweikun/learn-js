function foo(arr) {
  let start = arr[0];
  let end = arr[0];
  let res = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 === arr[i]) {
      end = arr[i];
    } else {
      res.push(start === end ? String(start) : `${start}~${end}`);
      start = arr[i];
      end = arr[i];
    }
  }

  return res.concat(start === end ? String(start) : `${start}~${end}`);
}

console.log(foo([1, 2, 4, 5, 7, 8, 11]));
