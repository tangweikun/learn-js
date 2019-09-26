function foo(arr1, arr2) {
  const len = arr1.length + arr2.length;
  const mid =
    len % 2 === 0 ? [len / 2 - 1, len / 2] : [(len - 1) / 2, (len - 1) / 2];
  let i = 0;
  let j = 0;
  let count = 0;
  const res = [];

  while (count < len) {
    if (arr1[i] < arr2[j]) {
      if (count === mid[0]) {
        res[0] = arr1[i];
      }
      if (count === mid[1]) {
        res[1] = arr1[i];
      }
      i++;
    } else {
      if (count === mid[0]) {
        res[0] = arr2[j];
      }
      if (count === mid[1]) {
        res[1] = arr2[j];
      }
      j++;
    }

    count++;
  }

  return (res[0] + res[1]) / 2;
}

console.log(foo([1, 2, 3], [4]));
console.log(foo([1, 2, 3], [1, 2]));
console.log(foo([3, 5], [1, 2, 4, 9]));
