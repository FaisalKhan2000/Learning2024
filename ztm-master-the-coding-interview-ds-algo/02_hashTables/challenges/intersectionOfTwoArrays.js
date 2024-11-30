/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

var intersection = function (nums1, nums2) {
  let n1 = new Set(nums1); // {1,2}

  let intersection = [];

  for (const value of nums2) {
    if (n1.has(value) && !intersection.includes(value)) {
      intersection.push(value);
    }
  }

  return intersection;
};

// O(n+m) - time
// O(n) -  space

console.log(intersection([1, 2, 2, 1], [2, 2]));
