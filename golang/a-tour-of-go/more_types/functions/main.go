package main

import (
	"fmt"
	"math"
)

// The compute function takes a function (fn) as a parameter.
// This function must accept two float64 values and return a float64 value.
func compute(fn func(float64, float64) float64) float64 {
	// Calls the passed-in function with arguments 3 and 4
	return fn(3, 4)
}

func main() {

	// Hypotenuse function (anonymous function assigned to hypot)
	// This function calculates the hypotenuse of a right triangle using the Pythagorean theorem
	hypot := func(x, y float64) float64 {
		return math.Sqrt(x*x + y*y)
	}

	// Call the hypot function with arguments 5 and 12
	// Hypothetical triangle with sides 5 and 12, the hypotenuse is calculated
	fmt.Println(hypot(5, 12)) // Output: 13 (calculated as √(5² + 12²))

	// Call the compute function with the hypot function as an argument
	// This computes the hypotenuse using the values 3 and 4
	// compute passes 3 and 4 to the hypot function
	fmt.Println(compute(hypot)) // Output: 5 (calculated as √(3² + 4²))

	// Call the compute function with math.Pow as the function argument
	// math.Pow returns x raised to the power of y, so here it's calculating 3^4
	fmt.Println(compute(math.Pow)) // Output: 81 (3^4)

	// Call the compute function with math.Max as the function argument
	// math.Max returns the maximum of two values, so here it's finding the maximum of 3 and 4
	fmt.Println(compute(math.Max)) // Output: 4 (maximum of 3 and 4)
}
