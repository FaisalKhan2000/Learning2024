package main

import "fmt"

// Vertex struct represents a geographic location with latitude and longitude
type Vertex struct {
	Lat, Long float64
}

// Declare a map (nil map by default, can't insert elements directly into it)
// The map will store a string as the key and a Vertex as the value
var m map[string]Vertex

func main() {
	// Print the map m (since it's nil, the output is an empty map)
	// Output: map[] (nil map, no elements yet)
	fmt.Println(m)

	// Alternative way to create a map:
	// var m = make(map[string]Vertex)
	// The map is initialized with `make`, but it's commented out here.

	// Initialize the map using `make` to allocate space for the map
	// Now we can insert elements into the map
	m = make(map[string]Vertex)
	// Print the map after initialization (non-nil, but still empty)
	// Output: map[] (empty but non-nil map)
	fmt.Println(m)

	// Insert a key-value pair into the map: "Bell Labs" -> Vertex{latitude, longitude}
	m["Bell Labs"] = Vertex{40.68433, -74.39967}
	// Print the value stored for the key "Bell Labs"
	// Output: {40.68433 -74.39967} (Vertex object with latitude and longitude)
	fmt.Println(m["Bell Labs"])

	// Map literals allow us to initialize a map with multiple key-value pairs
	// Here, we use a map literal to initialize the map `n` with two elements
	var n = map[string]Vertex{
		"Bell Labs": {
			40.68433, -74.39967, // Latitude and longitude for Bell Labs
		},
		"Google": {
			37.42202, -122.08408, // Latitude and longitude for Google
		},
	}
	// Print the initialized map
	// Output: map[Bell Labs:{40.68433 -74.39967} Google:{37.42202 -122.08408}]
	fmt.Println(n)

	// Mutating (modifying) maps: modifying values and deleting entries
	a := make(map[string]int)

	// Insert a key-value pair into map a
	a["Answer"] = 42
	// Print the value associated with the key "Answer"
	// Output: The value: 42
	fmt.Println("The value:", a["Answer"])

	// Update the value associated with the key "Answer"
	a["Answer"] = 48
	// Print the updated value
	// Output: The value: 48
	fmt.Println("The value:", a["Answer"])

	// Delete the key-value pair for "Answer"
	delete(a, "Answer")
	// Print the value for "Answer" after deletion (zero value for int is 0)
	// Output: The value: 0
	fmt.Println("The value:", a["Answer"])

	// Check if a key exists in the map
	k, v := a["Answer"]
	// Print whether the key "Answer" is present in the map
	// k is the value (0 if not found), v is a boolean indicating presence
	// Output: The value: 0 Present? false
	fmt.Println("The value:", k, "Present?", v)
}
