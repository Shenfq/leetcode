/**
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。
 * 请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。
 * 你可以假设 nums1 和 nums2 不同时为空。
 * 示例 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * 中位数是 2.0
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/*
// 该解法只是进行了简单的求中位数，达不到时间复杂度 O(log (m+n))
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = [...nums1, ...nums2]
  const length = arr.length
  arr = arr.sort((a, b) => a - b)
  if (length % 2 === 0) {
    return (arr[length / 2] + arr[length / 2 - 1]) / 2
  } else {
    return arr[(length - 1) / 2]
  }
};
*/

var findMedianSortedArrays = function(nums1, nums2) {
  // 找到 A，B 数组中，第 k 小的数
  var findKth = function(A, B, k) {
    let lenA = A.length,
        lenB = B.length
    if(lenA > lenB)
        return findKth(B, A, k)
    if(lenA < 1)
      return B[k-1]
    if(lenB < 1)
      return A[k-1]
    if(k === 1)
      return A[0] < B[0] ? A[0] : B[0]

    let p = Math.floor(k / 2)
    p = p < lenA ? p : lenA
    let q = k - p

    if (A[p-1] < B[q-1]) {
      return findKth(A.slice(p), B, k - p)
    } else if (A[p-1] > B[q-1]) {
      return findKth(A, B.slice(q), k - q)
    } else {
      return A[p-1]
    }
  }

  const count = nums1.length + nums2.length
  // 判断奇偶
  if (count % 2 === 1) {
      return findKth(nums1, nums2, (count + 1) / 2)
  } else {
      return (
        findKth(nums1, nums2, count / 2) +
        findKth(nums1, nums2, count / 2 + 1)
      ) / 2
  }
};

console.log(
  findMedianSortedArrays(
    [2,3,4],
    [1]
  )
)
