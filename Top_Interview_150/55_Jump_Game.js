/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxReachable = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReachable) {
      return false; // Can't reach index i
    }

    maxReachable = Math.max(maxReachable, i + nums[i]);

    if (maxReachable >= nums.length - 1) {
      return true; // Can reach or exceed the last index
    }
  }

  return false;
};
