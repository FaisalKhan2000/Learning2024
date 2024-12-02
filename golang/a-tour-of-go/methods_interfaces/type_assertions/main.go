package main

import "fmt"

func main() {
	// Interface can hold different types
	var i interface{} = "hello"

	// Basic type assertion (risky)
	s := i.(string)
	fmt.Println(s) // "hello"

	// Safe type assertion
	s, ok := i.(string)
	fmt.Println(s, ok) // "hello"

	f, ok := i.(float64)
	fmt.Println(f, ok)

	f = i.(float64) // panic
	fmt.Println(f)

}
