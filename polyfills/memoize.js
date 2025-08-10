function sum(a, b) {
  return a + b;
}

function memoize(fn) {
  let cache = {};

  return function (...args) {
    let key = JSON.stringify(args);
    if (cache[key]) {
      console.log('Fetching from cache:', key);
      return cache[key];
    } else {
      console.log('Calculating result for:', key);
      let result = fn.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}

const memoizedSum = memoize(sum);
console.log(memoizedSum(1, 2, 3)); // Calculating result for: [1,2]
console.log(memoizedSum(1, 2)); // Fetching from cache: [1,2]
console.log(memoizedSum(2, 3)); // Calculating result for: [
