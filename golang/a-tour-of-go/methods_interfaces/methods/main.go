package main

import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

// methods
// A method is a function with a special receiver argument.
func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

// You can declare a method on non-struct types, too.
type MyFloat float64

func (f MyFloat) Abs() float64 {
	if f < 0 {
		return float64(-f)
	}
	return float64(f)
}

// pointer receivers
// You can declare methods with pointer receivers.

func (v *Vertex) Scale(f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

func main() {

	v := Vertex{3, 4}
	fmt.Println(v)
	fmt.Println(v.Abs())

	f := MyFloat(-math.Sqrt2)
	fmt.Println(f.Abs())

	v.Scale(10)
	fmt.Println(v)
	fmt.Println(v.Abs())

	x := &Vertex{3, 4}
	fmt.Printf("Before scaling: %+v, Abs: %v\n", x, x.Abs())
	x.Scale(5)
	fmt.Printf("After scaling: %+v, Abs: %v\n", x, x.Abs())
}

// again learn
// methods to Choosing a value or pointer receiver
