function foo(param) {
  if (param === null) return 'null';
  if (Array.isArray(param)) return 'array';
  return typeof param;
}
