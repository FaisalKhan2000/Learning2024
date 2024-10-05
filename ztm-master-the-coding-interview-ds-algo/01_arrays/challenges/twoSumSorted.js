/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

// time - O(n)
// space - O(1)

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
console.log(twoSum([1, 2, 3, 4, 5, 6], 5));
