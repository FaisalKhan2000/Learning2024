const reverseString = (str) => {
  // check input
  if (typeof str !== "string") {
    return "expected a string";
  }

  // check input size
  if (str.length < 2) {
    return str;
  }

  // convert string to array
  const array = str.split("");

  const backwards = [];

  // reverse array
  for (let i = array.length; i >= 0; i--) {
    backwards.push(str[i]);
  }

  // join
  return backwards.join("");
};

const reverseString2 = (str) => {
  // check input
  if (typeof str !== "string") {
    return "expected a string";
  }

  // check input size
  if (str.length < 2) {
    return str;
  }
  // convert string to array
  const array = str.split("");

  // reverse array
  array.reverse();

  // join
  return array.join("");
};

const reverseString3 = (str) => {
  // check input
  if (typeof str !== "string") {
    return "expected a string";
  }

  // check input size
  if (str.length < 2) {
    return str;
  }
  return str.split("").reverse().join("");
};

const reverseString4 = (str) => {
  // check input
  if (typeof str !== "string") {
    return "expected a string";
  }

  // check input size
  if (str.length < 2) {
    return str;
  }
  return [...str].reverse().join("");
};

// time complexity - O(n)
// space complexity - O(n)

console.log(reverseString4("faisal"));
console.log(reverseString4([1, 2, 3]));
console.log(reverseString4("f"));
