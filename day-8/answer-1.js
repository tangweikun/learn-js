function findAdult(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > 18 && arr[i].age < 30) {
      res.push(arr[i]);
    }
  }

  return res;
}

console.log(
  findAdult([
    { age: 18, name: 'a' },
    { age: 28, name: 'b' },
    { age: 3, name: 'c' },
  ]),
);
