/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums.length <= 1) return;
  k = k % nums.length; // if k= 5 nums.length = 2 so k % nums.length = 1 because 5 / 2 = 2 and 1 remain
  const els = nums.splice(nums.length - k, k);
  nums.unshift(...els);
};
