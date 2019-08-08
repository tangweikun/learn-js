## day-9

### Question

将数组元素按 age 字段的值，从小到大排序

### Example1

```js
Input: [
  { age: 19, name: 'Jack' },
  { age: 5, name: 'Apple' },
  { age: 12, name: 'Lynn' },
  { age: 25, name: 'David' },
];
Output: [
  { age: 5, name: 'Apple' },
  { age: 12, name: 'Lynn' },
  { age: 19, name: 'Jack' },

  { age: 25, name: 'David' },
];
```

### Example2

```js
Input: [
  { age: 5, name: 'Apple' },
  { age: -12, name: 'Lynn' },
  { age: -19, name: 'Jack' },

  { age: 25, name: 'David' },
];
Output: [
  { age: -19, name: 'Jack' },
  { age: -12, name: 'Lynn' },
  { age: 5, name: 'Apple' },

  { age: 25, name: 'David' },
];
```
