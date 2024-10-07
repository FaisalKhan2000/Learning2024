// Brute force approach
const firstRecurringCharacter = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i]; // Return the first recurring character
      }
    }
  }

  return undefined;
};

// Time complexity: O(n^2)
// Space complexity: O(1)

// Using hash table (object)
const firstRecurringCharacter2 = (input) => {
  let map = {}; // Create a hash table

  // Loop through the array
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      // If the element exists in the map, return it
      return input[i];
    } else {
      // If not, store the element in the map
      map[input[i]] = i;
    }
  }

  return undefined;
};

// Time complexity: O(n)
// Space complexity: O(n)

// Using set
const firstRecurringCharacter3 = (input) => {
  let seen = new Set(); // Create a set to store seen elements

  // Loop through the array
  for (let i = 0; i < input.length; i++) {
    if (seen.has(input[i])) {
      return input[i]; // Return the first recurring character
    } else {
      seen.add(input[i]); // Add element to the set if not seen before
    }
  }

  return undefined;
};

// Time complexity: O(n)
// Space complexity: O(n)

// Test cases
console.log(firstRecurringCharacter3([2, 5, 1, 2, 3, 5, 1, 2, 4])); // Output: 2
console.log(firstRecurringCharacter3([2, 3, 4, 5])); // Output: undefined (no recurring character)
