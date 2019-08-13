function foo(arr) {
  const res = {};

  for (let i = 0; i < arr.length; i++) {
    if (res[arr[i]]) {
      res[arr[i]] += 1;
    } else {
      res[arr[i]] = 1;
    }
  }

  return res;
}

console.log(foo(['a', 'b', 'a']));
