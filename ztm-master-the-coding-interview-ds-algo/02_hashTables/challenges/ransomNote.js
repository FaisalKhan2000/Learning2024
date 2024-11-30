// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
var canConstruct = function (ransomNote, magazine) {
  // create a frequency hash table
  // { a: 2, b: 1 }
  let frequency = {};

  for (let i = 0; i < magazine.length; i++) {
    if (frequency.hasOwnProperty(magazine[i])) {
      frequency[magazine[i]] += 1;
    } else {
      frequency[magazine[i]] = 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (frequency.hasOwnProperty(ransomNote[i])) {
      if (frequency[ransomNote[i]] === 0) {
        return false; // Not enough letters available
      } else {
        frequency[ransomNote[i]] -= 1; // use one letter
      }
    } else {
      return false; // letter not available at all
    }
  }

  return true;
};

console.log(canConstruct("aa", "aab")); // Output: true
console.log(canConstruct("ab", "aab")); // Output: true
console.log(canConstruct("aaa", "aab")); // Output: false
