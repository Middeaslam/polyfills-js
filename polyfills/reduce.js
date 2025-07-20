const arr = [1, 2, 3, 4, 5];

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log('Sum of array elements:', findSum(arr)); // Output: 15

// const findSumUsingReduce = arr.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
// console.log('Sum of array elements using reduce:', findSumUsingReduce); // Output: 15

// const findMax = (arr) => {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// console.log('Max of array elements:', findMax(arr)); // Output: 5

// const findMaxUsingReduce = arr.reduce((accumulator, currentValue) => {
//   if (currentValue > accumulator) {
//     accumulator = currentValue;
//   }
//   return accumulator;
// }, 0);

// console.log('Max of array elements using reduce:', findMaxUsingReduce); // Output: 5

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator === undefined) {
      accumulator = this[i];
    } else {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

const findSumUsingMyReducer = arr.myReduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log('sum of array elements using myreducer', findSumUsingMyReducer);
