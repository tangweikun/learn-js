function isAllNumPositive(arr) {
  if (arr.length === 0) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      return false;
    }
  }

  return true;
}

console.log(isAllNumPositive([-2, 3]));
