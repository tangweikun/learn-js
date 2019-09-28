function transform(str) {
  arr = str.replace(/^-/, '').split('-')

  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1)
  }

  return arr.join('')
}

console.log(transform('-dhue-rherhrh-hehe'))
