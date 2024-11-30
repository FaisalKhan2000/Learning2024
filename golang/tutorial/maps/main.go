package main

import (
	"fmt"
)

func main() {
	// **Initializing Maps**
	// `a` is a map with string keys and string values, initialized with values.
	var a = map[string]string{"brand": "ford", "model": "mustang", "year": "1964"}

	// `b` is a map with string keys and integer values, initialized with values.
	b := map[string]int{"Oslo": 1, "Bergen": 2, "Trondheim": 3, "Stavanger": 4}

	fmt.Printf("a\t%v\n", a)
	fmt.Printf("b\t%v\n", b)

	// **Creating Maps Using `make`**
	// `c` is an empty map created using `make`.
	var c = make(map[string]string)
	c["brand"] = "ford"
	c["model"] = "mustang"
	c["year"] = "1964"

	// `d` is another map created using `make` and initialized with integer values.
	d := make(map[string]int)
	d["Oslo"] = 1
	d["Bergen"] = 2
	d["Trondheim"] = 3
	d["Stavanger"] = 4

	fmt.Printf("c\t%v\n", c)
	fmt.Printf("d\t%v\n", d)

	// **Creating Empty Maps**
	var e map[string]string         // Declares a nil map (uninitialized).
	var f = make(map[string]string) // Creates an empty map using `make`.

	fmt.Println("Is e nil?", e == nil) // true, as `e` is nil.
	fmt.Println("Is f nil?", f == nil) // false, as `f` is initialized.

	// **Accessing Map Elements**
	// Access values by key.
	brand := a["brand"]
	fmt.Println("Brand:", brand)

	// **Updating Map Elements**
	// Change the value of a key.
	a["year"] = "2022"
	fmt.Println("Updated map a:", a)

	// **Adding New Elements**
	// Add a new key-value pair to the map.
	a["color"] = "blue"
	fmt.Println("Map a after addition:", a)

	// **Checking for Specific Elements**
	// Use the second return value to check if a key exists.
	value, exists := a["model"]
	if exists {
		fmt.Println("Model exists with value:", value)
	} else {
		fmt.Println("Model does not exist")
	}

	// Check for a non-existent key.
	_, exists = a["engine"]
	fmt.Println("Does 'engine' exist?", exists)

	// **Maps are References**
	// Modifying a map through one reference affects all references.
	g := a
	g["color"] = "red"
	fmt.Println("Map a after modifying g:", a)

	// **Iterating Over Maps**
	// Use `range` to iterate over key-value pairs.
	fmt.Println("Iterating over map b:")
	for key, value := range b {
		fmt.Printf("Key: %v, Value: %v\n", key, value)
	}

	// **Iterating Over Maps in Specific Order**
	// Maps in Go do not guarantee iteration order.
	// To iterate in order, extract keys, sort them, and then access the map.

	keys := []string{}
	for key := range b {
		keys = append(keys, key)
	}
	fmt.Println("Keys in map b (unsorted):", keys)

	// Sorting keys (optional: requires `sort` package).
	// Uncomment below to sort keys (requires import of "sort").
	// sort.Strings(keys)
	// for _, key := range keys {
	// 	fmt.Printf("Key: %v, Value: %v\n", key, b[key])
	// }
}
