package main

import "fmt"

func main() {

	// **Basic For Loop**
	// The `for` loop is the only looping construct in Go (no while or do-while loops).
	// It consists of three parts: initialization, condition, and post-statement.
	for i := 0; i < 5; i++ {
		fmt.Println("Basic loop - Value of i:", i) // Prints 0 to 4
	}

	// **For Loop with Increment by Step**
	// The increment statement can be modified to increase by steps other than 1.
	for i := 0; i < 100; i += 10 {
		fmt.Println("Increment by 10 - Value of i:", i) // Prints 0, 10, 20, ..., 90
	}

	// **Using `continue` in a Loop**
	// The `continue` statement skips the current iteration and moves to the next one.
	for i := 0; i < 5; i++ {
		if i == 3 {
			continue // Skips the rest of the loop body when i == 3
		}
		fmt.Println("Continue Example - Value of i:", i) // Prints 0, 1, 2, 4
	}

	// **Using `break` in a Loop**
	// The `break` statement terminates the loop entirely.
	for i := 0; i < 5; i++ {
		if i == 3 {
			break // Stops the loop when i == 3
		}
		fmt.Println("Break Example - Value of i:", i) // Prints 0, 1, 2
	}

	// **Nested Loops**
	// Loops can be nested to iterate over multidimensional data structures or combinations of values.
	adj := [2]string{"big", "tasty"}                 // Array of adjectives
	fruits := [3]string{"apple", "orange", "banana"} // Array of fruits

	for i := 0; i < len(adj); i++ { // Outer loop iterates over adjectives
		for j := 0; j < len(fruits); j++ { // Inner loop iterates over fruits
			fmt.Println(adj[i], fruits[j]) // Prints combinations like "big apple", "big orange", ...
		}
	}

	// **Using the `range` Keyword**
	// The `range` keyword iterates over elements of a collection (e.g., arrays, slices, maps, strings).

	// Example 1: Using `range` with both index and value
	fmt.Println("\nUsing range with index and value:")
	for i, v := range fruits {
		fmt.Printf("Index: %v, Value: %v\n", i, v) // Prints index and value of each element
	}

	// Example 2: Using `range` with value only (ignoring index)
	fmt.Println("\nUsing range with value only:")
	for _, val := range fruits {
		fmt.Printf("Value: %v\n", val) // Prints only values
	}

	// Example 3: Using `range` with index only (ignoring value)
	fmt.Println("\nUsing range with index only:")
	for idx := range fruits {
		fmt.Printf("Index: %v\n", idx) // Prints only indices
	}

	// **Infinite Loop (Not Recommended)**
	// Uncomment the code below to see an infinite loop.
	// for {
	//   fmt.Println("This will run forever!")
	// }
}
