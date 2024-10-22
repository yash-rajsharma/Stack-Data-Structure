# Stack Data

This repository contains implementations of the **Stack** data structure in JavaScript using two different approaches: a **linked list** and an **array**.

## What is a Stack?
A **Stack** is a linear data structure that follows the **Last-In-First-Out (LIFO)** principle. This means the last element added to the stack will be the first one to be removed. Think of it like a stack of plates: you add plates to the top and remove them from the top.

## Main Operations of a Stack
- **Push**: Add an element to the top of the stack.
- **Pop**: Remove the top element from the stack.
- **Peek**: View the top element without removing it.
- **isEmpty**: Check if the stack is empty (optional but useful).
- **Size**: Return the number of elements in the stack (optional but often used).

## Stack Implementations

### 1. Linked List-based Stack

A linked list can be used to implement a stack where each node holds a value and a reference to the next node.

**Advantages**:
- **Dynamic size**: The stack can grow and shrink as needed, with no predefined size.
- **Efficient insertion and deletion**: Push and pop operations take constant time, O(1), regardless of the number of elements.

**Disadvantages**:
- **Memory overhead**: Each node requires extra memory for pointers to the next node.
- **Non-contiguous memory allocation**: Linked lists are not stored in contiguous memory locations, which may lead to cache inefficiencies.

### 2. Array-based Stack

An array can also be used to implement a stack by adding and removing elements at the end of the array.

**Advantages**:
- **Simplicity**: Arrays are easy to work with, and the code for stack operations is generally simpler.
- **Faster access**: Since arrays are stored in contiguous memory, accessing elements is faster due to better cache locality.

**Disadvantages**:
- **Fixed size** (if using a static array): You may need to specify the maximum size of the stack in advance or resize the array when it reaches capacity, which is an expensive operation (O(n)).
- **Resizing overhead**: In dynamic arrays (like in JavaScript), growing the array requires copying elements, which can lead to performance issues for large datasets.

## Time Complexity Comparison

| Operation | Array Implementation | Linked List Implementation |
|-----------|-----------------------|----------------------------|
| Push      | O(1) (amortized if dynamic) | O(1)                       |
| Pop       | O(1)                   | O(1)                       |
| Peek      | O(1)                   | O(1)                       |
| Size      | O(1)                   | O(1)                       |

## Which Implementation to Choose?
- Use the **linked list implementation** for large datasets or when frequent resizing may be required, as it offers constant-time insertions and deletions.
- Use the **array implementation** for smaller datasets where simplicity, faster access, and cache efficiency are more important.

## Use Cases of Stacks
- **Function call stacks**: Managing function calls and local variables in programming languages.
- **Undo/Redo functionality**: Like in text editors, where the most recent change is undone first.
- **Browser history**: Storing pages visited by the user, where the last visited page is removed first.
- **Balanced parentheses check**: Ensuring all opening parentheses have matching closing ones.

## Conclusion
Both linked list and array-based stacks follow the **LIFO principle** and achieve the same goal of managing data. Each has trade-offs in terms of memory usage, performance, and complexity. Choose the implementation that best fits your specific use case.

---
