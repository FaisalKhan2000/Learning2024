// * Number

// Number values represent floating-point numbers like 37 or -9.25

// Number constructor contains constant and methods for working with numbers

// values of other types can be converted to numbers using the Number() function

255; // two-hundred and fifty-five
255.0; // same number
255 === 255.0; // true
255 === 0xff; // true (hexadecimal notation)
255 === 0b11111111; // true (binary notation)
255 === 0.255e3; // true (decimal exponential notation)

// A number literal like 37 in JavaScript code is a floating-point value, not an integer. There is no separate integer type in common everyday use.

console.log(37 === 37.0);

// When used as a function, Number(value) converts a string or other value to the Number type. If the value can't be converted, it returns NaN.

Number("123"); // returns the number 123
Number("123") === 123; // true

Number("unicorn"); // NaN
Number(undefined); // NaN

// * Number encoding

// all numbers in javascript are stored using double precision 64bit binary (IEEE 754)

// IEEE 754 double-precision floating-point representation of number 37

// Step 1: Convert 37 to binary
// 37 in binary is 100101

// Step 2: Normalize the binary representation
// 1.00101 x 2^5

// Step 3: Break down into sign, exponent, and mantissa

// Sign bit (1 bit)
const sign = 0; // 0 for positive

// Exponent (11 bits)
// True exponent is 5, but we need to add bias of 1023
const trueExponent = 5;
const biasedExponent = trueExponent + 1023; // 1028
// 1028 in binary is 10000000100

// Mantissa (52 bits)
// We take the fractional part of the normalized form (00101)
// and pad with zeros to fill 52 bits
const mantissa = "0010100000000000000000000000000000000000000000000000";

// Putting it all together
const ieee754Representation = `${sign} ${"10000000100"} ${mantissa}`;

console.log(ieee754Representation);
// Output: 0 10000000100 0010100000000000000000000000000000000000000000000000

// This represents the full 64-bit IEEE 754 encoding of the number 37

// * Number Coercion

// Number Coercion in JavaScript refers to the implicit or explicit conversion of values into numbers when certain operations expect numeric input.

// Numbers are returned as-is
console.log(Number(42)); // 42
console.log(Number(3.14)); // 3.14

// undefined is coerced to NaN
console.log(Number(undefined)); // NaN

// null is coerced to 0
console.log(Number(null)); // 0

// Booleans are coerced to numbers
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Strings are parsed as if they contain a number literal
console.log(Number("42")); // 42
console.log(Number("3.14")); // 3.14

// Special cases for strings:
console.log(Number("   42   ")); // 42 (leading/trailing whitespace ignored)
console.log(Number("012")); // 12 (leading 0 doesn't make it octal)
console.log(Number("")); // 0 (empty string is converted to 0)
console.log(Number("Infinity")); // Infinity (recognized as a special literal)
console.log(Number("-Infinity")); // -Infinity

// Parsing failure results in NaN
console.log(Number("foo")); // NaN (cannot be parsed as a number)
console.log(Number("123abc")); // NaN (contains non-numeric characters)

// BigInt throws a TypeError to avoid loss of precision
try {
  console.log(Number(1n)); // TypeError: Cannot convert a BigInt to a number
} catch (error) {
  console.error(error); // Handles the TypeError
}

// Symbols throw a TypeError because they cannot be converted to numbers
try {
  console.log(Number(Symbol("foo"))); // TypeError: Cannot convert a Symbol to a number
} catch (error) {
  console.error(error); // Handles the TypeError
}

// Objects are converted to a primitive first
const obj1 = {
  valueOf: function () {
    return 42;
  }, // valueOf returns a primitive number
};
console.log(Number(obj1)); // 42

// If valueOf doesn't return a primitive, toString is called
const obj2 = {
  toString: function () {
    return "3.5";
  }, // toString returns a string that can be converted
};
console.log(Number(obj2)); // 3.5

// Objects that can't be converted to a number result in NaN
const obj3 = {
  toString: function () {
    return "foo";
  }, // String can't be parsed as a number
};
console.log(Number(obj3)); // NaN

// there are two ways to achieve the same effect in javascript
// unary plus: +x
console.log(+"123");

// Number()
console.log(Number("123"));
