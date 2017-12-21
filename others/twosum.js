/*
  https://leetcode.com/problems/two-sum/description/
  
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].
*/

function findNumbers(nums, target) {
  var missingNumbers = {};
  var indices = [];
  for (var i = 0; i < nums.length; i++) {
  	var num = nums[i];
    if (missingNumbers[num] || missingNumbers[num] === 0) {
      indices = [missingNumbers[num], i];
      return indices;
    }
    const missingNo = target - nums[i];
    missingNumbers[missingNo] = i;
  }
  return indices;
}

console.log(findNumbers([2, 1, 6, 3, 11, 15], 9));