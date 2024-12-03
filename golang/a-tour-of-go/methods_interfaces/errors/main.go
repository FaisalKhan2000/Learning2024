// learn about , errors, readers, writers, images, generics

// https://www.programiz.com/golang/errors

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

// Constructing Errors
// Errors can be constructed on the fly using Go’s built-in errors or fmt packages.

func DoSomething() error {
	return errors.New("something didn't work")
}

// Similarly, the fmt package can be used to add dynamic data to the error, such as an int, string, or another error. For example:

// func Divide(a, b int) (int, error) {
// 	if b == 0 {
// 		return 0, fmt.Errorf("can't divide '%d' by zero", a)
// 	}

// 	return a / b, nil
// }

// Defining Sentinel Errors (predefined errors)
var ErrDivideByZero error = errors.New("divide by zero")

// func Divide(a, b int) (int, error) {
// 	if b == 0 {
// 		return 0, ErrDivideByZero
// 	}
// 	return a / b, nil
// }

// Defining Custom Error Types
type DivisionError struct {
	IntA int
	IntB int
	Msg  string
}

func (d *DivisionError) Error() string {
	return d.Msg
}

func Divide(a, b int) (int, error) {
	if b == 0 {
		return 0, &DivisionError{
			Msg:  fmt.Sprintf("cannot divide '%d' by zero", a),
			IntA: a, IntB: b,
		}
	}
	return a / b, nil
}

func main() {
	a, b := 10, 0
	result, err := Divide(a, b)

	// sentinel error
	// if err != nil {
	// 	switch {
	// 	// comparing error using error.Is(error, target error)
	// 	case errors.Is(err, ErrDivideByZero):
	// 		fmt.Println("divide by zero error")
	// 	default:
	// 		fmt.Printf("unexpected division error: %s\n", err)
	// 	}
	// 	return
	// }

	// fmt.Printf("%d / %d = %d\n", a, b, result)

	// Defining Custom Error Types
	if err != nil {
		var divErr *DivisionError
		switch {
		case errors.As(err, &divErr):
			fmt.Printf("%d / %d is not mathematically valid: %s\n",
				divErr.IntA, divErr.IntB, divErr.Error())
		default:
			fmt.Printf("unexpected division error: %s\n", err)
		}

		return
	}

	fmt.Printf("%d / %d = %d\n", a, b, result)

}
