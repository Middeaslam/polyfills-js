let name = {
  firstName: 'Mahammad',
  lastName: 'Aslam'
};

function printFulName() {
  console.log(this.firstName + ' ' + this.lastName);
}

const printMyFullName = printFulName.bind(name);
printMyFullName(); // Output: Mahammad Aslam
