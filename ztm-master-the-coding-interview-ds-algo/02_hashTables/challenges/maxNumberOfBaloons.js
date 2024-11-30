/**
 * @param {string} text
 * @return {number}
 */

// create a count hash
// iterate and count
let maxNumberOfBalloons = function (text) {
  let frequency = {};

  for (const char of text) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  // Check for the characters needed to form "balloon"
  let count = Math.min(
    frequency["b"] || 0,
    frequency["a"] || 0,
    Math.floor((frequency["l"] || 0) / 2), // Half the count of 'l' (floored)
    Math.floor((frequency["o"] || 0) / 2), // Half the count of 'o' (floored)
    frequency["n"] || 0
  );

  // Math.min(3, 2, 2, 3, 1)
  // The result would be 1, because we can only form one complete "balloon" with these letters (the 'n' is the limiting factor).

  return count;
};

console.log(maxNumberOfBalloons("loonbalxballpoon"));
