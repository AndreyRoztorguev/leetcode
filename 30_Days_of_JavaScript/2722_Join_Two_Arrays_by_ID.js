/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const res = {};
  const arr = [...arr1, ...arr2];
  for (const obj of arr) {
    const id = obj.id;
    if (res[id]) {
      res[id] = { ...res[id], ...obj };
    } else {
      res[id] = obj;
    }
  }
  return Object.values(res);
};

const arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
const arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];
console.log(join(arr1, arr2));

/**
 *
 *   VARIANT 2
 *
 */
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const result = {};

  // 1. initialization
  arr1.forEach((item) => {
    result[item.id] = item;
  });
  // 2. joining
  arr2.forEach((item) => {
    if (result[item.id]) {
      Object.keys(item).forEach((key) => {
        result[item.id][key] = item[key];
      });
    } else {
      result[item.id] = item;
    }
  });

  return Object.values(result);
};
