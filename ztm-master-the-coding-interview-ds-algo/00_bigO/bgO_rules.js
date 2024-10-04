// worst case
// remove constants
// different terms for inputs
// drop non dominants

/**
 * 1. Worst Case - Linear Search
 * Time Complexity: O(n), where n is the length of the array
 *
 * This function demonstrates the "Worst Case" rule of Big O:
 * - We always analyze the worst-case scenario for time complexity.
 * - Best and average cases are not considered in Big O notation.
 *
 * Explanation:
 * - In the best case (target at index 0), this function takes O(1) time.
 * - In the worst case (target not in array), it checks all n elements.
 * - Big O focuses on the worst case, so we say it's O(n).
 *
 * Real-world implication:
 * When designing systems, we prepare for the worst-case scenario to ensure
 * our algorithm performs adequately even under unfavorable conditions.
 */
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Best case: O(1), but not considered in Big O
    }
  }
  return -1; // Worst case: O(n), this is what Big O considers
}

/**
 * 2. Remove Constants - Processing Array
 * Time Complexity: O(n), where n is the length of the array
 *
 * This function demonstrates the "Remove Constants" rule of Big O:
 * - Constants and lower-order terms are dropped in the final Big O notation.
 * - We focus on the term that grows the fastest as input size increases.
 *
 * Explanation:
 * - The first console.log is O(1): constant time operation.
 * - Each for loop is O(n): time grows linearly with array size.
 * - Total complexity: O(1 + n + n) = O(2n + 1)
 * - Simplified to O(n) by removing constants (2 and 1).
 *
 * Real-world implication:
 * For large-scale systems, constant factors become negligible. Focusing on
 * the rate of growth helps in comparing algorithms' scalability.
 */
function process(arr) {
  console.log(arr[0]); // O(1) operation

  for (let i = 0; i < arr.length; i++) {
    // First O(n) loop
    console.log(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    // Second O(n) loop
    console.log(arr[i]);
  }
  // Total: O(1 + n + n) = O(2n + 1) = O(n)
}

/**
 * 3. Different Terms for Inputs - Printing Pairs
 * Time Complexity: O(n * m), where n is the length of arr1 and m is the length of arr2
 *
 * This function demonstrates the "Different Terms for Inputs" rule of Big O:
 * - When an algorithm has multiple inputs, we use different variables to represent them.
 * - This provides a more accurate representation of the algorithm's complexity.
 *
 * Explanation:
 * - The outer loop runs n times (length of arr1).
 * - For each iteration of the outer loop, the inner loop runs m times (length of arr2).
 * - Total number of operations: n * m
 * - We use O(n * m) instead of O(n^2) because arr1 and arr2 may have different lengths.
 *
 * Real-world implication:
 * This notation is crucial when working with algorithms that process multiple datasets
 * or have multiple variable inputs, providing a more precise complexity analysis.
 */
function printPairs(arr1, arr2) {
  for (let i of arr1) {
    // O(n) where n is the length of arr1
    for (let j of arr2) {
      // O(m) where m is the length of arr2
      console.log(i, j);
    }
  }
  // Total: O(n * m)
}

/**
 * 4. Drop Non-Dominants - Complex Function
 * Time Complexity: O(n^2), where n is the input number
 *
 * This function demonstrates the "Drop Non-Dominants" rule of Big O:
 * - We keep only the fastest-growing term and drop others.
 * - Lower order terms become insignificant for large input sizes.
 *
 * Explanation:
 * - First loop: O(n)
 * - Nested loops: O(n^2)
 * - Last loop: O(n)
 * - Total: O(n + n^2 + n) = O(n^2 + 2n)
 * - Simplified to O(n^2) by dropping the non-dominant term 2n
 *
 * Real-world implication:
 * For large-scale analysis, focusing on the dominant term helps in quickly
 * understanding and comparing the efficiency of different algorithms.
 */
function complexFunc(n) {
  for (let i = 0; i < n; i++) {
    // O(n)
    console.log(i);
  }

  for (let i = 0; i < n; i++) {
    // O(n^2) - dominant term
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }

  for (let i = 0; i < n; i++) {
    // O(n)
    console.log(i);
  }
  // Total: O(n + n^2 + n) = O(n^2 + 2n) = O(n^2)
}
