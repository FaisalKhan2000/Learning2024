package main

import (
	"fmt"
)

// **Struct Definition**
// A struct is a collection of fields. It groups variables under one name.
type Person struct {
	name   string // Person's name
	age    int    // Person's age
	job    string // Person's job
	salary int    // Person's salary
}

// **Function to Print Struct Details**
// Accepts a `Person` struct as a parameter and prints its fields.
func printPerson(per Person) {
	fmt.Println("Name: ", per.name)
	fmt.Println("Age: ", per.age)
	fmt.Println("Job: ", per.job)
	fmt.Println("Salary: ", per.salary)
}

func main() {
	// **Struct Variable Declaration**
	// Declares two struct variables: `pers1` and `pers2`.
	var pers1 Person
	var pers2 Person

	// **Assigning Values to Struct Fields**
	// For `pers1`, assign values directly to its fields.
	pers1.name = "Hege"
	pers1.age = 45
	pers1.job = "Teacher"
	pers1.salary = 6000

	// For `pers2`, assign values directly to its fields.
	pers2.name = "Cecilie"
	pers2.age = 24
	pers2.job = "Marketing"
	pers2.salary = 4500

	// **Calling a Function to Print Struct Details**
	// Pass `pers1` to the `printPerson` function to print its details.
	fmt.Println("Person 1 Details:")
	printPerson(pers1)

	// Pass `pers2` to the `printPerson` function to print its details.
	fmt.Println("\nPerson 2 Details:")
	printPerson(pers2)
}
