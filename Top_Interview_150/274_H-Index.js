/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => b - a);
  let count = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      count++;
    } else {
      break;
    }
  }
  return count;
};
