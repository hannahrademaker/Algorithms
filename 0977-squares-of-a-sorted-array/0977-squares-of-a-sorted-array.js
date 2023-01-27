/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = []; 
    let left = 0; 
    let right = nums.length - 1; 
    let point = right; 
    
    while (left <= right){
        if (nums[left] ** 2 > nums[right]**2){
            result[point--] = nums[left++] ** 2;
        } else {
            result[point--] = nums[right--]**2
        }
    }
    return result
};