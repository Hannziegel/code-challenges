/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var buildArray = function(nums) {
    newArr = [].concat(nums); 
    for(let i =0; i < newArr.length; i++) {
        nums[i] = newArr[newArr[i]];
    };
    return nums
};

// Case 1
buildArray([0,2,1,5,3,4]); // [0,1,2,4,5,3]
// Case 2
buildArray([5,0,1,2,3,4]); // [4,5,0,1,2,3]
