// TODO

function sorting(arr) {
  let x
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].age > arr[j].age) {
        x = arr[i]
        arr[i] = arr[j]
        arr[j] = x
      }
    }
  }
  return arr
}
console.log(
  sorting([
    { age: 1, name: 'a' },
    { age: 38, name: 'n' },
    { age: 7, name: 'h' },
    { age: 24, name: 'd' },
    { age: 12, name: 's' },
  ]),
)
