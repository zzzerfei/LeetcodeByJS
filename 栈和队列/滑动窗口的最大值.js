/* 
  剑指 Offer 59 - I. 滑动窗口的最大值
  给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  /*   
    // 暴力算法 
    const res = []
    const len = nums.length
    if(!len) return res
    for(let i = 0; i <= len - k; i++) {
      const temp = []
      for(let j = i; j < i + k; j++) {
        temp.push(nums[j])
      }
      res.push(Math.max(...temp))
    }
    return res 
  */

  // 单调队列
  const len = nums.length
  if(!len) return []
  const q = []
  for(let i = 0; i < k; i++) {
    while(q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop()
    }
    q.push(i)
  }
  // console.log(q); // [1, 2]
  const res = [nums[q[0]]]
  for(let i = k; i < len; i++) {
    while(q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop()
    }
    q.push(i)
    while(q[0] <= i - k) q.shift()
    res.push(nums[q[0]])
  }
  return res
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
console.log(maxSlidingWindow(nums, k));