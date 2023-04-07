/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    //start the pointers at the beginning and end of the array
    let left = 0; 
    let right = nums.length - 1;
    let position = [-1, -1];
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            right = mid - 1;
        }
    }
    
    if (left >= nums.length || nums[left] !== target) {
        position[0] = -1;
    } else {
        position[0] = left;
    }
    
    left = 0;
    right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    if (right < 0 || nums[right] !== target) {
        position[1] = -1;
    } else {
        position[1] = right;
    }
    
    return position;
    
    
};

