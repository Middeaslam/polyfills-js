const throttle = (func, limit) => {
  let lasExecuted = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lasExecuted >= limit) {
      lasExecuted = now;
      return func.apply(this, args);
    }
  };
};
