//Log all pairs of array

const boxes = ["a", "b", "c", "d", "e"];
// function logAllPairsOfArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i], array[j])
//     }
//   }
// }

const logAllPairsOfArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    // O(n)
    for (let j = 0; j < array.length; j++) {
      // O(n)
      console.log(array[i], array[j]); // O(n)
    }
  }
};

logAllPairsOfArray(boxes);

// O(n) * O(n) + O(n)

// Big O - O(n^2) -  Quadratic Time
