/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(str) {
   let start = 0; 
    let end = str.length-1; 
    while(start < end){
        [str[start], str[end]] = [str[end], str[start]]; 
        start++
        end--
    }
    return str
};