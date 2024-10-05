/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
  // Create a copy of the array with indices
  const numWithIndex = nums.map((num, index) => ({ num, index }));
  // console.log(numWithIndex);

  // Sort the array based on the numbers
  numWithIndex.sort((a, b) => a.num - b.num);

  let left = 0;
  let right = numWithIndex.length - 1;

  while (left < right) {
    const sum = numWithIndex[left].num + numWithIndex[right].num;

    if (sum === target) {
      return [numWithIndex[left].index, numWithIndex[right].index];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  // If no solution is found
  return [];
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
console.log(twoSum([1, 2, 3, 4, 5, 6], 5));
