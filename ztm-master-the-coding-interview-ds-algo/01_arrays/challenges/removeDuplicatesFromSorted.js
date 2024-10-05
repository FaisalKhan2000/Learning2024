/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let slow = 0; // keeps track of unique
  let fast = 1; // keeps track of everything

  // [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
  // ["apple", "apple", "banana", "banana", "banana"]
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }

  return slow + 1;
};

// Test cases
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5
console.log(removeDuplicates([1, 1, 2])); // Output: 2
