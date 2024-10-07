// hint: use hash table to store the frequency of each number

// [4, 3, 2, 7, 8, 2, 3, 1];
const findAllDuplicates = (nums) => {
  let frequency = {};
  let duplicates = [];

  for (let i = 0; i < nums.length; i++) {
    if (frequency.hasOwnProperty(nums[i])) {
      frequency[nums[i]] += 1;
    } else {
      frequency[nums[i]] = 1;
    }
  }

  for (let key in frequency) {
    if (frequency[key] > 1) {
      duplicates.push(Number(key));
    }
  }

  return duplicates;
};

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));

// Time complexity: O(n)
// Space complexity: O(n)
