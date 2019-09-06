function toMoney(str) {
  const slogan = '¥'
  let arr = str.split('')
  const len = arr.findIndex(n => n === '.')
  if (len === -1) {
    if (arr.length < 4) {
      return slogan.concat(str)
    } else {
      for (let i = arr.length - 3; i >= 0; i -= 3) {
        arr.splice(i, 0, ',')
      }
      return slogan.concat(arr.join(''))
    }
  } else {
    for (let i = len - 3; i >= 0; i -= 3) {
      arr.splice(i, 0, ',')
    }
    return slogan.concat(arr.join(''))
  }
}

console.log(toMoney('28475.4947'))

console.log(toMoney('28475877485.848474'))
