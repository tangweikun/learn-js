//如何将arguments对象转为数组
function useArguments() {
  let res = [].slice.call(arguments).reduce(function(pre, later) {
    return pre + later
  })
  return res
}

console.log(useArguments(1, 3, 6, 7, 8))
