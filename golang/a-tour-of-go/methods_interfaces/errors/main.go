// https://earthly.dev/blog/golang-errors/
// refer from this

// errGroups package

package main

import (
	"errors"
	"fmt"
)

// error interface
type error interface {
	Error() string
}

// Custom Error Types
type MyError struct {
	Code    int
	Message string
}

func (e MyError) Error() string {
	return fmt.Sprintf("Code %d: %s", e.Code, e.Message)
}

// Wrapping and Unwrapping Errors
// Go 1.13 introduced the errors package with functions like errors.Unwrap, errors.Is, and errors.As for better error handling.

// Using errors.As
// The errors.As function checks if an error can be cast to a specific type.

func main() {
	// Creating Errors
	err1 := errors.New("an example error")
	fmt.Println(err1)

	// Using fmt.Errorf
	// The fmt.Errorf function allows you to create errors with formatted strings.

	name := "Faisal"
	err2 := fmt.Errorf("user %s not found", name)
	fmt.Println(err2)

	err3 := MyError{Code: 404, Message: "Resource not found"}
	fmt.Println(err3)

	// Wrapping Errors with fmt.Errorf
	// %w is used to wrap the error

	baseErr := errors.New("file not found")
	wrappedErr := fmt.Errorf("failed to open file: %w", baseErr)
	fmt.Println(wrappedErr) // Output: failed to open file: file not found

	// Unwrap the error
	originalErr := errors.Unwrap(wrappedErr)
	fmt.Println(originalErr) // Output: file not found

	// Checking for Specific Errors
	// Use errors.Is to check if an error is of a specific type.

	if errors.Is(wrappedErr, baseErr) {
		fmt.Println("The error is: file not found")
	}
}
