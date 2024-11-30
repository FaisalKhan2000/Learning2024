package main

import (
	"fmt"
)

// **Basic Function**
// A simple function with no parameters and no return value.
func myFunction() {
	fmt.Printf("my function\n")
}

// **Function with Parameters**
// Functions can accept parameters of specified types.
func familyName(fName string, age int) {
	// Takes a string `fName` and an integer `age` as inputs.
	fmt.Println("Hello", age, "year old", fName, "Khan")
}

// **Function with a Single Return Value**
// Functions can return values. The `add` function returns an integer.
func add(x, y int) int {
	// Adds two integers and returns the result.
	return x + y
}

// **Named Returns**
// Functions can define named return values.
// Named returns can make the code more readable.
func multiply(x, y int) (result int) {
	// Multiplies two integers and assigns the result to `result`.
	result = x * y
	return // Implicitly returns the named `result`.
}

// **Function with Multiple Return Values**
// Functions can return multiple values.
func add2(x int, y string) (result int, txt1 string) {
	// Performs addition and string concatenation.
	result = x + x       // Assigns double of `x` to `result`.
	txt1 = y + " World!" // Appends " World!" to the string `y`.
	return               // Implicitly returns `result` and `txt1`.
}

func main() {
	// **Calling a Basic Function**
	myFunction()

	// **Calling a Function with Parameters**
	familyName("Faisal", 24)
	familyName("Nasim", 22)

	// **Calling a Function with a Single Return Value**
	fmt.Println("Addition result:", add(12, 12))

	// **Calling a Function with Named Returns**
	fmt.Println("Multiplication result:", multiply(12, 12))

	// Storing the return value in a variable
	total := multiply(1, 2)
	fmt.Println("Stored result:", total)

	// **Calling a Function with Multiple Return Values**
	// Retrieving both return values
	result, txt := add2(5, "hello")
	fmt.Println("Addition and String concatenation:", result, txt)

	// **Ignoring One of the Return Values**
	_, onlyTxt := add2(5, "hello") // Ignoring the first return value
	fmt.Println("String result only:", onlyTxt)

	onlyResult, _ := add2(5, "hello") // Ignoring the second return value
	fmt.Println("Addition result only:", onlyResult)
}
