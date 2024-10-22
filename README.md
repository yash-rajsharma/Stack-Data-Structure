# Stack Data Structure

This repository contains implementations of the Stack data structure in JavaScript using two different approaches: a linked list and an array.

## What is a Stack?

A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. This means that the last element added to the stack will be the first one to be removed. Think of it like a stack of plates - you add plates to the top and remove them from the top.

The main operations of a stack are:
1. Push: Add an element to the top of the stack
2. Pop: Remove the top element from the stack
3. Peek: View the top element without removing it


#### Advantages of using Linked Lists:
- Dynamic size (can grow as needed)
- Efficient insertion and deletion (O(1) time complexity)

#### Disadvantages of using Arrays:
- Uses more memory due to the need for pointers
- Not cache-friendly due to non-contiguous memory allocation



## Which Implementation to Choose?

Both implementations achieve the same goal of creating a Stack data structure, but they have different trade-offs:

- Use the linked list implementation for large datasets or when frequent resizing might be needed.
- Use the array implementation for simpler code and often more efficient operations with smaller datasets.

Choose the implementation that best fits your specific use case and performance requirements.

