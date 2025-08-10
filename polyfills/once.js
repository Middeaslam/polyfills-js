function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

// Example usage
function add(a, b) {
  return a + b;
}

const addOnce = once(add);
console.log(addOnce(2, 3)); // Output: 5
console.log(addOnce(4, 5)); // Output: 5 (does not call
