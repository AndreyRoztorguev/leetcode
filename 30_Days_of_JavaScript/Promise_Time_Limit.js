/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
      rej("Time Limit Exceeded");
    }, t);
  });
  return async function (...args) {
    return Promise.race([promise1, fn(...args)]);
  };
};

const fnExample = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};

const limited = timeLimit(fnExample, 50);
limited(5).catch(console.log);
