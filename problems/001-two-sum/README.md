给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

#### 示例:

> 给定 nums = [2, 7, 11, 15], target = 9，因为 nums[0] + nums[1] = 2 + 7 = 9

> 返回 [0, 1]


### 解法一

利用 js 数组的 `indexOf` 方法进行求解。

1. 遍历数组
2. 用目标数减去当前数
3. 用 `indexOf` 方法判断差值是否在数组中，且和当前数所在位置不重叠

```javascript
const twoSum = function(nums, target) {
  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i]
    const other = target - num
    const idx = nums.indexOf(other)
    if (idx > 0 && i !== idx) {
      return [i, idx]
    }
  }

  return []
}
```

### 解法二

因为 `indexOf` 方法内部肯定也会对数组进行遍历，所以代码比较耗时。我们可以采用空间换时间的方法，构造一个 `map` 对象，遍历过程中，每次将出现过得数组放入 `map` 对象中，然后用目标数减去当前数，判断其差值是否存在 `map` 对象中，存在的话就表示找到了答案。

```javascript
const twoSum = function(nums, target) {
  // 空间换时间
  const tmp = {}
  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i]
    const other = target - num
    if (tmp[other] !== void 0) {
      return [i, tmp[other]]
    }
    tmp[num] = i
  }

  return []
}
```
