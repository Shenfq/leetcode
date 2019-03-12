给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。
请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。
你可以假设 nums1 和 nums2 不同时为空。


### 示例:

> nums1 = [1, 3]

> nums2 = [2]

> 中位数是 2.0

要求出两个数组的中位数，最简单的办法就是先合并，然后重新排序，但是通过这种方式没办法达到题目要求的时间复杂度。

首先我们需要知道什么是“中位数”，“中位数”就是排在中间的数。
假设现在一共有9个数，中位数就是第5个数，如果是10个数，那么中位数就是第5个数和第6个数的平均数。
找到两个数组的中位数就可以转化为，求两个数组中第 K 大的数，一共9个数就是找第5大的数。

```javascript
var = function findMedianSortedArrays (nums1, nums2) {
  const count = nums1.length + nums2.length
  // 判断奇偶
  if (count % 2 === 1) {
    return findKth(nums1, nums2, (count + 1) / 2)
  } else {
    return (
      (
        findKth(nums1, nums2, count / 2) +
        findKth(nums1, nums2, count / 2 + 1)
      ) / 2
    )
  }
}

```

现在要做的就是怎么实现 `findKth` 这个方法。下面分三步详细讲解这个方法。

#### 1️⃣ 分别取出两个数组的第 `k/2` 个数

#### 2️⃣ 比较两个数的大小，分为小于、大于、等于三种情况。

如果 `A[k/2 - 1] < B[k/2 - 1]`，表示 A 从 `0` 到 `k/2 - 1` 个数，在 A 和 B 合并后，肯定是小于第 k 个数。

假如 `A[k/2 - 1]` 比第 k 个数要大，那么 A 中至多就有 `k/2 - 1` 要小于 k ，且 `B[k/2 - 1] > A[k/2 - 1]` ，所以 B 中至多有 `k/2 - 1` 要小于 k 。那么小于 k 的数量最多为 `(k/2 - 1) * 2 = k - 2`。显然这是矛盾的，所以 A 中从 `0` 到 `k/2 - 1` 必然是小于第 k 个数的。

反之，如果 `A[k/2 - 1] > B[k/2 - 1]`，那么 B 从 `0` 到 `k/2 - 1` 个数肯定也是小于第 k 个数的。

如果两者相等，那么这个数就是要找的第 k 大个数。

#### 3️⃣ 如果是前两种情况，只需要进行递归

```javascript
// A[k/2] < B[k/2]
findKth(A.slice(k/2), B, k / 2)

// A[k/2] > B[k/2]
findKth(A, B.slice(k/2), k / 2)
```

#### 边界情况

- k可能是偶数也可能是奇数，所以 k/2 后进行取整为变量p，A取第 p 个数，B取`q = k - p`个数，进行比较。
- 每次需要判断 k / 2 是否大于A数组的长度，如果大于，则p改为A数组长度，所以需要确保A数组为偏小的数组。
- 如果 k 为 1 ，则取出 A[0] 和 B[0] 中偏小的数。
- A或B有一个数组为空，则取另一个数组的 `array[k - 1]` 即可。

根据上面的思路，每次都可以跳过 `k / 2` 个数，这样符合题目的时间复杂度。

### 具体代码：

```javascript
var findKth = function(A, B, k) {
  let lenA = A.length
  let lenB = B.length

  // 确保第一个数组偏小
  if (lenA > lenB) return findKth(B, A, k)
  if (lenA === 0) return B[k - 1]
  if (lenB === 0) return A[k - 1]
  // 如果 k 为1，则取出 A[0] 和 B[0] 中偏小的数
  if (k === 1) return A[0] < B[0] ? A[0] : B[0]

  let p = parseInt(k / 2) // k/2 进行取整
  p = p < lenA ? p : lenA
  let q = k - p

  if (A[p - 1] < B[q - 1]) {
    return findKth(A.slice(p), B, k - p)
  } else if (A[p - 1] > B[q - 1]) {
    return findKth(A, B.slice(q), k - q)
  } else {
    return A[p - 1]
  }
}
```




