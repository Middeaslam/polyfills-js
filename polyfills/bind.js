let name = {
  firstName: 'Mahammad',
  lastName: 'Aslam'
};

function printFullName(hometown, country) {
  console.log(
    this.firstName + ' ' + this.lastName + ' from ' + hometown + ', ' + country
  );
}

const printMyFullName = printFullName.bind(name);
printMyFullName('Karachi', 'Pakistan'); // Output: Mahammad Aslam from Karachi, Pakistan

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError(
      'Function.prototype.myBind - what is trying to be bound is not callable'
    );
  }

  context.fn = this;

  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const myBoundFullName = printFullName.myBind(name, 'Lahore', 'Pakistan');
myBoundFullName(); // Output: Mahammad Aslam from Lahore, Pakistan

const multiply = function (a, b) {
  return a * b;
};

const multiplyByTwo = multiply.myBind(this, 2);
console.log(multiplyByTwo(5)); // Output: 10
