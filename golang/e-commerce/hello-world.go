package main

import "fmt"

func main(){
	fmt.Println("Hello, World!")

	result:= subtract(2,3)
	fmt.Println("The result of subtraction is:", result)
}

func subtract( a, b int)int  {
	return a-b
}

