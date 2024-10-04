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
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
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
console.log(mergeSortedArrays([], [2, 4, 6])); // Output: [2, 4, 6]
console.log(mergeSortedArrays([1, 3, 5], [])); // Output: [1, 3, 5]
console.log(mergeSortedArrays([1, 3, 5], [0, 2, 4]));

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // Check if both parameters are arrays
  if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
    throw new Error("Invalid input: Both parameters should be arrays.");
  }

  // Ensure the lengths of nums1 and nums2 are within specified limits
  nums1 = nums1.slice(0, m);
  nums2 = nums2.slice(0, n);

  // Check if either array is empty
  if (nums1.length === 0) {
    return nums2.sort((a, b) => a - b);
  }
  if (nums2.length === 0) {
    return nums1.sort((a, b) => a - b);
  }

  // Merge the two arrays
  const mergedArray = [...nums1, ...nums2];

  // Sort the merged array
  return mergedArray.sort((a, b) => a - b);
};

console.log(merge([[1, 2, 3, 0, 0, 0]], 3, [2, 5, 6], 3));
