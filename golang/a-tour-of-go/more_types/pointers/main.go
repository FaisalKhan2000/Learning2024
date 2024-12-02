package main

import "fmt"

func main() {

	i := 12

	var ptr *int = &i

	//Printing the pointer (memory address)
	fmt.Println("Pointer address:", ptr)

	// Dereferencing the pointer (getting the value)
	fmt.Println("Value at pointer:", *ptr)

	*ptr = 21

	fmt.Println("Changed Value at pointer:", *ptr)

	fmt.Println("Value of the i: ", i)

}
