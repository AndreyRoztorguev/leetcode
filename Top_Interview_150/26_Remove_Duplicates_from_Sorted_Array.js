/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const set = new Set(nums);
    nums.length = 0;
    nums.push(...Array.from(set));
    return nums.length;
};