package iteration

import (
	"testing"
)

// repeat count
const repeatCount = 5

func Repeat(character string) string {
	var repeated string
	for i := 0; i < repeatCount; i++ {
		repeated += character
	}
	return repeated
}

func TestRepeat(t *testing.T) {
	// got
	repeated := Repeat("b")

	// want
	expected := "bbbbb"

	if repeated != expected {
		t.Errorf("expected %q but got %q", expected, repeated)
	}
}

// Benchmarking

func BenchmarkRepeat(b *testing.B) {
	for i := 0; i < b.N; i++ {
		Repeat("a")
	}
}
