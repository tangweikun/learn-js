function sortAge(arr) {
  arr.sort((x, y) => x.age - y.age);

  return arr;
}

console.log(
  sortAge([
    { age: 5, name: 'Apple' },
    { age: -12, name: 'Lynn' },
    { age: -19, name: 'Jack' },

    { age: 25, name: 'David' },
  ]),
);
