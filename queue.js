/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);

    if (this.first === null) this.first = newNode;

    if (this.last !== null) this.last.next = newNode;

    this.last = newNode;

    this.size += 1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    let current = this.first;

    while (current.next !== null) {
      if (current.next === this.last) break;
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

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.first === null ? true : false;
  }
}

module.exports = Queue;
