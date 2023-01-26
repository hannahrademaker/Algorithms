/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let tempArr = []; 
    nums.map((val, i)=>{
        tempArr.push(i>0 ? val + tempArr[i-1] : val); 
    })
    return tempArr
};