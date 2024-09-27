# JavaScript Number Reference Guide

## 1. Number Basics

JavaScript uses floating-point numbers for all numeric values. There is no separate integer type in common use.

```javascript
255; // two-hundred and fifty-five
255.0; // same number
255 === 255.0; // true
```

Numbers can be represented in different notations:

```javascript
255 === 0xff; // true (hexadecimal notation)
255 === 0b11111111; // true (binary notation)
255 === 0.255e3; // true (decimal exponential notation)
```

## 2. Number Conversion

The `Number()` function converts other types to numbers:

```javascript
Number("123"); // returns the number 123
Number("123") === 123; // true
Number("unicorn"); // NaN (Not a Number)
Number(undefined); // NaN
```

## 3. Number Encoding (IEEE 754)

JavaScript uses double-precision 64-bit binary format (IEEE 754) for number representation.

Example: Encoding the number 37

1. Convert to binary: 100101
2. Normalize: 1.00101 x 2^5
3. Break down into sign, exponent, and mantissa:
   - Sign bit (1 bit): 0 (positive)
   - Exponent (11 bits): 10000000100 (5 + bias of 1023)
   - Mantissa (52 bits): 0010100000000000000000000000000000000000000000000000

Full 64-bit representation:

```
0 10000000100 0010100000000000000000000000000000000000000000000000
```

## 4. Number Coercion

Number coercion is the implicit or explicit conversion of values to numbers.

### 4.1 Explicit Coercion

Using the `Number()` function:

```javascript
Number(42); // 42
Number(3.14); // 3.14
Number(undefined); // NaN
Number(null); // 0
Number(true); // 1
Number(false); // 0
Number("42"); // 42
Number("3.14"); // 3.14
Number("   42   "); // 42 (trims whitespace)
Number("012"); // 12 (not octal)
Number(""); // 0
Number("Infinity"); // Infinity
Number("-Infinity"); // -Infinity
Number("foo"); // NaN
Number("123abc"); // NaN
```

### 4.2 Implicit Coercion

Using the unary plus operator:

```javascript
+"123"; // 123
+true; // 1
+false; // 0
+"foo"; // NaN
```

### 4.3 Special Cases

- BigInt throws a TypeError:

  ```javascript
  Number(1n); // TypeError: Cannot convert BigInt to number
  ```

- Symbols throw a TypeError:
  ```javascript
  Number(Symbol("foo")); // TypeError: Cannot convert Symbol to number
  ```

### 4.4 Object Coercion

Objects are first converted to primitives:

```javascript
const obj1 = {
  valueOf: function () {
    return 42;
  },
};
Number(obj1); // 42

const obj2 = {
  toString: function () {
    return "3.5";
  },
};
Number(obj2); // 3.5

const obj3 = {
  toString: function () {
    return "foo";
  },
};
Number(obj3); // NaN
```

## 5. Best Practices

1. Use `Number()` for explicit type conversion.
2. Be aware of implicit coercion in operations and comparisons.
3. Use `isNaN()` to check for NaN values.
4. Be cautious with floating-point arithmetic due to precision limitations.
5. Consider using `BigInt` for integers larger than 2^53 - 1.

Remember, understanding number behavior in JavaScript is crucial for writing robust and bug-free code, especially in financial or scientific applications where precision is important.

---

##### Created by Faisal Khan with ❤️
