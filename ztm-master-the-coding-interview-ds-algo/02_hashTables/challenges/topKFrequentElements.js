const topKFrequentElements = (nums, target) => {
  let frequency = {};

  // Count frequency of each number
  for (let i = 0; i < nums.length; i++) {
    if (frequency.hasOwnProperty(nums[i])) {
      frequency[nums[i]] += 1;
    } else {
      frequency[nums[i]] = 1;
    }
  }

  // Convert frequency object to array of [num, freq] pairs and sort by frequency
  let sortedFreq = Object.entries(frequency).sort((a, b) => b[1] - a[1]);

  // Take the k most frequent elements
  return sortedFreq.slice(0, k).map((pair) => Number(pair[0]));
};

// Time complexity: O(n)
// Space complexity: O(n)

console.log(topKFrequentElements([1, 1, 1, 2, 2, 3], 2));
