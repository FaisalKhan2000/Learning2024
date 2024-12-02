package main

import (
	"fmt"
	"io"
	"math"
	"strings"
)

// 1. Implicit Implementation
// Unlike some languages, Go interfaces are implemented implicitly. If a type has all the methods an interface requires, it automatically implements the interface.
type Shape interface {
	Area() float64
	Perimeter() float64
}

type Circle struct {
	Radius float64
}

func (c Circle) Area() float64 {
	return math.Pi * c.Radius * c.Radius
}

func (c Circle) Perimeter() float64 {
	return 2 * math.Pi * c.Radius
}

type Rectangle struct {
	Width, Height float64
}

func (r Rectangle) Area() float64 {
	return r.Width * r.Height
}

func (r Rectangle) Perimeter() float64 {
	return 2 * (r.Width + r.Height)
}

// Interface as Function Parameters
func PrintShapeInfo(s Shape) {
	fmt.Printf("Area: %.2f\n", s.Area())
	fmt.Printf("Perimeter: %.2f\n", s.Perimeter())
}

// 2. Empty Interface
// The empty interface interface{} (or any in Go 1.18+) can hold values of any type:
func ProcessAnything(v interface{}) {
	fmt.Println(v)
}

var x interface{}

// The variable x can hold a value of any type (e.g., int, string, struct, etc.).
// This makes the empty interface a universal container.

// 3. Interface Composition
// Interfaces can be composed of other interfaces:
type Reader interface {
	Read(p []byte) (n int, err error)
}
type Writer interface {
	Write(p []byte) (n int, err error)
}

// Combines Reader and Writer interfaces
type ReadWriter interface {
	Reader
	Writer
}

// 4. Type Assertion and Type Switch
// Interfaces allow you to check and extract the underlying concrete type:

type Vehicle interface {
	Drive()
}

type Car struct {
	Model string
}

func (c Car) Drive() {
	fmt.Println("Driving a car:", c.Model)
}

type Truck struct {
	Capacity int
}

func (t Truck) Drive() {
	fmt.Println("Driving a truck with capacity:", t.Capacity)
}

// Function to explain type assertion with the "ok" pattern
func examineVehicle(v Vehicle) {
	// Basic syntax
	// value, ok := interfaceVariable.(SpecificType)

	// Type Assertion with "ok" pattern
	// This is like saying "Are you a Car? If yes, tell me more about you"
	car, isCar := v.(Car)
	if isCar {
		fmt.Println("This is definitely a Car!")
		fmt.Println("Car Model:", car.Model)
	}

	truck, isTruck := v.(Truck)
	if isTruck {
		fmt.Println("This is definitely a Truck!")
		fmt.Println("Truck Capacity:", truck.Capacity)
	}

}

// Type Switch: A more elegant way to check types
func describeVehicle(v Vehicle) {
	switch vehicle := v.(type) {
	case Car:
		fmt.Println("It's a Car!")
		fmt.Println("Model:", vehicle.Model)
	case Truck:
		fmt.Println("It's a Truck!")
		fmt.Println("Capacity:", vehicle.Capacity)
	default:
		fmt.Println("Unknown vehicle type")
	}

}

// Interface as Function Parameters

// io.Reader is an interface
func printReaderContent(r io.Reader) {
	buffer := make([]byte, 8)

	for {
		n, err := r.Read(buffer)
		fmt.Printf("Read %d bytes: %q\n", n, buffer[:n])
		if err == io.EOF {
			fmt.Println("End of file reached")
			break
		}
		if err != nil {
			fmt.Printf("Error: %v\n", err)
			break
		}

	}
}

func main() {
	circle := Circle{Radius: 5}
	rectangle := Rectangle{Width: 4, Height: 6}

	fmt.Println("Circle: ")
	PrintShapeInfo(circle)
	fmt.Println("\nRectangle: ")
	PrintShapeInfo(rectangle)

	fmt.Println(x)     // <nil>
	ProcessAnything(2) // 2

	// Create some vehicles
	myCar := Car{Model: "Tesla Model 3"}
	myTruck := Truck{Capacity: 5000}

	// Vehicles as interface type
	var vehicle1 Vehicle = myCar
	var vehicle2 Vehicle = myTruck

	// Demonstrate type assertion
	fmt.Println("Type Assertion Examples:")
	examineVehicle(vehicle1)
	examineVehicle(vehicle2)

	fmt.Println("\nType Switch Examples:")
	// Demonstrate type switch
	describeVehicle(vehicle1)
	describeVehicle(vehicle2)

	// Showing safe type assertion
	fmt.Println("\nSafe Type Assertion:")
	// Safe way to check if something is a Car
	if car, ok := vehicle1.(Car); ok {
		fmt.Println("Safely extracted Car:", car.Model)
	}

	// What happens if type assertion fails
	fmt.Println("\nHandling Type Assertion Failure:")
	// This will not panic due to the ok pattern
	if _, ok := vehicle1.(Truck); !ok {
		fmt.Println("vehicle1 is NOT a Truck (as expected)")
	}

	// Create an io.Reader from a string
	reader := strings.NewReader("Hello, Go interfaces!")
	printReaderContent(reader) // Pass the Reader to the function

}
