/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {
    // Set endIndex to the index of the last element in the array.
    //this acts as a pointer looking at the last element. 
    let endIndex = nums.length - 1;
    // Set the pointer startIndex to the index of the first element in the array
    let startIndex = 0;
    
    // Loop through the array from startIndex to endIndex
    //while current index is less than or equal to end index, increment the current
    //index that starts at 0
    for (let currentIndex = 0; currentIndex <= endIndex; currentIndex++) {
        // If the current element is 0, swap it with the element at startIndex
        if (nums[currentIndex] === 0) {
            //this swaps the value of the two indexes
            [nums[currentIndex], nums[startIndex]] = [nums[startIndex], nums[currentIndex]];
            // Increment startIndex to keep track of the position of the last 0
            startIndex++;
        } else if (nums[currentIndex] === 2) {
            // If the current element is 2, swap it with the element at endIndex
            [nums[currentIndex], nums[endIndex]] = [nums[endIndex], nums[currentIndex]];
            // Decrement endIndex and decrement currentIndex to check the swapped element
            endIndex--;
            currentIndex--;
        }
    }
};
