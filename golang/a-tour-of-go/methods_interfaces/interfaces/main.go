package main

import (
	"fmt"
	"math"
)

// Interfaces
// An interface type is defined as a set of method signatures.

// A value of interface type can hold any value that implements those methods.

type Abser interface {
	Abs() float64
}

// MyFloat
type MyFloat float64

func (f MyFloat) Abs() float64 {
	if f < 0 {
		return float64(-f)
	}
	return float64(f)
}

// Vertex
type Vertex struct {
	X, Y float64
}

func (v *Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

// Interfaces are implemented implicitly

type I interface {
	M()
}

type T struct {
	S string
}

func (t *T) M() {
	if t == nil {
		fmt.Println("<nil>")
		return
	}
	fmt.Println(t.S)
}

// Interface values
// Under the hood, interface values can be thought of as a tuple of a value and a concrete type:

// (value, type)
type F float64

func (f F) M() {
	fmt.Println(f)
}

func describe(i I) {
	fmt.Printf("(%v, %T)\n", i, i)
}

// Interface values with nil underlying values
// If the concrete value inside the interface itself is nil, the method will be called with a nil receiver.

// Nil interface values
// A nil interface value holds neither value nor concrete type.

// The empty interface
// The interface type that specifies zero methods is known as the empty interface:

// interface{}

func main() {
	var a Abser
	f := MyFloat(-math.Sqrt2)
	v := Vertex{3, 4}

	a = f // a MyFloat implements Abser
	fmt.Println(a.Abs())
	a = &v // a *Vertex implements Abser
	fmt.Println(a.Abs())

	// In the following line, v is a Vertex (not *Vertex)
	// and does NOT implement Abser.
	// a = v

	// fmt.Println(a.Abs())

	// Interfaces are implemented implicitly
	// var i I
	// s := T{"hello"}

	var i I = &T{"hello"}
	describe(i) // (&{hello}, *main.T)
	// i = s
	i.M()

	i = F(math.Pi) // (3.141592653589793, main.F)
	describe(i)
	i.M()

	// Interface values with nil underlying values
	var t *T
	i = t
	describe(i)
	i.M()

	// The empty interface
	var j interface{}
	fmt.Printf("(%v, %T)\n", j, j)

	j = 42
	fmt.Printf("(%v, %T)\n", j, j)

	j = "hello"
	fmt.Printf("(%v, %T)\n", j, j)

}
