// var

// scoping:

// var is function scoped or global scoped

var x = 10;

if ((x = 10)) {
  var x = 20;
  console.log(x);
}

console.log(x);

// var is function scoped or global scoped

// example1:
function foo() {
  var x = 1;

  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();

  console.log(x); // 1 (`x` is in scope)
  // console.log(y); // ReferenceError, `y` is scoped to `bar`
}

foo();

// example2:
for (var a of [1, 2, 3]);
console.log(a); // 3 (var is not blocked scoped)

// example3:
try {
  var b = 10;
} catch (error) {}

console.log(b); // 10 (var is not blocked scoped)

// hoisting

// hoisting is the default behavior of javascript of moving the declarations (not initializations) to the top of their scope before code execution

bla = 2;
var bla;

// this is implicitly understood as
var bla;
bla = 2;

function doSomething() {
  console.log(bar);
  var bar = 111;
  console.log(bar);
}

// this is implicitly understood as

function doSomething() {
  var bar;
  console.log(bar);
  bar = 111;
  console.log(bar);
}

doSomething();

// Re declarations

// duplicate variable declarations using var will not trigger an error

var alpha = 0;
var alpha = 1;
console.log(alpha);
var alpha = 2;
console.log(alpha);

// var declarations can also be in the same scope as a function declaration.

var beta = 1;
function beta() {}
console.log(beta);
