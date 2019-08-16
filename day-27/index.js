function foo(arr) {
  const filteredArr = arr.filter(
    num => arr.indexOf(num) !== arr.lastIndexOf(num),
  );
  return [...new Set(filteredArr)];
}

console.log(foo([1, 2, 2, 3, 1, 5]));
