//为啥要null也要先判断
function justifyType(param) {
  if (param === null) return 'null'
  if (Array.isArray(param)) return 'array'
  return typeof param
}

console.log(justifyType(null))
