const arr = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const myEvenNumbers = arr.myFilter((num) => num % 2 === 0);
console.log(myEvenNumbers); // Output: [2, 4]
