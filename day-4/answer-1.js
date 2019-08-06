function foo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 !== 0) {
      return false;
    }
  }

  return true;
}
