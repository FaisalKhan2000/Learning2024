// Number

const { forEach } = require("lodash");

// Number values represent floating-point numbers like 37 or -9.25

// Number constructor contains constant and methods for working with numbers

// values of other types can be converted to numbers using the Number() function

255; // two-hundred and fifty-five
255.0; // same number
255 === 255.0; // true
255 === 0xff; // true (hexadecimal notation)
255 === 0b11111111; // true (binary notation)
255 === 0.255e3; // true (decimal exponential notation)

console.log(performance.now());
const runLoopThousandTimes = () => {
  let count = 0;
  for (let i = 0; i < 10000; i++) {
    count++;
  }
  return count;
};
console.log(performance.now());

runLoopThousandTimes();
