package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Book struct {
	ID     string  `json:"id"`     // Unique identifier
	Title  string  `json:"title"`  // Book title
	Author string  `json:"author"` // Book author
	Price  float64 `json:"price"`  // Book price
}

var books = []Book{
	{ID: "1", Title: "Go Programming", Author: "John Doe", Price: 29.99},
	{ID: "2", Title: "Gin Framework", Author: "Jane Smith", Price: 19.99},
}

func getBooks(c *gin.Context) {
	c.JSON(http.StatusOK, books)
}

func getBooksByID(c *gin.Context) {
	id := c.Param("id")

	for _, book := range books {
		if book.ID == id {
			c.JSON(http.StatusOK, book)
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{"message": "Book not found"})
}

func main() {
	r := gin.Default()

	// Routes
	r.GET("/books", getBooks)
	r.GET("/books/:id", getBooksByID)

	// start server
	r.Run(":8080")
}
