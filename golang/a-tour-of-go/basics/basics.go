package basics

// Imports
import (
	"fmt"
	"math"
	"math/cmplx"
	"math/rand"
)

// --- EXPORT RULES ---
// In Go, a name is exported (accessible outside the package) if it begins with a capital letter.

// --- FUNCTIONS ---

// Add returns the sum of two integers.
func Add(a int, b int) int {
	return a + b
}

// RandomNumber generates a random integer between 0 and 9.
func RandomNumber() int {
	return rand.Intn(10) // rand.Intn(n) generates a random integer in the range [0, n).
}

// Swap swaps two strings and returns them.
func Swap(x, y string) (string, string) {
	return y, x
}

// Split demonstrates named return values. It splits `sum` into two integers: x and y.
func Split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return // Implicitly returns x and y.
}

// --- VARIABLES ---

// Variables declared without initialization have a zero value.
var c, python, javascript bool // Defaults: false, false, false.

// Variables declared with initial values.
var i, j int = 1, 2 // Initialized with values.

// Variables demonstrates the use of zero values.
func Variables() {
	var i int // Defaults to 0.
	fmt.Println(i, c, python, javascript)
}

// VariablesWithInitializers demonstrates variable declarations with initialization.
func VariablesWithInitializers() {
	var c, python, java = true, false, "no!"
	fmt.Println(i, j, c, python, java)
}

// ShortVariableDeclarations demonstrates shorthand declaration using `:=`.
func ShortVariableDeclarations() {
	i, j := 1, 2
	k := 3 // `k` is inferred as an `int`.
	c, python, java := true, false, "no!"
	fmt.Println(i, j, k, c, python, java)
}

// --- DATA TYPES ---

// Predeclared variable examples with various types.
var (
	// Boolean type
	ToBe bool = false

	// Unsigned integer type
	MaxInt uint64 = 1<<64 - 1

	// Complex number type
	z complex128 = cmplx.Sqrt(-5 + 12i)

	// String type
	str string = "Hello, Go!"

	// Signed integers
	i1  int   = -42
	i8  int8  = -128
	i16 int16 = -32768
	i32 int32 = -2147483648
	i64 int64 = -9223372036854775808

	// Unsigned integers
	u   uint   = 42
	u8  uint8  = 255
	u16 uint16 = 65535
	u32 uint32 = 4294967295
	u64 uint64 = 18446744073709551615

	// Byte type (alias for uint8)
	b byte = 255

	// Rune type (alias for int32, representing Unicode code points)
	r rune = '🚀' // Unicode for rocket emoji.

	// Floating-point types
	f32 float32 = 3.14159
	f64 float64 = 2.71828

	// Complex numbers
	c64  complex64  = complex(1, 2) // 1 + 2i
	c128 complex128 = complex(3, 4) // 3 + 4i
)

// BasicTypes demonstrates printing various data types and their values.
func BasicTypes() {
	fmt.Printf("Type: %T, Value: %v\n", ToBe, ToBe)            // Boolean
	fmt.Printf("Type: %T, Value: %v\n", MaxInt, MaxInt)        // Unsigned integer
	fmt.Printf("Type: %T, Value: %v\n", z, z)                  // Complex number
	fmt.Printf("Type: %T, Value: %q\n", str, str)              // String
	fmt.Printf("Type: %T, Value: %v\n", i1, i1)                // Signed integers
	fmt.Printf("Type: %T, Value: %v\n", u8, u8)                // Unsigned integers
	fmt.Printf("Type: %T, Value: %q (Unicode: %U)\n", r, r, r) // Rune
	fmt.Printf("Type: %T, Value: %v\n", f32, f32)              // Floating-point
	fmt.Printf("Type: %T, Value: %v\n", c64, c64)              // Complex number
}

// ZeroValues demonstrates default values (zero values) for uninitialized variables.
func ZeroValues() {
	var i int
	var f float64
	var b bool
	var s string
	fmt.Printf("Default values: %v %v %v %q\n", i, f, b, s)
}

// --- TYPE CONVERSION ---

// IntToFloat converts an integer to a floating-point number.
func IntToFloat(x int) float64 {
	return float64(x) // Explicit conversion.
}

// TypeConversion demonstrates converting between types in Go.
func TypeConversion() {
	var x, y int = 3, 4
	var f float64 = math.Sqrt(float64(x*x + y*y)) // Pythagoras theorem.
	var z uint = uint(f)                          // Explicit conversion.
	fmt.Println(x, y, z)
}

// --- CONSTANTS ---

// Constants are declared using `const`.
const Pi = 3.14 // Example of a constant.

// Constants demonstrates the use of constants.
func Constants() {
	const World = "世界" // Unicode string for "world".
	fmt.Println("Hello", World)
	fmt.Println("Happy", Pi, "Day")

	const Truth = true
	fmt.Println("Go rules?", Truth)
}
