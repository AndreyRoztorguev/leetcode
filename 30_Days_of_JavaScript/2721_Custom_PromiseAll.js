/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const functionLength = functions.length;
    const result = Array(functionLength).fill(undefined);
    let completedPromises = 0;
    for (let i = 0; i < functionLength; i++) {
      functions[i]()
        .then((res) => {
          result[i] = res;
          completedPromises++;
          if (completedPromises === functionLength) {
            resolve(result);
          }
        })
        .catch((e) => reject(e));
    }
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
