/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = function (s) {
  // Convert to lowercase and remove non-alphanumeric characters
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("0P")); // false
