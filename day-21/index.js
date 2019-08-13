function foo(money) {
  return `￥${money.toLocaleString()}`;
}

console.log(foo(88888.88));
