package main

import (
	"fmt"
)

// The Stringer Interface

type Stringer interface {
	String()
}

// Basic Implementation

type Person struct {
	Name string
	Age  int
}

func (p Person) String() string {
	return fmt.Sprintf("Name: %s, Age: %d", p.Name, p.Age)
}

// Pointer Receivers
type Rectangle struct {
	Width  int
	Height int
}

// Implementing Stringer with a pointer receiver
func (r *Rectangle) String() string {
	return fmt.Sprintf("Rectangle [Width: %d, Height: %d]", r.Width, r.Height)
}

// Handling Embedded Types
type Point struct {
	X, Y int
}

type Circle struct {
	Center Point
	Radius int
}

func (c Circle) String() string {
	return fmt.Sprintf("Circle [center: (%d, %d), Radius: %d]", c.Center.X, c.Center.Y, c.Radius)

}

// Using Stringers with Slices and Maps
type Team struct {
	Name    string
	Members []string
}

func (t Team) String() string {
	return fmt.Sprintf("Team %s with members: %v", t.Name, t.Members)
}

// Customizing Stringer Behavior
// Conditional Formatting: Add conditions in your String method to handle special cases.
// Localization: Use Stringer to format data based on locale settings or preferences

type Account struct {
	ID      int
	Balance float64
}

func (a Account) String() string {
	if a.Balance < 0 {
		return fmt.Sprintf("Account %d is overdrawn! Balance: %.2f", a.ID, a.Balance)

	}
	return fmt.Sprintf("Account %d has Balance: %.2f", a.ID, a.Balance)
}

func main() {
	p := Person{Name: "Faisal", Age: 25}
	fmt.Println(p)

	rect := &Rectangle{Width: 10, Height: 20}
	fmt.Println(rect)

	circle := Circle{Center: Point{X: 5, Y: 10}, Radius: 15}
	fmt.Println(circle)

	team := Team{Name: "GoDev", Members: []string{"Alice", "Bob", "Charlie"}}
	fmt.Println(team)

	acc := Account{ID: 101, Balance: -50.75}
	fmt.Println(acc)

}
