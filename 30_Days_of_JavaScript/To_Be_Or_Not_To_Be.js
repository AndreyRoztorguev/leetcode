/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: function (val1) {
      if (val1 === val) return true;
      throw Error("Not Equal");
    },
    notToBe: function (val1) {
      if (val1 !== val) return true;
      throw Error("Equal");
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */