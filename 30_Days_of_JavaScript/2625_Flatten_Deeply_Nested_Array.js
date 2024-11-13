/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  if (n === 0) return arr;
  let flattedArray = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (Array.isArray(el) && n > 0) {
      flattedArray.push(...flat(el, n - 1));
      continue;
    }
    flattedArray.push(el);
  }

  return flattedArray;
};

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [13, 14, 15],
];

console.log(flat(arr, 2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
