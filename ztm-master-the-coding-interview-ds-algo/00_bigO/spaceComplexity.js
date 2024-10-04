//#5 Space complexity O(1)
function boooo(n) {
  for (let i = 0; i < n; i++) {
    console.log("booooo");
  }
}

// time complexity - O(n)
// space complexity - O(1) ---> irrespective of the input n, the variable i is constant, means only one space is created

// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}
// time complexity - O(n)
// space complexity - O(n) ---> as the input grows, the variable size grows linearly

arrayOfHiNTimes(6);
