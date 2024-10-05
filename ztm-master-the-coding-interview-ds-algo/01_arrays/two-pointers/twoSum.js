/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// assume the input is sorted
const twoSum = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let currentSum = nums[left] + nums[right];

    if (currentSum === target) {
      return [left, right];
    }

    if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
};

console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([1, 2, 3, 4, 6], 6));
console.log(twoSum([2, 5, 9, 11], 11));
