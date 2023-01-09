/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation1 = function(nums) {
    let ans = [].concat(nums);
    for(let i = 0; i < nums.length; i++) {
        ans.push(nums[i]);
    };
    return ans;
};

var getConcatenation2 = function(nums) {
    const length = nums.length;
    for(let i = 0; i < nums.length; i++) {
        nums.push(nums[i]);
    };
    return nums;
};


var getConcatenation3 = function(nums) {
    return [...nums, ...nums];
};
