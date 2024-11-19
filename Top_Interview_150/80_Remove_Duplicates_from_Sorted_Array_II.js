/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length; // Early exit if array is already small enough
  let i = 2; // Pointer that keeps track of the last allowed position for elements
  for (let j = 2; j < nums.length; j++) {
    // Pointer to iterate through the array
    // If the current element is different from the element two places behind
    if (nums[j] !== nums[i - 2]) {
      nums[i] = nums[j]; // Place the element at the next allowed position
      i++; // Increment the slow pointer to track the next allowed position
    }
  }
  // Return the length of the modified array, which is `i`
  return i;
};

// 2
var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;
  const map = new Map();
  for (let i = 0; i < nums.length; ) {
    const item = nums[i];
    if (!map.has(item)) {
      map.set(item, 1);
    }
    if (map.get(item) > 2) {
      nums.splice(i, 1);
    } else {
      map.set(item, map.get(item) + 1);
      i++;
    }
  }
  return Array.from(map.values()).reduce((acc, item) => {
    return (acc += item);
  }, 0);
};

// 3

var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;
  const map = {};
  for (let i = 0; i < nums.length; ) {
    const item = nums[i];
    if (!map[item]) {
      map[item] = 1;
    }

    if (map[item] > 2) {
      nums.splice(i, 1);
    } else {
      map[item] = map[item] + 1;
      i++;
    }
  }
  return Object.values(map).reduce((acc, item) => {
    return (acc += item);
  }, 0);
};
