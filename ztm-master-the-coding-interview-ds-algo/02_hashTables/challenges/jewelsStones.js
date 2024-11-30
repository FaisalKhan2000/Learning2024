/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// brute force approach - O(n * m)
let numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      count++;
    }
  }

  return count;
};

// Time complexity: O(n * m)
// Space complexity: O(1)

// using sets - O(n * m)
let numJewelsInStones2 = function (jewels, stones) {
  let s = new Set(jewels); // ["a", "A"]
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (s.has(stones[i])) {
      count++;
    }
  }

  return count;
};

// Time complexity: O(n +m)
// Space complexity: O(m)

console.log(numJewelsInStones2("aA", "aAAbbbb"));
