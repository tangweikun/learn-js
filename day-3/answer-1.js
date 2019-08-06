function foo(arr) {
  if (arr.length === 0) return 'NO-NO';
  if (arr.length % 2 === 0 && arr.length % 3 === 0) {
    return 'COOL';
  }
  if (arr.length % 2 === 0) {
    return 'TWO-TIMES';
  }
  if (arr.length % 3 === 0) {
    return 'THREE-TIMES';
  }
  return 'NO';
}

console.log(foo([]));
