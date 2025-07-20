let name = {
  firstName: 'john',
  lastName: 'doe'
};

function printFullName(hometown, country) {
  console.log(
    this.firstName + ' ' + this.lastName + ' from ' + hometown + ', ' + country
  );
}

printFullName.apply(name, ['New York', 'USA']); // Output: john doe from New York, USA

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== 'function') {
    throw new TypeError(
      'Function.prototype.myApply - what is trying to be bound is not callable'
    );
  }

  if (Array.isArray(args) === false) {
    throw new TypeError(
      'Function.prototype.myApply - second argument must be an array'
    );
  }

  context.fn = this;
  context.fn(...args);
  delete context.fn;
};
