/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // define the length
  const len = nums.length;
    // start at 0, until i is less than length, increase 1
  for(i = 0; i < len; i++) {
      // if i is greater than nums length - 1, break
    if(i > nums.length - 1) {
      break;
    }
      // if i is equal to value, splice
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};