function foo(N) {
  const res = [];
  let x_start = 0;
  let x_end = N - 1;
  let y_start = 0;
  let y_end = N - 1;
  let num = 1;
  let x = 0;
  let y = 0;

  while (num <= N * N) {
    res[y * N + x] = num;
    num++;

    // 在上边
    if (x < x_end && y === y_start) {
      x += 1;
      continue;
    }

    // 在右边
    if (x === x_end && y < y_end) {
      y += 1;
      continue;
    }

    // 在下边
    if (x > x_start && y === y_end) {
      x -= 1;
      continue;
    }

    // 在左边
    if (x === x_start && y > y_start + 1) {
      y -= 1;
      continue;
    }

    // 回到起点正下方
    if (x === x_start && y === y_start + 1) {
      x_start += 1;
      y_start += 1;
      x_end -= 1;
      y_end -= 1;
      x = x_start;
      y = y_start;
    }
  }

  return res;
}

console.log(foo(4));
