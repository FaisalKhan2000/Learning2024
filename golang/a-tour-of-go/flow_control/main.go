package main

import (
	"fmt"
	"math"
	"runtime"
	"time"
)

// ForLoop demonstrates a simple `for` loop that adds integers from 0 to 9.
func ForLoop() {
	sum := 0
	for i := 0; i < 10; i++ {
		sum += i
	}
	fmt.Println("ForLoop sum:", sum)
}

// ForContinued demonstrates a `for` loop acting like a `while` loop.
// The loop continues until the sum reaches 1000.
func ForContinued() {
	sum := 1
	for sum < 1000 {
		sum += sum
	}
	fmt.Println("ForContinued sum:", sum)
}

// Sqrt computes the square root of a number.
// If the number is negative, it returns an imaginary result (as a string).
func Sqrt(x float64) string {
	if x < 0 {
		return Sqrt(-x) + "i" // Recursively call for absolute value of x and append 'i' for imaginary
	}
	return fmt.Sprint(math.Sqrt(x))
}

// Pow calculates x raised to the power of n,
// and checks if the result is less than a given limit.
// If it is, it returns the result, otherwise, it prints an error message.
func Pow(x, n, lim float64) float64 {
	if v := math.Pow(x, n); v < lim {
		return v
	} else {
		fmt.Printf("%g >= %g\n", v, lim)
	}
	return lim
}

// Runtime checks the current operating system and prints an appropriate message.
func Runtime() {
	fmt.Print("Go runs on ")

	switch os := runtime.GOOS; os {
	case "darwin":
		fmt.Println("OS X.")
	case "linux":
		fmt.Println("Linux.")
	default:
		// Handles other OS like freebsd, windows, etc.
		fmt.Printf("%s.\n", os)
	}
}

// WhenIsSaturday checks which day of the week it is and determines when the next Saturday is.
func WhenIsSaturday() {
	fmt.Println("When's Saturday?")
	today := time.Now().Weekday() // Get current weekday

	// Check if today, tomorrow, or in 2 days is Saturday
	switch time.Saturday {
	case today + 0:
		fmt.Println("Today.")
	case today + 1:
		fmt.Println("Tomorrow.")
	case today + 2:
		fmt.Println("In two days.")
	default:
		fmt.Println("Too far away.")
	}
}

// Time checks the current time of day and prints an appropriate greeting.
func Time() {
	t := time.Now()
	switch {
	case t.Hour() < 12:
		fmt.Println("Good morning!")
	case t.Hour() < 17:
		fmt.Println("Good afternoon.")
	default:
		fmt.Println("Good evening.")
	}
}

// Defer demonstrates how `defer` works in Go.
// The deferred function call is executed when the surrounding function returns.
func Defer() {
	defer fmt.Println("world") // Deferred function
	fmt.Println("hello")
}

// StackingDefers demonstrates how deferred function calls are stacked and executed in last-in-first-out (LIFO) order.
func StackingDefers() {
	fmt.Println("counting")
	for i := 0; i < 10; i++ {
		defer fmt.Println(i) // Defer the printing of numbers
	}
	fmt.Println("done")
}

func main() {
	// Display usage of different flow control concepts

	// For loop example
	ForLoop()

	// For loop as a while loop example
	ForContinued()

	// Square root function
	fmt.Println("Sqrt(16):", Sqrt(16))
	fmt.Println("Sqrt(-4):", Sqrt(-4)) // testing negative number

	// Power function
	fmt.Println("Pow(2, 3, 10):", Pow(2, 3, 10))
	fmt.Println("Pow(2, 3, 5):", Pow(2, 3, 5)) // testing with limit

	// Operating system runtime check
	Runtime()

	// Check when next Saturday is
	WhenIsSaturday()

	// Time of day greeting
	Time()

	// Defer example
	Defer()

	// Stacking defers example
	StackingDefers()
}
