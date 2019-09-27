// HELP  the anwser is wrong
const initialArr = []
let i = 0
let j = 0
let element = 1
let round
function snakeMatrix(n) {
  for (round = n - 1; round >= 1; round -= 2) {
    right(round, i, j, element)
    bottom(round, i, j, element)
    left(round, i, j, element)
    top(round, i, j, element)
    i++
  }
  return initialArr
}
function right(round, i, j, element) {
  for (let c = 1; c <= round; c++) {
    initialArr[i][j++] = element
    element++
  }
}
function down(round, i, j, element) {
  for (let c = 1; c <= round; c++) {
    initialArr[i++][j] = element
    element++
  }
}
function left(round, i, j, element) {
  for (let c = 1; c <= round; c++) {
    initialArr[i][j--] = element
    element++
  }
}
function top(round, i, j, element) {
  for (let c = 1; c <= round; c++) {
    initialArr[i--][j] = element
    element++
  }
}

console.log(snakeMatrix(6))
