class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push: Add a node at the end
  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      // head and tail points to the same object, so the result will be
      // LinkedList {
      //   head: Node { value: 10, next: Node { value: 20, next: null } },
      //   tail: Node { value: 10, next: Node { value: 20, next: null } },
      //   length: 1
      // }
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // shift: Add a node at the beginning
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // Insert: Add a node at a specific index
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false; // Invalid index
    }

    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);
    let current = this.head;
    let previous = null;

    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }

    newNode.next = current;
    previous.next = newNode;

    this.length++;
    return this;
  }

  // Shift: Remove the first node
  shift() {
    if (!this.head) {
      return null; // Empty list
    }

    const temp = this.head;
    this.head = this.head.next;

    if (this.length === 1) {
      this.tail = null;
    }

    this.length--;
    return temp;
  }

  // Pop: Remove the last node
  pop() {
    if (!this.head) {
      return null; // Empty list
    }

    if (this.length === 1) {
      const temp = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    }

    let pre = this.head;
    let temp = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    pre.next = null;
    this.tail = pre;
    this.length--;

    return temp;
  }

  // Remove: Remove a node at a specific index
  remove(index) {
    if (index < 0 || index >= this.length) {
      return null; // Invalid index
    }

    if (index === 0) {
      return this.shift(); // Remove first node
    }

    if (index === this.length - 1) {
      return this.pop(); // Remove last node
    }

    let previous = this.head;
    for (let i = 0; i < index - 1; i++) {
      previous = previous.next;
    }

    const nodeToRemove = previous.next;
    previous.next = nodeToRemove.next;

    this.length--;
    return nodeToRemove;
  }

  // Get: Get the node at a specific index
  get(index) {
    if (index < 0 || index >= this.length) {
      return null; // Invalid index
    }

    let current = this.head;
    for (let i = 0; i <= index; i++) {
      current = current.next;
    }

    return current;
  }

  // Print: Helper method to print the linked list (for debugging)
  printList() {
    let current = this.head;
    let values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}
