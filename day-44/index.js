function foo(str) {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).toUpperCase() === str.charAt(i)) {
      res += str.charAt(i).toLowerCase();
    } else {
      res += str.charAt(i).toUpperCase();
    }
  }
  return res;
}

console.log(foo('aDD'));
