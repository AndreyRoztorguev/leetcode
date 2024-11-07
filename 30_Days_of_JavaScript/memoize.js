function memoize(fn) {
  const sum = new Map();
  return function (...args) {
    const key = args.join("-");
    if (sum.has(key)) {
      return sum.get(key);
    }
    const value = fn(...args);
    sum.set(key, value);
    return value;
  };
}
const sum = (a, b) => a + b;

const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 2));
console.log(memoizedSum(2, 2));
