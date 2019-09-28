function findNumber(str) {
  const examine = /[0-9]/
  let res = examine.test(str)
  return res
}

console.log(findNumber('ddddgggggewkw.'))
