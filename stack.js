/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);

    if (this.last === null) this.last = newNode;

    if (this.first !== null) this.first.next = newNode;

    this.first = newNode;

    this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    let current = this.last;

    while (current.next !== null) {
      if (current.next === this.first) break;
      current = current.next;
    }

    let oldFirst = this.first.val;

    this.first = current;

    current.next = null;

    this.size -= 1;

    if (this.size === 0) {
      this.first = null;
      this.last = null;
    }

    return oldFirst;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.first === null ? true : false;
  }
}

module.exports = Stack;
