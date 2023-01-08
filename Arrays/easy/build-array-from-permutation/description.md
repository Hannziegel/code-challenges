
https://leetcode.com/tag/array/

https://leetcode.com/problems/build-array-from-permutation/


Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

 

Example 1:

Input: nums = [0,2,1,5,3,4]
Output: [0,1,2,4,5,3]
Explanation: The array ans is built as follows: 
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
    = [0,1,2,4,5,3]
Example 2:

Input: nums = [5,0,1,2,3,4]
Output: [4,5,0,1,2,3]
Explanation: The array ans is built as follows:
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
    = [4,5,0,1,2,3]
 

Constraints:

1 <= nums.length <= 1000
0 <= nums[i] < nums.length
The elements in nums are distinct.
 

Follow-up: Can you solve it without using an extra space (i.e., O(1) memory)?



/* 
   ----==== Concepts learned ====----
    First I tryed using newArr = nums, but the problem with that is the newArr was getting
    the reference of the nums array in the memory, not the actual number.Before concat I 
    just tested using a new loop to push the values inside the array, then that solved the 
    problem. After that I search in google hot to store the array and find out the concat 
    method.

   ----==== Pseudo Code ====----
    // create newArr = nums (increase space complexity)
    // loop throug the newArr, newArr[newArr[i]] (loop -> increase times complexity)
    // 

   ----==== BigO Notion ====----
   Time  =  
   Space = 

   ----==== Thinking Process ====----
    // debug console.log(nums, newArr)
    // debug inside loop console.log(nums[i], newArr[newArr[i]])
    // nums [5,0,1,2,3,4] || newArr [ 5,0,1,2,3,4] || 
    // 1 º i=0 ->  nums [0](5) = newArr[newArr[0](5)](4)
    // 2 º i=0 ->  nums [1](0) = newArr[newArr[1](0)](5)
    // 6º -> nums[5](4) = nums[4] (3)
*/