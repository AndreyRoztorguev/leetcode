/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const smb = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const current = smb[s[i]];

    if (i < s.length - 1 && current < smb[s[i + 1]]) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
};

console.log(romanToInt("MCMXCIV"));
