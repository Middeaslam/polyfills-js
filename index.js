const obj = {
  name: 'Alice',
  greet: function () {
    console.log(`Hello, ${this.name}`);
  }
};

const func = obj.greet;
func();
