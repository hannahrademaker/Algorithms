/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
   let i=0
   let j = s.length-1;
    while(j>i){
        let temp1=s[i];
        let temp2=s[j];
        s[j]=temp1;
        s[i]=temp2;
        i++;
        j--;
    }
    return s;
};