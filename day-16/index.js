function foo(arr) {
  if (arr.length === 0) {
    return 'EMPTY';
  }
  if (arr.every(n => n % 2 === 0)) {
    return 'EVEN';
  }
  if (arr.every(n => n % 2 === 1)) {
    return 'ODD';
  }
  return 'MIX';
}
