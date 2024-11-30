/**
 * @param {number[]} nums
 * @return {boolean}
 */

let containsDuplicate = function (nums) {
  let unique = new Set(nums);
  return unique.size !== nums.length;
};

// Time complexity: O(n)
// Space complexity: O(n)

let containsDuplicate2 = function (nums) {
  let unique = new Set();

  for (let num of nums) {
    if (unique.has(num)) {
      return true;
    } else {
      unique.add(num);
    }
  }

  return false;
};

// Time complexity: O(n)
// Space complexity: O(n)

console.log(containsDuplicate2([1, 2, 3, 1]));
console.log(containsDuplicate2([1, 2, 3]));
