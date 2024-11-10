/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const chunks = [];

  if (arr.length === 0) return [];

  if (arr.length < size) {
    return [arr];
  }
  if (size === 1) {
    arr.forEach((el) => chunks.push([el]));
    return chunks;
  }
  const length = Math.ceil(arr.length / size);
  let start = 0;
  let nextIndex = size;

  for (let i = 0; i < length; i++) {
    chunks.push(arr.slice(start, nextIndex));
    start = nextIndex;
    nextIndex = start + size;
  }
  return chunks;
};

// tests
const arr = [1, 2, 3, 4, 5];
const size = 3;

console.log(chunk(arr, size));
