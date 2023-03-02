/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map((elem)=> {
        return elem*elem
    }).sort((a,b)=> {
        return a-b
    })
};