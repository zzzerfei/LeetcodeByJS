/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  // 二分查找
  let len = nums.length
  let left = 0, right = len - 1
  for(let i = 0; i <= len; i++) {
    let mid = left + Math.floor((right - left) / 2)
    if(target < nums[mid]) {
      right = mid - 1
    } else if(target > nums[mid]){
      left = mid + 1
    } else {
      return mid
    }
  }
  return -1
};