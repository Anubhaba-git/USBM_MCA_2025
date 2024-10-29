1. push():
Definition: Adds one or more elements to the end of an array.
Returns: The new length of the array after elements are added

Syntax:
    array.push(element1, element2, ..., elementN);

Example:
  let fruits = ["apple", "banana"];
  fruits.push("mango", "orange"); // Adds 'mango' and 'orange' at the end
  console.log(fruits);             // ["apple", "banana", "mango", "orange"]
  console.log(fruits.push("grape")); // Output: 5 (new length)


2.pop():
Definition: Removes the last element from an array.
Returns: The removed element (or undefined if the array is empty).

Syntax:
    array.pop();

Example:
let fruits = ["apple", "banana", "mango"];
let lastFruit = fruits.pop();     // Removes 'mango'
console.log(fruits);              // ["apple", "banana"]
console.log(lastFruit);           // "mango" (the removed element)

3. shift():
Definition: Removes the first element from an array.
Returns: The removed element (or undefined if the array is empty).

Syntax:
array.shift();

Example:
let fruits = ["apple", "banana", "mango"];
let firstFruit = fruits.shift();  // Removes 'apple'
console.log(fruits);              // ["banana", "mango"]
console.log(firstFruit);          // "apple" (the removed element)


4. unshift():
Definition: Adds one or more elements to the beginning of an array.
Returns: The new length of the array after elements are added.

Syntax:
array.unshift(element1, element2, ..., elementN);

Example:
let fruits = ["banana", "mango"];
fruits.unshift("apple", "orange"); // Adds 'apple' and 'orange' at the beginning
console.log(fruits);               // ["apple", "orange", "banana", "mango"]
console.log(fruits.unshift("grape")); // Output: 5 (new length)


##Each method allows you to manage an array efficiently by adding or removing elements from either end as needed!