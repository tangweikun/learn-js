// function foo(num) {
//   return String(num)
//     .split('')
//     .reverse()
//     .join('');
// }

function foo(num) {
  let res = '';
  while (num > 0) {
    const str = num % 10;
    res += str;
    num = Math.floor(num / 10);
  }
  return res;
}

console.log(foo(1234));
