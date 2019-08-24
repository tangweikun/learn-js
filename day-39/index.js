/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0];
  let current = nums[0];

  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, current + nums[i], nums[i]);
    current = Math.max(current + nums[i], nums[i]);
  }

  return max;
};

console.log(maxSubArray([1, 2, 3, -3, 7, -5]));
