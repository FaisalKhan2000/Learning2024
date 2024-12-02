package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
)

// downloadFile downloads a file from the given URL and saves it to the specified location.
func downloadFile(url string, dest string) error {
	// Create the file
	out, err := os.Create(dest)
	if err != nil {
		return fmt.Errorf("error creating file: %w", err)
	}
	defer out.Close()

	// Get the data
	resp, err := http.Get(url)
	if err != nil {
		return fmt.Errorf("error downloading file: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("bad status: %s", resp.Status)
	}

	// Write the data to the file
	_, err = io.Copy(out, resp.Body)
	if err != nil {
		return fmt.Errorf("error saving file: %w", err)
	}

	return nil
}

func main() {
	// URL and destination file
	var url string
	fmt.Println("Enter the file URL to download:")
	fmt.Scanln(&url)

	var dest string
	fmt.Println("Enter the destination file path (including file name):")
	fmt.Scanln(&dest)

	// Get absolute path for better clarity
	dest, _ = filepath.Abs(dest)

	fmt.Printf("Downloading file from %s to %s...\n", url, dest)

	// Start downloading
	err := downloadFile(url, dest)
	if err != nil {
		fmt.Printf("Error: %v\n", err)
		return
	}

	fmt.Println("Download completed successfully!")
}
