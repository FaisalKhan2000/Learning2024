package main

import (
	"fmt"
)

func main() {
	// **Arithmetic Operators**
	// +, -, *, /, % are arithmetic operators used for mathematical calculations.

	var a = 15 + 25 // Addition
	fmt.Println("Addition (15 + 25):", a)

	var (
		sum1 = 100 + 50  // Addition
		sum2 = sum1 - 30 // Subtraction
		sum3 = sum1 * 2  // Multiplication
		sum4 = sum3 / 4  // Division
		sum5 = sum1 % 30 // Modulus (remainder of division)
	)
	fmt.Println("sum1 (100 + 50):", sum1)
	fmt.Println("sum2 (sum1 - 30):", sum2)
	fmt.Println("sum3 (sum1 * 2):", sum3)
	fmt.Println("sum4 (sum3 / 4):", sum4)
	fmt.Println("sum5 (sum1 % 30):", sum5)

	// **Assignment Operators**
	// =, +=, -=, *=, /=, %= are used to assign values to variables.
	var x = 10 // Assignment
	fmt.Println("\nInitial value of x:", x)
	x += 5 // Add and assign (x = x + 5)
	fmt.Println("x after x += 5:", x)
	x -= 3 // Subtract and assign (x = x - 3)
	fmt.Println("x after x -= 3:", x)
	x *= 2 // Multiply and assign (x = x * 2)
	fmt.Println("x after x *= 2:", x)
	x /= 4 // Divide and assign (x = x / 4)
	fmt.Println("x after x /= 4:", x)
	x %= 3 // Modulus and assign (x = x % 3)
	fmt.Println("x after x %= 3:", x)

	// **Comparison Operators**
	// ==, !=, >, <, >=, <= are used to compare two values.
	var y = 20
	fmt.Println("\nComparison Operators:")
	fmt.Println("x == y:", x == y) // Equal to
	fmt.Println("x != y:", x != y) // Not equal to
	fmt.Println("x > y:", x > y)   // Greater than
	fmt.Println("x < y:", x < y)   // Less than
	fmt.Println("x >= y:", x >= y) // Greater than or equal to
	fmt.Println("x <= y:", x <= y) // Less than or equal to

	// **Logical Operators**
	// && (AND), || (OR), ! (NOT) are used for logical operations.
	fmt.Println("\nLogical Operators:")
	var p = true
	var q = false
	fmt.Println("p && q (AND):", p && q) // True if both p and q are true
	fmt.Println("p || q (OR):", p || q)  // True if at least one of p or q is true
	fmt.Println("!p (NOT):", !p)         // True if p is false

	// **Bitwise Operators**
	// &, |, ^, <<, >> are used for bit-level operations.
	var b1 uint = 5  // Binary: 0101
	var b2 uint = 12 // Binary: 1100
	fmt.Println("\nBitwise Operators:")
	fmt.Println("b1 & b2 (AND):", b1&b2)         // Binary AND
	fmt.Println("b1 | b2 (OR):", b1|b2)          // Binary OR
	fmt.Println("b1 ^ b2 (XOR):", b1^b2)         // Binary XOR
	fmt.Println("b1 << 1 (Left Shift):", b1<<1)  // Shift bits left by 1
	fmt.Println("b2 >> 2 (Right Shift):", b2>>2) // Shift bits right by 2

	// **Unary Operators**
	// Unary operators like ++ (increment) and -- (decrement) are not available in Go.
	// Use `x += 1` or `x -= 1` instead.

	fmt.Println("\nUnary Operators (Go doesn't support ++ or --):")
	x += 1 // Increment
	fmt.Println("Increment x by 1 (x += 1):", x)
	x -= 1 // Decrement
	fmt.Println("Decrement x by 1 (x -= 1):", x)

	// This concludes the demonstration of Go operators.
}
