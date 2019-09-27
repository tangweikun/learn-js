//忘记你的对象的方法了，找了半天还是不知道怎么操作属性名
function repeatElement(arr) {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) !== -1) continue
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) res.push(arr[i])
  }
  return res
}

console.log(repeatElement([1, 3, 4, 5, 5, 5, 6, 6, 3]))
