/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const length = arr.length;
  const result = new Array(length);
  for (let i = 0; i < length; i++) {
    result[i] = fn(arr[i], i);
  }
  return result;
};
