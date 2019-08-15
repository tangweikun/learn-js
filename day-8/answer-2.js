function betweenAge(arr) {
  return arr.filter(item => item.age < 30 && item.age > 18)
  var res = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].age < 30 && arr[i].age > 18) {
      res.push(arr[i])
    }
  }
  return res
}

console.log(
  betweenAge([
    { age: 14, name: 'a' },
    { age: 19, name: 'b' },
    { age: 32, name: 'c' },
  ]),
)
