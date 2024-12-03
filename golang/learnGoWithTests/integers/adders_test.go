package integers

import (
	"fmt"
	"testing"
)

// Add takes two integers and returns the sum of them.
func Add(x, y int) int {
	return x + y
}

// ExampleAdd is treated as a special test case by the Go testing framework.
// The output of the function (fmt.Println(sum)) is compared to the commented expected output (if present).
func ExampleAdd() {
	sum := Add(1, 5)
	fmt.Println(sum)
	// Output: 6
}

func TestAdder(t *testing.T) {
	sum := Add(2, 2)
	expected := 4

	if sum != expected {
		t.Errorf("expected '%d' but go '%d'", expected, sum)
	}
}
