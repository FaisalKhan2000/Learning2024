/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// assume the input is sorted
const removeDuplicates = function (nums, target) {
  if (nums.length === 0) return 0;
  let slow = 0;
  let fast = 1;

  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }

  return slow + 1;
};

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])); // [2,3,6,9]
//4, The first four elements after removing the duplicates will be [2, 3, 6, 9].

console.log(removeDuplicates([2, 2, 2, 11]));
//2, The first two elements after removing the duplicates will be [2, 11].
