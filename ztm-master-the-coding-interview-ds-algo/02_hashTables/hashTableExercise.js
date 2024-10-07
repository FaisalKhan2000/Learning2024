class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // O(1)
  set(key, value) {
    const address = this._hash(key);

    // there could be collisions as in hash tables there is a fixed memory space
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]); //
    return this.data;
  }

  // O(1)
  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];

    // [ [ 'apples', 9 ], [ 'grapes', 10 ] ]
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          // 'apples'

          return currentBucket[i][1]; // 9
        }
      }
    }
    return undefined;
  }

  // O(n)
  keys() {
    const keysArray = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }

    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("apples", 9);
myHashTable.set("grapes", 10);
myHashTable.set("banana", 5);
myHashTable.get("apples");

console.log(myHashTable.data);
console.log(myHashTable.keys());
