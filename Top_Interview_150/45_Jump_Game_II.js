/**
 * @param {number[]} nums
 * @return {number}
 */

var jump = function (nums) {
  if (nums.length <= 1) return 0;

  let jumps = 0;
  let currentEnd = 0; // The farthest point that can be reached with the current number of jumps
  let farthest = 0; // The farthest point we can reach with the next jump
  let length = nums.length;

  for (let i = 0; i < length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentEnd) {
      jumps++; // Increment the number of jumps
      currentEnd = farthest; // Update the current end to the farthest we can reach

      // If we can reach or go beyond the last index, break out of the loop
      if (currentEnd >= length - 1) {
        break;
      }
    }
  }
  return jumps;
};
