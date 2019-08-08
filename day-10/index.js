function putFirst(arr, n) {
  const removed = arr[n];
  arr.splice(n, 1);
  arr.unshift(removed);

  return arr;
}

console.log(putFirst([1, 22, 3], 2));
