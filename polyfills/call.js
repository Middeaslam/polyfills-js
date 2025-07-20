let name = {
  firstName: 'john',
  lastName: 'doe'
};

function printFullName(hometown, country) {
  console.log(
    this.firstName + ' ' + this.lastName + ' from ' + hometown + ', ' + country
  );
}

printFullName.call(name, 'New York', 'USA'); // Output: john doe from New York, USA

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError(
      'Function.prototype.myCall - what is trying to be bound is not callable'
    );
  }

  context.fn = this;
  context.fn(...args);
  delete context.fn;
};

printFullName.myCall(name, 'Los Angeles', 'USA'); // Output: john doe from Los Angeles, USA
