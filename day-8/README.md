## day-8

### Question

现有数组由若干对象组成，查找数组对象中 age 大于 18 同时 age 小于 30 的 对象

### 相关知识点

>     &&：且关系

> 对象

### Example1

```js
Input: [{ age: 18, name: 'a' }, { age: 28, name: 'b' }, { age: 3, name: 'c' }];
Output: [{ age: 28, name: 'b' }];
```

### Example2

```js
Input: [
  { age: 18, name: 'a' },
  { age: 28, name: 'b' },
  { age: 23, name: 'c' },
  { age: 35, name: 'd' },
];
Output: [{ age: 28, name: 'b' }, { age: 23, name: 'c' }];
```
