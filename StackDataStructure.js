//***************************** Stack Data Structure ******************************* */

// Stack: A linear data structure that follows the Last-In-First-Out (LIFO) principle.
// Operations are typically performed on one end of the structure, called the "top".

// Node class for the linked list implementation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Stack implementation using a linked list
class Stack {
  constructor() {
    this.first = null; // Top of the stack (most recently added element)
    this.last = null;  // Bottom of the stack (least recently added element)
    this.length = 0;   // Number of elements in the stack
  }

  // Time Complexity: O(1)
  peek() {
    return this.first;
  }

  // Time Complexity: O(1)
  push(value) {
    const newNode = new Node(value);

    if (!this.first) {
      // If stack is empty, new node is both first and last
      this.first = newNode;
      this.last = newNode;
    } else {
      // If stack is not empty, new node becomes the new top
      let holdingPointer = this.first;
      this.first = newNode;
      this.first.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  // Time Complexity: O(1)
  pop() {
    if (!this.first) {
      return "No Value Found!!";
    }

    if (this.first === this.last) {
      // If there's only one element, set last to null
      this.last = null;
    }

    // Move first pointer to the next element
    this.first = this.first.next;
    this.length--;
    return this.printList();
  }

  // Time Complexity: O(1)
  isEmpty() {
    return this.first === null;
  }

  // Time Complexity: O(n) where n is the number of elements in the stack
  printList() {
    let array = [];
    let currentNode = this.first;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  // Time Complexity: O(1)
  clear() {
    this.first = null;
    this.last = null;
    this.length = 0;
    return "Cleared";
  }
}

// Stack implementation using an array
// This implementation is generally more efficient in terms of memory usage
class StackWithArray {
  constructor() {
    this.data = []; // Array to store stack elements
  }

  // Time Complexity: O(1)
  peek() {
    return this.data[this.data.length - 1];
  }

  // Time Complexity: O(1) amortized
  push(value) {
    this.data.push(value);
    return this.data;
  }

  // Time Complexity: O(1)
  pop() {
    return this.data.pop();
  }

  // Time Complexity: O(1)
  printList() {
    return this.data;
  }

  // Time Complexity: O(1)
  isEmpty() {
    return this.data.length === 0;
  }

  // Time Complexity: O(1)
  clear() {
    this.data = [];
    return "Cleared";
  }
}

// Note: The array-based implementation is generally more efficient in terms of
// memory usage and cache performance, but the linked list implementation
// might be preferred if the maximum size of the stack is unknown or if
// frequent resizing of the underlying array would be costly.