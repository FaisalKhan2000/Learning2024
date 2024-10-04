function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); // O(1)

  var middleIndex = Math.floor(items.length / 2); // O(1)
  var index = 0; // O(1)

  while (index < middleIndex) {
    console.log(items[index]); // O(n/2)
    index++; // O(n/2)
  }

  for (var i = 0; i < 100; i++) {
    console.log("hi"); // O(100)
  }
}

// O (3 + n/2 + n/2 + 100)

// rule 2: drop constants
// O (n/2 + 1)
// O (n + 1)
// O (n)
