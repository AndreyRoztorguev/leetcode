/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const length = nums.length;
  let count = 0;
  for (let i = 0; i < length; ) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      count++;
      i++;
    }
  }
  return count;
};
