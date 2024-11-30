/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Given two strings s and t, return true if t is an anagram
// of s, and false otherwise.

let isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let frequency = {};

  // Count frequency of characters in s
  for (let i = 0; i < s.length; i++) {
    if (frequency.hasOwnProperty(s[i])) {
      frequency[s[i]] += 1;
    } else {
      frequency[s[i]] = 1;
    }
  }

  // Decrement frequency for characters in t
  for (let i = 0; i < t.length; i++) {
    if (frequency.hasOwnProperty(t[i])) {
      frequency[t[i]] -= 1;
    } else {
      return false;
    }
  }

  // Check if all frequencies are zero
  for (const key in frequency) {
    if (frequency[key] !== 0) {
      return false;
    }
  }

  return true;
};

let isAnagram2 = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let frequency = {};

  // Count frequency of characters in s
  for (const char of s) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  // Decrement frequency for characters in t
  for (const char of t) {
    if (!frequency[char]) {
      return false;
    }
    frequency[char]--;
  }

  // Check if all frequencies are zero
  for (const key in frequency) {
    if (frequency[key] !== 0) {
      return false;
    }
  }

  return true;
};

// Time complexity: O(n +m)
// Space complexity: O(n+m)

console.log(isAnagram2("anagram", "nagaram"));
console.log(isAnagram2("rat", "car"));
