package main

import (
	"fmt"
)

func main() {

	var a bool = true    // Boolean
	var b int = 5        // Integer
	var c float32 = 3.14 // Floating point number
	var d string = "Hi!" // String

	fmt.Println("Boolean: ", a)
	fmt.Println("Integer: ", b)
	fmt.Println("Float:   ", c)
	fmt.Println("String:  ", d)

	// boolean
	var b1 bool = true // typed declaration with initial value
	var b2 = true      // untyped declaration with initial value
	var b3 bool        // typed declaration without initial value
	b4 := true         // untyped declaration with initial value

	fmt.Println(b1) // Returns true
	fmt.Println(b2) // Returns true
	fmt.Println(b3) // Returns false
	fmt.Println(b4) // Returns true

	//  Signed integers
	// can store both positive and negative values
	var x int = 500
	y := 20

	fmt.Printf("Type: %T, value: %v\n", x, x)
	fmt.Printf("Type: %T, value: %v\n", y, y)

	// Unsigned integers
	// Unsigned integers, declared with one of the uint keywords, can only store non-negative values:
	var x1 uint = 500
	var y1 uint = 4500

	fmt.Printf("Type: %T, value: %v\n", x1, x1)
	fmt.Printf("Type: %T, value: %v\n", y1, y1)

	// float
	var x2 float32 = 123.78
	var y2 float32 = 3.4e+38

	fmt.Printf("Type: %T, value: %v\n", x2, x2)
	fmt.Printf("Type: %T, value: %v\n", y2, y2)

	// string
	var txt1 string = "Hello!"
	var txt2 string
	txt3 := "World 1"

	fmt.Printf("Type: %T, value: %v\n", txt1, txt1)
	fmt.Printf("Type: %T, value: %v\n", txt2, txt2)
	fmt.Printf("Type: %T, value: %v\n", txt3, txt3)

	// array
	var arr1 = [3]int{1, 2, 3}
	arr2 := [5]int{4, 5, 6, 8, 9}

	fmt.Println(arr1)
	fmt.Println(arr2)

	var arr3 = [...]int{1, 2, 3}
	arr4 := [...]int{4, 5, 6, 7, 8}

	fmt.Println(arr3)
	fmt.Println(arr4)

	// access elements of an array
	fmt.Println(arr1[0])
	fmt.Println(arr1[len(arr1)-1])

	// change elements of an array
	arr1[0] = 50
	fmt.Println(arr1)

	// array initialization
	// arr1 := [5]int{} //not initialized
	// arr2 := [5]int{1,2} //partially initialized
	// arr3 := [5]int{1,2,3,4,5} //fully initialized

	// Initialize Only Specific Elements
	arr5 := [5]int{1: 10, 4: 40}
	fmt.Println(arr5)

	// find length of an array
	fmt.Println(len(arr1))

	// slices
	myslice1 := []int{1}
	fmt.Println(len(myslice1))
	fmt.Println(cap(myslice1))
	fmt.Println(myslice1)

	myslice2 := []string{"Go", "Slices", "Are", "Powerful"}
	fmt.Println(len(myslice2))
	fmt.Println(cap(myslice2))
	fmt.Println(myslice2)

	// creating a slice from an array
	myslice3 := arr1[0:2]

	fmt.Printf("myslice = %v\n", myslice3)
	fmt.Printf("length = %d\n", len(myslice3))
	fmt.Printf("capacity = %d\n", cap(myslice3))

	// create a slice withe make function

	myslice4 := make([]int, 5, 10)
	fmt.Printf("myslice1 = %v\n", myslice4)
	fmt.Printf("length = %d\n", len(myslice4))
	fmt.Printf("capacity = %d\n", cap(myslice4))

	// with omitted capacity
	myslice5 := make([]int, 5)
	fmt.Printf("myslice2 = %v\n", myslice5)
	fmt.Printf("length = %d\n", len(myslice5))
	fmt.Printf("capacity = %d\n", cap(myslice5))

	// access slice
	prices := []int{10, 20, 30}

	fmt.Println(prices[0])
	fmt.Println(prices[2])

	// change the elements of slice
	prices[2] = 50
	fmt.Println(prices[0])
	fmt.Println(prices[2])

	// append
	prices = append(prices, 69, 79, 89)
	fmt.Printf("prices = %v\n", prices)
	fmt.Printf("length = %d\n", len(prices))
	fmt.Printf("capacity = %d\n", cap(prices))

	// append one slice to another slice
	appendedSlice := append(myslice1, myslice3...)

	fmt.Printf("appendedSlice=%v\n", appendedSlice)
	fmt.Printf("length=%d\n", len(appendedSlice))
	fmt.Printf("capacity=%d\n", cap(appendedSlice))

	// Copy Slice (efficient way)
	source := []int{1, 2, 3, 4, 5}

	// Create a destination slice with the same length as the source
	destination := make([]int, len(source))

	// Copy elements from source to destination
	copy(destination, source)

	// Print both slices
	fmt.Println("Source:", source)           // Output: Source: [1 2 3 4 5]
	fmt.Println("Destination:", destination) // Output: Destination: [1 2 3 4 5]
}
