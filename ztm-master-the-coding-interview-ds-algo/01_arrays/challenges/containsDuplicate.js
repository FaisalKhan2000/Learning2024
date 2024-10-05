// two pointer approach
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate1(nums) {
  // If the array has less than 2 elements, it can't contain duplicates
  if (nums.length < 2) return false;

  // Sort the array
  nums.sort((a, b) => a - b);

  // Use two pointers
  let left = 0;
  let right = 1;

  while (right < nums.length) {
    if (nums[left] === nums[right]) {
      return true; // Found a duplicate
    }
    left++;
    right++;
  }

  return false; // No duplicates found
}

// Example usage
console.log(containsDuplicate1([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate1([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate1([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

/*
Time complexity: O(n log n) due to sorting
Space complexity: O(1) or O(n), depending on the sorting algorithm used
*/

// one pointer approach
const containsDuplicate2 = (nums) => {
  if (!Array.isArray(nums)) {
    return "unexpected input: required array";
  }

  if (nums.length <= 1) {
    return false;
  }

  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }
  return false;
};

// Time  - O(n log n)
// Space  - O(1)

console.log(containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
