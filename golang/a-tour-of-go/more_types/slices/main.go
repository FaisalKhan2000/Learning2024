package main

import "fmt"

// Helper function to print slice properties
func printSlice(s []int) {
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}

func main() {
	// Arrays and slices
	primes := [6]int{2, 3, 5, 7, 11, 13} // An array of integers
	fmt.Printf("Array: %T, %v\n", primes, primes)

	// Slicing the array creates a slice
	var s []int = primes[1:4] // Slice from index 1 (inclusive) to 4 (exclusive)
	fmt.Printf("Slice (from array): %T, %v\n", s, s)

	// Creating a slice directly
	var m = []int{1, 2, 3} // Direct slice declaration
	fmt.Printf("Slice (direct): %T, %v\n", m, m)

	// Slices are references to arrays
	names := [4]string{"John", "Paul", "George", "Ringo"} // Array of strings
	fmt.Println("Original array:", names)

	a := names[0:2] // Slice from index 0 to 2
	b := names[1:3] // Slice from index 1 to 3
	fmt.Println("Slices:", a, b)

	// Modifying one slice affects the original array and other slices
	b[0] = "XXX"
	fmt.Println("After modifying b:")
	fmt.Println("a:", a)
	fmt.Println("b:", b)
	fmt.Println("names:", names)

	// Slice operations
	// 1. Slice the slice to give it zero length
	s = s[:0]
	fmt.Println("\nAfter resizing slice to length 0:")
	printSlice(s)

	// 2. Extend slice length (up to its capacity)
	s = s[:4]
	fmt.Println("\nAfter extending slice length:")
	printSlice(s)

	// 3. Drop the first two values
	s = s[2:]
	fmt.Println("\nAfter dropping first two values:")
	printSlice(s)

	// Nil slices
	var s1 []int // A nil slice has no elements, length 0, and no capacity
	fmt.Println("\nNil slice properties:", s1, len(s1), cap(s1))
	// if s1 == nil {
	// 	fmt.Println("The slice is nil!")
	// }

	// Creating a slice with `make`
	// Syntax: make([]T, length, capacity)
	makeSlice1 := make([]int, 5) // Length 5, capacity 5
	fmt.Println("\nSlice created with make (length=5, capacity=5):")
	printSlice(makeSlice1)

	makeSlice2 := make([]int, 0, 5) // Length 0, capacity 5
	fmt.Println("\nSlice created with make (length=0, capacity=5):")
	printSlice(makeSlice2)

	// Appending elements to a slice
	fmt.Println("\nAppending elements to a slice:")
	makeSlice2 = append(makeSlice2, 1, 2, 3) // Appending elements to the slice
	printSlice(makeSlice2)

	// Using range to iterate over a slice
	fmt.Println("\nUsing range to iterate over a slice:")
	for i, v := range makeSlice2 {
		fmt.Printf("Index: %d, Value: %d\n", i, v)
	}

	// Skipping index or value in range
	fmt.Println("\nSkipping index or value in range:")
	for _, v := range makeSlice2 { // Skip the index
		fmt.Printf("Value: %d\n", v)
	}
	for i := range makeSlice2 { // Skip the value
		fmt.Printf("Index: %d\n", i)
	}
}
