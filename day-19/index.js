function convertStr(str) {
  return str.length < 5 ? str.toUpperCase() : str.toLowerCase();
}

console.log(convertStr('asdfDD1212f'));
console.log(convertStr('dDf'));
