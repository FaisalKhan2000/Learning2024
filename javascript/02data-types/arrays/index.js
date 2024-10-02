// Arrays

// Arrays aren't primitives but are instead `Array` objects

// Key characteristics:
// 1. Resizable: Can grow or shrink as needed
// 2. Mixed data types: Can contain different types of data in the same array
// 3. Zero-indexed: First element is at index 0, second at index 1, and so on
// 4. Numeric indexes only: Must use numbers (or their string form) to access elements
// 5. Not associative: Cannot use arbitrary strings as indexes
// 6. Shallow copying: Copy operations create shallow copies, not deep copies

// Examples:
// let fruits = ['apple', 'banana', 'orange'];
// fruits[0] // 'apple'
// fruits[2] // 'orange'
// fruits.length // 3

// Useful for:
// - Storing ordered collections of data
// - Iterating over multiple items
// - Performing operations on sets of data

// JavaScript Array Reference

// Array Creation
let fruits = ["apple", "banana", "orange"];
let numbers = new Array(1, 2, 3, 4, 5);

// Accessing Elements
let firstFruit = fruits[0]; // 'apple'
let lastNumber = numbers[numbers.length - 1]; // 5

// Properties
console.log(fruits.length); // 3

// Modifying Arrays
fruits.push("grape"); // Adds to the end
fruits.unshift("mango"); // Adds to the beginning
let removedLast = fruits.pop(); // Removes and returns the last element
let removedFirst = fruits.shift(); // Removes and returns the first element

// Finding Elements
let bananaIndex = fruits.indexOf("banana");
let containsOrange = fruits.includes("orange");

// Transforming Arrays
let uppercaseFruits = fruits.map((fruit) => fruit.toUpperCase());
let longFruits = fruits.filter((fruit) => fruit.length > 5);
let allLongFruits = fruits.every((fruit) => fruit.length > 3);
let someLongFruits = fruits.some((fruit) => fruit.length > 5);

// Reducing Arrays
let totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);

// Iterating
fruits.forEach((fruit) => console.log(fruit));

// Sorting
fruits.sort();
numbers.sort((a, b) => a - b); // Numeric sort

// Reversing
fruits.reverse();

// Joining and Splitting
let fruitString = fruits.join(", ");
let newArray = fruitString.split(", ");

// Slicing and Splicing
let slicedFruits = fruits.slice(1, 3); // Returns a new array
fruits.splice(1, 1, "kiwi", "melon"); // Modifies the original array

// Flattening
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flatArray = nestedArray.flat(2);

// Searching
let foundFruit = fruits.find((fruit) => fruit.startsWith("a"));
let foundIndex = fruits.findIndex((fruit) => fruit.startsWith("a"));

// Copying
let fruitsCopy = Array.from(fruits);
let numbersCopy = [...numbers];

// Filling
let filledArray = new Array(5).fill("empty");

// Checking Array
console.log(Array.isArray(fruits)); // true

console.log(fruits);
// Iterators
let entries = fruits.entries();
let keys = fruits.keys();
let values = fruits.values();

// Advanced Methods
fruits.copyWithin(0, 2, 4); // Copies part of an array to another location in the same array
let typedArray = new Int8Array(numbers); // Creates a typed array

// Array static methods
let mergedArray = Array.of(...fruits, ...numbers);
let arrayFromString = Array.from("hello");

// JavaScript Array Methods: Mutable vs Non-mutable

// Mutable Methods (modify the original array):
const mutableMethods = [
  "push", // Adds one or more elements to the end of an array
  "pop", // Removes the last element from an array
  "unshift", // Adds one or more elements to the beginning of an array
  "shift", // Removes the first element from an array
  "splice", // Changes the contents of an array by removing or replacing existing elements and/or adding new elements
  "sort", // Sorts the elements of an array in place
  "reverse", // Reverses the order of the elements in an array
  "fill", // Fills all the elements of an array from a start index to an end index with a static value
  "copyWithin", // Shallow copies part of an array to another location in the same array and returns it without modifying its length
];

// Non-mutable Methods (return a new array or value):
const nonMutableMethods = [
  "concat", // Returns a new array that is the calling array joined with other array(s) and/or value(s)
  "slice", // Returns a shallow copy of a portion of an array into a new array object
  "map", // Creates a new array with the results of calling a provided function on every element in the array
  "filter", // Creates a new array with all elements that pass the test implemented by the provided function
  "reduce", // Executes a reducer function on each element of the array, resulting in a single output value
  "reduceRight", // Like reduce, but starts from the last element and works backwards
  "flat", // Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
  "flatMap", // First maps each element using a mapping function, then flattens the result into a new array
  "join", // Joins all elements of an array into a string
  "toString", // Returns a string representing the array and its elements
  "indexOf", // Returns the first index at which a given element can be found in the array
  "lastIndexOf", // Returns the last index at which a given element can be found in the array
  "includes", // Determines whether an array includes a certain value among its entries, returning true or false
  "find", // Returns the value of the first element in the array that satisfies the provided testing function
  "findIndex", // Returns the index of the first element in the array that satisfies the provided testing function
  "every", // Tests whether all elements in the array pass the test implemented by the provided function
  "some", // Tests whether at least one element in the array passes the test implemented by the provided function
];

// Note: While these methods don't mutate the array directly, they may return references to elements within the original array:
const shallowCopyMethods = ["slice", "concat", "map", "filter"];

// Best practice: When you want to avoid mutation, use non-mutable methods or create a copy before using mutable methods

// Best Practices:
// - Use const for arrays you don't intend to reassign
// - Use let if you plan to reassign the array
// - Consider using immutable array operations for better predictability
// - Be cautious with sparse arrays (arrays with empty slots)
// - Use appropriate methods for better readability and performance

// This reference covers most Array methods and properties in JavaScript.
// Always refer to the latest ECMAScript specification or MDN for the most up-to-date information.
