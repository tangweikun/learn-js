/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let max = 0;
  let res = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= max * 2) {
      res = i;
      max = nums[i];
      continue;
    }

    if (nums[i] >= max) {
      res = -1;
      max = nums[i];
      continue;
    }

    if (nums[i] * 2 > max) {
      res = -1;
    }
  }

  return res;
};

console.log(dominantIndex([0, 0, 1, 2]));
