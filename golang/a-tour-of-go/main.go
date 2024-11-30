package main

import (
	"a-tour-of-go/basics"
	"a-tour-of-go/flow_control"
	"fmt"
)

func main() {
	// --- FUNCTION USAGE ---

	// Add function
	sum := basics.Add(10, 20)
	fmt.Printf("Sum of 10 and 20: %d\n", sum)

	// RandomNumber function
	randomNum := basics.RandomNumber()
	fmt.Printf("Random number: %d\n", randomNum)

	// Swap function
	a, b := basics.Swap("Hello", "World")
	fmt.Printf("Swapped: %s, %s\n", a, b)

	// Split function
	x, y := basics.Split(17)
	fmt.Printf("Split result: x = %d, y = %d\n", x, y)

	// --- VARIABLE EXAMPLES ---

	// ZeroValues function
	fmt.Println("\nZero Values:")
	basics.ZeroValues()

	// Variables function
	fmt.Println("\nVariables:")
	basics.Variables()

	// Variables with initializers
	fmt.Println("\nVariables with Initializers:")
	basics.VariablesWithInitializers()

	// Short variable declarations
	fmt.Println("\nShort Variable Declarations:")
	basics.ShortVariableDeclarations()

	// --- BASIC TYPES ---

	fmt.Println("\nBasic Types:")
	basics.BasicTypes()

	// --- TYPE CONVERSION ---

	fmt.Println("\nType Conversion:")
	basics.TypeConversion()

	// Convert integer to float
	intVal := 42
	floatVal := basics.IntToFloat(intVal)
	fmt.Printf("Integer %d converted to Float: %.2f\n", intVal, floatVal)

	// --- CONSTANTS ---

	fmt.Println("\nConstants:")
	basics.Constants()

	// flow control

	// for loop

	flow_control.ForLoop()

	flow_control.Runtime()

	flow_control.WhenIsSaturday()

	flow_control.Time()

	flow_control.Defer()

	flow_control.StackingDefers()
}
