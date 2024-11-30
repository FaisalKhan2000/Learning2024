package main

import (
	"fmt"
)

func main() {
	// **If Statement**
	// The `if` statement evaluates a condition and executes the block of code if the condition is true.
	x := 20
	y := 18
	if x > y {
		// This block executes because the condition (x > y) is true.
		fmt.Println("x is greater than y")
	}

	// **If-Else Statement**
	// If the `if` condition is false, the `else` block will execute.
	time := 20
	if time < 18 {
		// This block will not execute because time is 20, which is not less than 18.
		fmt.Println("Good morning.")
	} else if time < 20 {
		// This block will not execute because time is 20, which is not less than 20.
		fmt.Println("Good day.")
	} else {
		// This block executes because the above conditions are false.
		fmt.Println("Good evening.")
	}

	// **Nested If Statements**
	// You can nest `if` statements inside another `if` block.
	num := 20
	if num >= 10 {
		// This block executes because num is 20, which is greater than or equal to 10.
		fmt.Println("Num is more than 10.")
		if num > 15 {
			// This block also executes because num is greater than 15.
			fmt.Println("Num is also more than 15.")
		}
	} else {
		// This block will not execute because the `if` condition (num >= 10) is true.
		fmt.Println("Num is less than 10.")
	}

	// **Switch Statement**
	// The `switch` statement evaluates a variable and executes the case that matches its value.
	day := 4

	switch day {
	case 1:
		// Executes if day == 1
		fmt.Println("Monday")
	case 2:
		// Executes if day == 2
		fmt.Println("Tuesday")
	case 3:
		// Executes if day == 3
		fmt.Println("Wednesday")
	case 4:
		// Executes because day == 4
		fmt.Println("Thursday")
	case 5:
		// Executes if day == 5
		fmt.Println("Friday")
	case 6:
		// Executes if day == 6
		fmt.Println("Saturday")
	case 7:
		// Executes if day == 7
		fmt.Println("Sunday")
	default:
		// Executes if none of the cases match
		fmt.Println("Not a weekday")
	}

	// **Notes about Switch in Go:**
	// 1. The `switch` statement doesn't require `break` to prevent fallthrough (unlike in some other languages).
	// 2. If you want fallthrough (execute the next case even if the current case matches), use the `fallthrough` keyword.

	// Example of fallthrough:
	num2 := 2
	switch num2 {
	case 1:
		fmt.Println("One")
	case 2:
		fmt.Println("Two")
		fallthrough
	case 3:
		// This block executes because of `fallthrough`.
		fmt.Println("Three")
	default:
		fmt.Println("Default case")
	}
}
