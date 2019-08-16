function foo(arr1, arr2) {
  return arr1.concat(arr2);
}

// function foo(arr1, arr2) {
//   return [...arr1, ...arr2];
// }

console.log(foo([1, 2, 5], [3, 4]));
