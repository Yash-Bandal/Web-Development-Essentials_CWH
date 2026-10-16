# JavaScript Functions — Complete Notes

## Index

1. [Introduction to Functions](#1-introduction-to-functions)
2. [Function Syntax, Parameters and Arguments](#2-function-syntax-parameters-and-arguments)
3. [Return vs console.log](#3-return-vs-consolelog)
4. [Function Declaration](#4-function-declaration)
5. [Function Expression](#5-function-expression)
6. [Arrow Functions](#6-arrow-functions)
7. [Anonymous Functions](#7-anonymous-functions)
8. [Immediately Invoked Function Expression (IIFE)](#8-immediately-invoked-function-expression-iife)
9. [Callback Functions](#9-callback-functions)
10. [Default Parameters](#10-default-parameters)
11. [Rest Parameters](#11-rest-parameters)
12. [Function as a Return Value](#12-function-as-a-return-value)
13. [Higher-Order Functions](#13-higher-order-functions)
14. [Recursive Functions](#14-recursive-functions)
15. [Closures](#15-closures)
16. [Promises](#16-promises)
17. [Async and Await](#17-async-and-await)
18. [Generator Functions](#18-generator-functions)
19. [Quick Comparison](#19-quick-comparison)
20. [Practice Exercises](#20-practice-exercises)

<br>

---

<br>


## 1. Introduction to Functions

A **function** is a reusable block of code designed to perform a particular task.

Instead of writing the same code repeatedly, we write it once inside a function and call it whenever required.

### Example

```javascript
function greet() {
    console.log("Hello!");
}

greet();
greet();
```

**Output:**

```text
Hello!
Hello!
```

Here:

- `function` is the keyword used to declare the function.
- `greet` is the function's name.
- `{}` contains the function body.
- `greet()` calls and executes the function.

**Important:** Defining a function does not normally execute its body. Calling it does.

<br>

---

<br>

## 2. Function Syntax, Parameters and Arguments

### General syntax

```javascript
function functionName(parameter1, parameter2) {
    // Code to execute
    return result;
}
```

### Example

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(5, 3));
```

**Output:**

```text
8
```

### Parameters vs arguments

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

greet("John");
```

- **Parameter:** `name` — the variable specified in the function definition.
- **Argument:** `"John"` — the actual value passed during the function call.

When `greet("John")` executes, `name` receives `"John"`.

### Multiple parameters

```javascript
function introduce(name, age) {
    return `${name} is ${age} years old.`;
}

console.log(introduce("Yash", 22));
```

**Output:**

```text
Yash is 22 years old.
```

<br>

---

<br>

## 3. Return vs console.log()

These two are different and should not be confused.

### `return`

Returns a value to the code that called the function.

```javascript
function add(a, b) {
    return a + b;
}

const result = add(5, 3);

console.log(result * 2);
```

**Output:**

```text
16
```

The function returns `8`, which is stored in `result`. Then `8 * 2` produces `16`.

### `console.log()`

Displays a value in the console but does not return that value from the function.

```javascript
function add(a, b) {
    console.log(a + b);
}

const result = add(5, 3);

console.log(result);
```

**Output:**

```text
8
undefined
```

The function prints `8`, but it has no explicit return statement. Therefore, the function call evaluates to `undefined`.

**Rule:** Use `return` when the calling code needs the result. Use `console.log()` to inspect or display values.

<br>

---

<br>


## 4. Function Declaration

A function declaration defines a named function using the `function` keyword.

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("John"));
console.log(greet("Alice"));
```

**Output:**

```text
Hello, John!
Hello, Alice!
```

### Important: Hoisting

Function declarations can be called before their declaration appears in the code.

```javascript
console.log(greet("John"));

function greet(name) {
    return `Hello, ${name}!`;
}
```

**Output:**

```text
Hello, John!
```

JavaScript makes function declarations available throughout their enclosing scope.

### HTML example

```html
<!DOCTYPE html>
<html lang="en">
<body>
    <h1>Function Declaration</h1>
    <p id="demo"></p>

    <script>
        function greet(name) {
            return `Hello, ${name}!`;
        }

        document.getElementById("demo").textContent =
            greet("John");
    </script>
</body>
</html>
```

**Output on the webpage:**

```text
Function Declaration

Hello, John!
```

`document.getElementById("demo")` selects the paragraph whose ID is `demo`. Setting its `textContent` displays the returned message inside it.

**When to use:** Named, reusable operations such as `calculateTotal()`, `getMovieDetails()` and `validateForm()`.

<br>

---

<br>

## 5. Function Expression

A function expression creates a function and assigns it to a variable.

```javascript
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3));
```

**Output:**

```text
8
```

### Difference from a declaration

```javascript
// Function declaration
function add(a, b) {
    return a + b;
}

// Function expression
const addNumbers = function(a, b) {
    return a + b;
};
```

In the second example, the function is assigned to `addNumbers`.

The function expression above is anonymous because it has no name of its own.

### Important difference

A function expression assigned to a `const` variable cannot be called before that variable is initialized.

```javascript
// This would throw a ReferenceError:
// console.log(addNumbers(2, 3));

const addNumbers = function(a, b) {
    return a + b;
};
```

**When to use:** When storing functions in variables or passing them as arguments to other functions.

<br>

---

<br>


## 6. Arrow Functions

Arrow functions provide a shorter syntax for writing function expressions.

### Normal function expression

```javascript
const multiply = function(a, b) {
    return a * b;
};
```

### Equivalent arrow function

```javascript
const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(4, 7));
```

**Output:**

```text
28
```

### Shorter syntax

When the body contains only one expression, you can omit the braces and the `return` keyword.

```javascript
const multiply = (a, b) => a * b;

console.log(multiply(4, 7));
```

**Output:**

```text
28
```

### More examples

```javascript
// One parameter: parentheses are optional
const square = n => n * n;

// No parameters: use empty parentheses
const greet = () => "Hello!";

// Multiple parameters
const add = (a, b) => a + b;

console.log(square(5));
console.log(greet());
console.log(add(3, 4));
```

**Output:**

```text
25
Hello!
7
```

### Common mistake

```javascript
const add = (a, b) => {
    a + b;
};
```

This returns `undefined` because braces create a function body, and no `return` statement is present.

Correct:

```javascript
const add = (a, b) => a + b;
```

Or:

```javascript
const add = (a, b) => {
    return a + b;
};
```

**Important:** Arrow functions do not have their own `this` binding. Regular functions and arrow functions therefore behave differently in some object methods and event handlers.

**When to use:** Short calculations, callbacks, array methods and modern frontend code.

<br>

---

<br>


## 7. Anonymous Functions

An anonymous function is a function without its own name.

```javascript
setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);
```

**Output after approximately 2 seconds:**

```text
This runs after 2 seconds
```

### Understanding the example

- `setTimeout()` is a built-in JavaScript function.
- `function() { ... }` is an anonymous function passed as an argument.
- `2000` represents 2,000 milliseconds, or 2 seconds.

You can also write:

```javascript
setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);
```

Anonymous functions are commonly used as callbacks, but not every anonymous function is a callback.

**When to use:** When a function is needed for a specific operation and does not require a separate name.

<br>

---

<br>


## 8. Immediately Invoked Function Expression (IIFE)

An IIFE is a function expression that is executed immediately after it is created.

```javascript
(function() {
    console.log("IIFE executed");
})();
```

**Output:**

```text
IIFE executed
```

### How does it work?

```javascript
(function() {
    console.log("IIFE executed");
})();
```

1. `function() { ... }` creates the function.
2. The outer parentheses make it a function expression.
3. The final `()` calls the function immediately.

### Using an IIFE to create local scope

```javascript
(function() {
    const secret = "Private value";
    console.log(secret);
})();

// console.log(secret); // ReferenceError
```

**Output:**

```text
Private value
```

The variable `secret` is local to the function and cannot be accessed outside it.

IIFEs were historically useful for avoiding global variables. Modern JavaScript also provides modules and block scope, so IIFEs are less necessary in many new projects.

<br>

---

<br>


## 9. Callback Functions

A callback is a function passed to another function so that the receiving function can invoke it.

```javascript
function processUserInput(name, callback) {
    callback(`Welcome, ${name}`);
}

processUserInput("Alice", message => {
    console.log(message);
});
```

**Output:**

```text
Welcome, Alice
```

### How does it work?

1. `processUserInput("Alice", ...)` calls the main function.
2. The callback function is passed as an argument.
3. `callback(...)` invokes the supplied function.
4. The message is received by the callback parameter `message`.
5. `console.log(message)` displays the message.

### Callback example with a button

```html
<!DOCTYPE html>
<html lang="en">
<body>
    <button id="greetBtn">Greet me</button>
    <p id="demo"></p>

    <script>
        function greetUser(callback) {
            callback("Welcome to our movie website!");
        }

        document.getElementById("greetBtn").addEventListener(
            "click",
            function() {
                greetUser(function(message) {
                    document.getElementById("demo").textContent =
                        message;
                });
            }
        );
    </script>
</body>
</html>
```

**Initial webpage:** A button labelled `Greet me` and an empty paragraph.

**After clicking the button:**

```text
Welcome to our movie website!
```

Here, the function passed to `addEventListener()` is a callback that the browser invokes when the button is clicked.

**When to use:** Event handlers, timers, array methods and asynchronous operations.

<br>

---

<br>


## 10. Default Parameters

Default parameters provide fallback values when an argument is omitted or explicitly passed as `undefined`.

```javascript
function subtract(a, b = 0) {
    return a - b;
}

console.log(subtract(10, 3));
console.log(subtract(10));
console.log(subtract(10, undefined));
```

**Output:**

```text
7
10
10
```

When `subtract(10)` is called, `b` receives its default value of `0`.

Therefore:

```javascript
10 - 0; // 10
```

### Important distinction

Passing `null` does not trigger the default parameter.

```javascript
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet());
console.log(greet(undefined));
console.log(greet(null));
```

**Output:**

```text
Hello, Guest!
Hello, Guest!
Hello, null!
```

**When to use:** Optional discounts, default quantities, pagination limits and other optional inputs.

<br>

---

<br>


## 11. Rest Parameters

Rest parameters allow a function to accept any number of arguments and collect them into an array.

```javascript
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(1, 2, 3, 4));
console.log(sumAll(10, 20));
console.log(sumAll());
```

**Output:**

```text
10
30
0
```

### Understanding `...numbers`

When calling:

```javascript
sumAll(1, 2, 3, 4);
```

The arguments are collected into:

```javascript
numbers = [1, 2, 3, 4];
```

Then `reduce()` adds the numbers together.

The initial value `0` ensures that an empty array produces a total of `0`.

### Rest vs spread

Both use `...`, but their purposes differ.

```javascript
// Rest: collects arguments
function showAll(...items) {
    console.log(items);
}

showAll(1, 2, 3);
// [1, 2, 3]

// Spread: expands an array into individual arguments
const numbers = [1, 2, 3];

console.log(Math.max(...numbers));
// 3
```

**Remember:**

- Rest collects values into an array.
- Spread expands an iterable into individual values.

**When to use:** Functions that need a variable number of inputs.

<br>

---

<br>


## 12. Function as a Return Value

A function can return another function.

```javascript
function createMultiplier(multiplier) {
    return function(num) {
        return num * multiplier;
    };
}

const double = createMultiplier(2);

console.log(double(5));
console.log(double(8));
```

**Output:**

```text
10
16
```

### Understanding the flow

First:

```javascript
const double = createMultiplier(2);
```

`createMultiplier(2)` returns a function. That returned function is stored in `double`.

Conceptually, `double` behaves like:

```javascript
function(num) {
    return num * 2;
}
```

Therefore:

```javascript
double(5); // 10
double(8); // 16
```

You can create other functions using the same factory.

```javascript
const triple = createMultiplier(3);

console.log(triple(5));
```

**Output:**

```text
15
```

**When to use:** Function factories, configurable operations and reusable validators.

<br>

---

<br>


## 13. Higher-Order Functions

A higher-order function is a function that accepts another function as an argument, returns a function, or does both.

### Example using `map()`

```javascript
const numbers = [1, 2, 3, 4];

const squaredNumbers = numbers.map(num => num ** 2);

console.log(squaredNumbers);
```

**Output:**

```text
[1, 4, 9, 16]
```

### Understanding the code

- `map()` visits each element in the array.
- `num => num ** 2` is the callback function.
- `num ** 2` calculates the square of each number.
- `map()` returns a new array containing the transformed values.

### Other useful array methods

```javascript
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.map(n => n * 2));
// [2, 4, 6, 8, 10]

console.log(numbers.filter(n => n > 3));
// [4, 5]

console.log(numbers.find(n => n > 3));
// 4
```

| Method | Purpose |
|---|---|
| `map()` | Transforms each item and returns a new array. |
| `filter()` | Returns a new array containing matching items. |
| `find()` | Returns the first matching item, or `undefined`. |

### Practical movie example

```javascript
const movies = [
    { name: "Movie A", rating: 8.5 },
    { name: "Movie B", rating: 6.2 },
    { name: "Movie C", rating: 9.1 }
];

const recommendedMovies = movies.filter(
    movie => movie.rating >= 8
);

console.log(recommendedMovies);
```

**Output:**

```javascript
[
    { name: "Movie A", rating: 8.5 },
    { name: "Movie C", rating: 9.1 }
]
```

**When to use:** Processing arrays of movies, users, products, orders and other application data.

<br>

---

<br>


## 14. Recursive Functions

A recursive function calls itself to solve a smaller version of the same problem.

### Example: Factorial

Factorial of 5:

```text
5! = 5 × 4 × 3 × 2 × 1 = 120
```

JavaScript:

```javascript
function factorial(n) {
    if (n <= 1) return 1;

    return n * factorial(n - 1);
}

console.log(factorial(5));
```

**Output:**

```text
120
```

### How recursion works

```text
factorial(5)
    = 5 * factorial(4)
    = 5 * 4 * factorial(3)
    = 5 * 4 * 3 * factorial(2)
    = 5 * 4 * 3 * 2 * factorial(1)
    = 5 * 4 * 3 * 2 * 1
    = 120
```

Two important parts:

1. **Base case:** `if (n <= 1) return 1;` stops the recursion.
2. **Recursive case:** `n * factorial(n - 1)` calls the function again with a smaller input.

Without a suitable base case, recursion may continue until JavaScript throws a stack overflow error.

**When to use:** Tree traversal, nested structures and problems naturally broken into smaller versions of themselves.

<br>

---

<br>


## 15. Closures

A closure occurs when a function retains access to variables from the scope in which it was created, even after the outer function has finished executing.

### Example: Counter

```javascript
function makeCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
```

**Output:**

```text
1
2
3
```

### Why doesn't `count` reset?

When `makeCounter()` runs:

1. It creates `count = 0`.
2. It returns the inner function.
3. The returned function retains access to `count`.
4. Every call to `counter()` increments the same variable.

The outer function has finished executing, but `count` remains accessible through the returned function.

### Independent counters

```javascript
const counterA = makeCounter();
const counterB = makeCounter();

console.log(counterA());
console.log(counterA());
console.log(counterB());
```

**Output:**

```text
1
2
1
```

Each invocation of `makeCounter()` creates a separate `count` variable.

**When to use:** Private state, counters, function factories and event-handler patterns.

<br>

---

<br>


## 16. Promises

A Promise represents the eventual result of an operation that may complete in the future.

A Promise has three states:

- `pending` — still in progress.
- `fulfilled` — completed successfully.
- `rejected` — failed.

### Example

```javascript
const promiseExample = new Promise((resolve, reject) => {
    const isSuccess = true;

    if (isSuccess) {
        resolve("Promise resolved!");
    } else {
        reject("Promise rejected.");
    }
});

promiseExample
    .then(result => console.log(result))
    .catch(error => console.error(error));
```

**Output:**

```text
Promise resolved!
```

### Understanding the keywords

| Term | Meaning |
|---|---|
| `new Promise()` | Creates a Promise. |
| `resolve(value)` | Fulfils the Promise with a value. |
| `reject(error)` | Rejects the Promise with a reason. |
| `.then()` | Registers a handler for successful completion. |
| `.catch()` | Registers a handler for rejection. |

### Flow

```text
Promise created
       |
       ├── Success → resolve(value) → .then()
       |
       └── Failure → reject(error) → .catch()
```

The executor function passed to `new Promise()` runs immediately. The Promise represents the eventual outcome; creating a Promise does not automatically make synchronous work asynchronous.

**When to use:** Network requests, timers and operations whose results may become available later.

<br>

---

<br>


## 17. Async and Await

`async` and `await` provide a cleaner way to work with Promises.

### Example

```javascript
async function fetchData() {
    const fakeData = new Promise(resolve => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });

    const result = await fakeData;

    console.log(result);
}

fetchData();
```

**Output after approximately one second:**

```text
Data received
```

### Understanding `await`

```javascript
const result = await fakeData;
```

`await` waits for the Promise to settle before continuing the current async function.

It does not block the entire JavaScript thread while waiting.

### Important rules

**Rule 1:** An `async` function always returns a Promise.

```javascript
async function getNumber() {
    return 10;
}

getNumber().then(value => console.log(value));
```

**Output:**

```text
10
```

**Rule 2:** In ordinary scripts, use `await` inside an `async` function.

**Rule 3:** Use `try...catch` to handle errors when appropriate.

```javascript
async function loadData() {
    try {
        const response = await fetch("/movies.json");

        if (!response.ok) {
            throw new Error("Failed to load movies");
        }

        const movies = await response.json();

        console.log(movies);
    } catch (error) {
        console.error(error.message);
    }
}
```

This example requires a server that serves `movies.json` at the specified path.

**When to use:** Fetching movie data from an API, loading user information and submitting forms to a backend.

<br>

---

<br>


## 18. Generator Functions

A generator is a special function that can pause execution and resume later.

It uses `function*` and the `yield` keyword.

### Example

```javascript
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().done);
```

**Output:**

```text
1
2
3
true
```

### How it works

Unlike a regular function, calling a generator function does not immediately execute its body. It returns a generator object.

Each call to `gen.next()` resumes execution until the next `yield` or until the function finishes.

| Call | Result |
|---|---|
| `gen.next()` | `{ value: 1, done: false }` |
| `gen.next()` | `{ value: 2, done: false }` |
| `gen.next()` | `{ value: 3, done: false }` |
| `gen.next()` | `{ value: undefined, done: true }` |

The `value` property contains the yielded value. The `done` property indicates whether the generator has finished.

**When to use:** Custom iterators, lazy sequences and specialised data-processing patterns.

<br>

---

<br>


## 19. Quick Comparison

| Concept | Main purpose |
|---|---|
| Function declaration | Define a named reusable function. |
| Function expression | Assign a function to a variable. |
| Arrow function | Write concise function expressions. |
| Anonymous function | Create a function without its own name. |
| IIFE | Create and execute a function immediately. |
| Callback | Pass a function to another function for invocation. |
| Default parameters | Provide fallback values for omitted or `undefined` arguments. |
| Rest parameters | Collect multiple arguments into an array. |
| Function as a return value | Return a function from another function. |
| Higher-order function | Accept or return functions. |
| Recursion | Solve a problem by calling the function on smaller inputs. |
| Closure | Retain access to variables from an enclosing scope. |
| Promise | Represent an eventual result or failure. |
| Async/await | Work with Promises using sequential-looking syntax. |
| Generator | Pause and resume execution using `yield`. |

**Note:** These are not 15 completely separate function types. Several concepts overlap. For example, an arrow function can be a callback, and a function returned by another function can form a closure.

<br>

---

<br>


## 20. Practice Exercises

Try these exercises in your VS Code JavaScript playground.

### Exercise 1: Basic function

Write a function `square(number)` that returns the square of a number.

```javascript
console.log(square(5)); // 25
console.log(square(8)); // 64
```

### Exercise 2: Default parameters

Write `calculatePrice(price, discount = 0)` that returns the price after subtracting the discount.

```javascript
console.log(calculatePrice(500, 100)); // 400
console.log(calculatePrice(500));      // 500
```

### Exercise 3: Arrow function

Convert this function declaration into an arrow function.

```javascript
function isAdult(age) {
    return age >= 18;
}
```

Expected:

```javascript
console.log(isAdult(20)); // true
console.log(isAdult(15)); // false
```

### Exercise 4: Callback

Create `calculate(a, b, callback)` that passes both numbers to a callback.

```javascript
calculate(5, 3, (a, b) => console.log(a + b));
// 8

calculate(5, 3, (a, b) => console.log(a * b));
// 15
```

Hint: Call `callback(a, b)` inside `calculate()`.

### Exercise 5: Higher-order function

Given an array of movie ratings, use `filter()` to keep only ratings of 8 or higher.

```javascript
const ratings = [6.5, 8.7, 7.2, 9.1, 5.8];

// Expected: [8.7, 9.1]
```

### Exercise 6: Closure

Implement `makeCounter()` so that each call to the returned function increments a private counter.

```javascript
const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```



<br>

```html
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Functions</h1>

<p id="demo"></p>

<script>
  //syntax
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}


// 1. Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}
document.getElementById("demo").innerHTML = greet("John");

// ===================================

// 2. Function Expression
const add = function(a, b) {
  return a + b;
};
console.log(add(5, 3));

// ===================================

// 3. Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(4, 7));

// ===================================

// 4. Anonymous Functions
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

// ===================================

// 5. Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("IIFE executed");
})();

// ===================================

// 6. Callback Functions
function processUserInput(name, callback) {
  callback(`Welcome, ${name}`);
}
processUserInput("Alice", (message) => console.log(message));

// ===================================

// 7. Default Parameters
function subtract(a, b = 0) {
  return a - b;
}
console.log(subtract(10)); // 10 - 0 = 10

// ===================================

// 8. Rest Parameters
function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumAll(1, 2, 3, 4)); // Output: 10

// ===================================

// 9. Function as a Return Value
function createMultiplier(multiplier) {
  return function(num) {
    return num * multiplier;
  };
}
const double = createMultiplier(2);
console.log(double(5)); // Output: 10

// ===================================

// 10. Higher-Order Functions
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers); // [1, 4, 9, 16]

// ===================================

// 11. Recursive Functions
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// ===================================

// 12. Closures
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

// ===================================

// 13. Promises
const promiseExample = new Promise((resolve, reject) => {
  let isSuccess = true;
  if (isSuccess) {
    resolve("Promise resolved!");
  } else {
    reject("Promise rejected.");
  }
});

promiseExample
  .then(result => console.log(result))
  .catch(error => console.error(error));

// ===================================

// 14. Async/Await
async function fetchData() {
  const fakeData = new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 1000);
  });
  const result = await fakeData;
  console.log(result);
}
fetchData();

// ===================================

// 15. Generator Functions
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numberGenerator();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2

</script>

</body>
</html>
```
