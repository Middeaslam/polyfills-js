let arr = [1, 2, 3, 4];

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

const mySquared = arr.myMap((num) => num * num);
console.log(mySquared);
