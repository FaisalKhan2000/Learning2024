class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItemsLeft(index);
    return item;
  }

  unshift(item) {
    this.shiftItemsRight(0);

    this.data[0] = item;
    return item;
  }

  shift() {
    const item = this.data[0];
    this.shiftItemsLeft(0);
    return item;
  }

  // utility methods

  // [1,2,3] -> [2,3,3]
  shiftItemsLeft(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }

  // [1,2,3] -> [1,1,2,3]
  shiftItemsRight(index) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.length++;
  }

  // 1st  - 4 ,
}

const newArray = new MyArray();
newArray.push(20);
newArray.push(30);
newArray.push(20);
newArray.push(50);
console.log(newArray);
newArray.pop();
console.log(newArray);
newArray.delete(0);
console.log(newArray);
newArray.unshift(23);
console.log(newArray);
newArray.shift();
console.log(newArray);
