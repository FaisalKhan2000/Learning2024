// Write a function checkEvenOrOdd that accepts a number as an argument and logs "Even" if the number is even, and "Odd" if the number is odd

const checkEvenOrOdd = (num = 0) => {
  if (num < 0) return -1;

  if (num % 2 === 0) return "even";

  return "odd";
};

console.log(checkEvenOrOdd(10));
console.log(checkEvenOrOdd(11));
console.log(checkEvenOrOdd(13));
console.log(checkEvenOrOdd(14));
console.log(checkEvenOrOdd(-1));

// Write a function findMax that takes an array of numbers as input and returns the largest number in the array without using built-in methods like Math.max().
[1, 2, 3, 4, 5];
const findMax = (arr = []) => {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
    }
  }

  return max;
};

console.log(findMax([1, 2, 3, 4, 5]));
console.log(findMax([5, 2, 3]));
console.log(findMax([1, 2, 3, 4, 5]));
console.log(findMax([1, 2, 3, 100, 4, 5]));
console.log(findMax([1]));

// Task 3: Objects and Functions (Advanced)

// Create a function createPerson that accepts a name and age as parameters and returns an object with the following properties:

//     name: the name passed to the function
//     age: the age passed to the function
//     greet: a method that returns "Hello, my name is [name] and I am [age] years old."

// Once you've completed the tasks, paste your code here, and I’ll review it!

const createPerson = ({ name = "", age = "" }) => {
  return {
    name,
    age,
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
  };
};

const person = createPerson({ name: "faisal", age: "24" });
console.log(person.greet());

// Task: Fetch User Data

// You are provided with an array of user IDs. Write an asynchronous function fetchUsers that takes the array of IDs and fetches user data from a mock API (getUserData(id)), which returns a Promise that resolves to an object containing id and name after a delay. The function should do the following:

//     Fetch the data for each user in the array using async/await.
//     If fetching any user data fails, catch the error and continue fetching data for the other users.
//     Return an array of results (successful user objects and any error messages).

const getUserData = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.8) {
        // 20% chance of failure
        reject(`Failed to fetch data for user ${id}`);
      } else {
        resolve({ id, name: `User${id}` });
      }
    }, 1000);
  });
};

// const fetchUsers = (arr = []) => {
//   let result = [];
//   arr.forEach(async (user) => {
//     try {
//       const res = await getUserData(user);
//       result.push(res);
//     } catch (error) {
//       console.log(error);
//       result.push(error);
//     }
//   });
// };

const fetchUsers = async (arr = []) => {
  const result = await Promise.all(
    arr.map(async (user) => {
      try {
        const res = await getUserData(user);
        return res; // return the result if successful
      } catch (error) {
        return error; // return the error message if failed
      }
    })
  );
  return result; // return the array of results
};
fetchUsers([1, 2, 3, 4, 5]).then((result) => console.log(result));

[
  { id: 1, name: "User1" },
  "Failed to fetch data for user 2",
  { id: 3, name: "User3" },
  { id: 4, name: "User4" },
  "Failed to fetch data for user 5",
];

// Question:
// What will be the output of the following code? Explain your reasoning.
function scopeTest() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x); // ?
  }
  console.log(x); // ?
}
scopeTest();

//  let is blocked scoped. it respects the scoping of blocks such as if, try catch, etc
// hence, we get a different value inside and outside of the block

// Question:
// Consider the following code. Explain what happens and why.
// console.log(a); // ?
// let a = 5;

// function hoistTest() {
//   console.log(b); // ?
//   var b = 10;
// }

// hoistTest();

// hoisting is the default behavior of javascript of moving the declarations to the top of the scope, this declarations can be function declaration as well as variable declaration
// in var, declaration is hoisting to the top of the scope and it is initialized to undefined hence if we access the var b before the initialization we will get undefined
// in let, declaration is hoisting to the top of the scope and but it is not initialized. they variable is in a place called TDZ (temporal dead zone). TDZ is exist from the declaration till the initialization. if we access the variable in the TDZ we will get a reference error

// Question:
// Given an array of numbers, return a new array that only contains the numbers greater than 10. Use array methods like `.filter()`.

const numbers = [5, 12, 8, 130, 44];

function filterGreaterThanTen(arr) {
  // Implement here
  return arr.filter((item) => item > 10);
}

console.log(filterGreaterThanTen(numbers));

// Question:
// Write a function `deepCopy` to create a deep copy of an object. Avoid shallow copying.
const original = {
  name: "John",
  address: {
    city: "New York",
    zip: 10001,
  },
};

function deepCopy(obj) {
  // Implement here
  return structuredClone(obj);
}

const copied = deepCopy(original);
copied.address.city = "San Francisco";
console.log(original.address.city); // New York
console.log(copied.address.city); // San Francisco
// [12, 130, 44]

// Question:
// Simulate an API call that resolves after 3 seconds with the message "API Call Successful". Write this using both `Promises` and `async/await`.

// Using Promises
function apiCallPromise() {
  // Random number
  const randomNumber = Math.floor(Math.random() * 100);

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // Resolve if number is greater than or equal to 80
      if (randomNumber >= 80) {
        resolve("API Call Successful");
      } else {
        reject("API Call Rejected");
      }
    }, 3000);
  });

  return myPromise;
}

apiCallPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

async function apiCallAsync() {
  try {
    const res = await apiCallPromise();
    console.log("Success:", res);
    return res;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// Call the function multiple times to see both success and error cases
for (let i = 0; i < 5; i++) {
  apiCallAsync()
    .then((result) => console.log("Final result:", result))
    .catch((error) => console.log("Caught error:", error));
}
function fetchUserData({ user }) {
  const randomNumber = Math.floor(Math.random() * 100);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber <= 80) {
        resolve({ id: user.id, posts: user.posts });
      } else {
        reject("Failed to fetch user data");
      }
    }, 3000);
  });
}

async function fetchUserPosts(user) {
  try {
    const userData = await fetchUserData({ user });
    return userData.posts;
  } catch (error) {
    throw error;
  }
}

// Example user object
const user = {
  id: 1,
  posts: ["Post 1", "Post 2", "Post 3"],
};

// Fetch user data and posts
fetchUserData({ user })
  .then((userData) => {
    console.log("User data:", userData);
    return fetchUserPosts(user);
  })
  .then((posts) => {
    console.log("User's posts:", posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Question:
// Write a function `fetchUserProfile` that fetches a user profile from an API using `async/await`.
// Add error handling to log a meaningful error message if the API call fails.

async function fetchUserProfile(userId) {
  // Implement here
  try {
    const res = await fetch(`/api/v1/${userId}`);

    if (!res.ok) {
      throw new Error("something went wrong");
    }

    const data = res.json();
    return data;
  } catch (error) {
    throw new Error("Error occurred", error);
  }
}

fetchUserProfile(123).catch(console.error);

// Question:
// Write a higher-order function `applyDiscount` that takes a discount percentage and returns a function.
// The returned function should take a price and apply the discount to it.

function applyDiscount(discount) {
  // Calculate the discount factor
  const discountFactor = (100 - discount) / 100;
  return function (price) {
    return discountFactor * price;
  };
}

const discount10 = applyDiscount(10);
console.log(discount10(100)); // Should output 90

const discount20 = applyDiscount(20);
console.log(discount20(200)); // Should output 160

// Question:
// Consider the following code. What is the output? Why?

const user1 = {
  name: "Alice",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

const greet = user1.greet;
greet(); // What is the output?
// in current context this keyword referrs to the properties of the current object
// here we are referncing the function itself not the object

const boundGreet = user1.greet.bind(user);
boundGreet(); // What is the output?
// Hello, Alice
// here we are referncing the function as well as object

// Question:
// Write a function `mergeArrays` that takes two arrays and merges them using the spread operator.

function mergeArrays(arr1, arr2) {
  // Implement here
  return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

// Question:
// Given the following object, use destructuring to extract the `name` and `age` properties.

const person1 = {
  name: "John",
  age: 30,
  job: "Developer",
};

function getPersonInfo(person) {
  // Destructure the `name` and `age` here
  return `${person.name} is ${person.age} years old`;
}

console.log(getPersonInfo(person1)); // "John is 30 years old"

// Question:
// Implement a `Person` constructor that has a method `greet`. Create a `Developer` constructor that inherits from `Person` and adds a method `code`.
// Use ES5 prototype inheritance for this exercise.

// i don't know about function constructors i am doing it by class

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Developer extends Person {
  constructor(name, language) {
    super(name);
    this.language = language;
  }

  code() {
    console.log(`${this.name} is coding in ${this.language}`);
  }
}

const dev = new Developer("Bob", "JavaScript");
dev.greet(); // "Hello, my name is Bob"
dev.code(); // "Bob is coding in JavaScript"

// Question:
// Suppose you have two files. In one file (module.js), you define a utility function.
// In another file (main.js), you import and use that utility function.
// Demonstrate how you would structure these files using ES6 module syntax.

// module.js
// Implement the utility function `sum`
export function sum(a, b) {
  return a + b;
}

// main.js
// Import and use the `sum` function from module.js
import { sum } from "./module.js";

console.log(sum(5, 10)); // 15

// Question:
// Write a class `Animal` with a `speak` method. Create a subclass `Dog` that overrides the `speak` method.
// Use ES6 class syntax.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // "Buddy barks."
