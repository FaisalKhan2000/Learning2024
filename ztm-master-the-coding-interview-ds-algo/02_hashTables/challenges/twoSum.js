const twoSum = (nums, target) => {
  let hashTable = {};

  for (let i = 0; i < nums.length; i++) {
    const complemet = target - nums[i];

    if (hashTable.hasOwnProperty(complemet)) {
      return [hashTable[complemet], i];
    }

    hashTable[nums[i]] = i;
  }

  return [];
};

// Time complexity: O(n)
// Space complexity: O(n)

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 1, 5, 7], 8)); // [0,1]
