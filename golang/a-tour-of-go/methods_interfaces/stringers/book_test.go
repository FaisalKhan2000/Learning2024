package main // Make sure this matches the package of the code being tested

import (
	"fmt"
	"testing"
)

type Book struct {
	Title  string
	Author string
}

func (b Book) String() string {
	return fmt.Sprintf("'%s' by %s", b.Title, b.Author)
}

func TestStringer(t *testing.T) {
	b := Book{Title: "Go Programming", Author: "John Doe"}
	expected := "'Go Programming' by John Doe"
	result := b.String()
	if result != expected {
		t.Errorf("String() = %q, want %q", result, expected)
	}
}
