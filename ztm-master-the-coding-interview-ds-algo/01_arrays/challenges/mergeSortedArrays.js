// using js builtin methods
const mergeSortedArrays = (arr1, arr2) => {
  // check is array
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.log("Invalid input: Both parameters should be arrays.");
  }

  // check if empty
  if (arr1.length === 0) {
    return arr2.sort((a, b) => a - b);
  }

  if (arr2.length === 0) {
    return arr1.sort((a, b) => a - b);
  }

  // merge arrays
  const mergedArray = [...arr1, ...arr2];

  // sort
  const sortedArray = mergedArray.sort((a, b) => a - b);

  return sortedArray;
};

const mergeSortedArrays2 = (arr1, arr2) => {
  // check is array
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.log("Invalid input: Both parameters should be arrays.");
  }

  // check if empty
  if (arr1.length === 0) {
    return arr2.sort((a, b) => a - b);
  }

  if (arr2.length === 0) {
    return arr1.sort((a, b) => a - b);
  }

  // merge arrays
  const mergedArray = [...arr1, ...arr2];

  // sort
  const sortedArray = mergedArray.sort((a, b) => a - b);

  return sortedArray;
};

// Time - O(n+m)
// space - O(n+m)

console.log(mergeSortedArrays([3, 2, 1], [2, 3, 4]));
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([], [2, 4, 1])); // Output: [2, 4, 6]
console.log(mergeSortedArrays([1, 3, 5], [])); // Output: [1, 3, 5]
console.log(mergeSortedArrays([1, 3, 5], [0, 2, 4]));
