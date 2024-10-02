// * String

// The String object is used to represent and manipulate a sequence of characters.

// creating strings
const string1 = "A string primitive";
const string2 = "Also a string primitive";
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");

console.log(typeof string1);
console.log(typeof string4);

// String primitives and string objects share many behaviors, but have other important differences and caveats.

// difference between string primitive and string object

// * String Primitive:

// A string primitive is a simple data type that represents a sequence of characters.

// It is immutable, meaning it cannot be changed once created.

let strPrimitive = "Hello, World!";

// * String Object:

// A string object is an instance of the String class.

// It is created using the new String() constructor.

// String objects are mutable in a sense that their properties can be modified, but the actual string value remains immutable.

let strObject = new String("Hello, World!");

// Type
console.log(typeof strPrimitive); // "string"
console.log(typeof strObject); // "object"

// Mutability:
// String primitives are immutable, while String objects are mutable (but their string content isn't):

strPrimitive[0] = "h"; // This doesn't change the string
console.log(strPrimitive); // Still "Hello"

strObject[0] = "h"; // This also doesn't change the string content
console.log(strObject.toString()); // Still "Hello"

strObject.newProp = "test"; // But we can add new properties to the object
console.log(strObject.newProp); // "test"

// comparison

// string primitive
let str1 = "hello";
let str2 = "hello";

console.log(str1 === str2);

// string object
let strObj1 = new String("Hello");
let strObj2 = new String("Hello");

console.log(strObj1 === strObj2); // false (different references)

// Performance

// String Primitive
// More efficient in terms of memory and performance due to their simplicity and immutability.

// String Object
//  Less efficient because they are more complex and involve more overhead.

// * Character access

"cat".charAt(1); // 'a'
"cat"[1]; // 'a'

// * Comparing strings

const a = "a";
const b = "b";

if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}

// Note that all comparison operators, including === and ==, compare strings case-sensitively. A common way to compare strings case-insensitively is to convert both to the same case (upper or lower) before comparing them.

const areEqualCaseInsensitive = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();

// A locale-aware and robust solution for testing case-insensitive equality is to use the Intl.Collator API or the string's localeCompare() method — they share the same interface — with the sensitivity option set to "accent" or "base".

const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

console.log(areEqual("ß", "ss", "de")); // false
console.log(areEqual("ı", "I", "tr")); // true
