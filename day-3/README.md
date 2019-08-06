## day-3

### Question

现有一数组 arr，如果数组的长度是 2 的倍数则返回'TWO-TIMES'，如果数组的长度是 3 的倍数则返回'THREE-TIMES'，如果数组长度既是 3 的倍数又是 5 的倍数则返回'COOL'，如果数组长度为 0 则返回'NO-NO'，否则返回'NO'

### 相关知识点

>     length: 数组长度
>     %: 取模操作

### Example1

```js
Input: [1, 3, 5, 9];
Output: 'TWO-TIMES';
```

### Example2

```js
Input: [11, 2, 5];
Output: 'THREE-TIMES';
```

### Example3

```js
Input: [1, 2, 3, 4, 5, 6];
Output: 'COOL';
```

### Example4

```js
Input: [3];
Output: 'NO';
```
