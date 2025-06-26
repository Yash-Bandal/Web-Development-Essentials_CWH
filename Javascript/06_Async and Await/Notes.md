# JavaScript: Async & Await 

<br>

### Index
1. [Basics](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/Javascript/06_Async%20and%20Await/Notes.md#part-1--basics)
2. [The async Keyword](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/Javascript/06_Async%20and%20Await/Notes.md#part-2-the-async-keyword)
3. [The await Keyword](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/Javascript/06_Async%20and%20Await/Notes.md#part-3-the-await-keyword)
4. [Error Handling](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/Javascript/06_Async%20and%20Await/Notes.md#part-4-error-handling)
5. [Sequential vs Parallel Execution](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/Javascript/06_Async%20and%20Await/Notes.md#part-5-sequential-vs-parallel-execution)
6. [Async Operations in Loops](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/Javascript/06_Async%20and%20Await/Notes.md#part-6-async-operations-in-loops)
7. [Real-world Use Cases](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/Javascript/06_Async%20and%20Await/Notes.md#part-7-real-world-use-cases)
8. [Advanced Patterns](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/Javascript/06_Async%20and%20Await/Notes.md#part-8-advanced-patterns)
9. [Common Mistakes and Gotchas](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/Javascript/06_Async%20and%20Await/Notes.md#part-9-common-mistakes-and-gotchas)
10. [Testing Async Code](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/Javascript/06_Async%20and%20Await/Notes.md#part-10-testing-async-code)

<br>


# Part 1 : Basics

## What is Asynchronous Programming?
  * JavaScript is single-threaded, meaning it runs one task at a time.
  * Asynchronous programming allows long-running tasks (like API calls, timers, or file reads) to run **without blocking** the main thread.

##  Why Do We Need Async/Await?
  * Traditional async methods like callbacks and `.then()` can lead to **callback hell** or **complex promise chains**.
  * `async`/`await` provides a **cleaner and more readable** syntax for handling asynchronous code.

## Comparison

| Feature        | Callbacks                         | Promises                | Async/Await                         |
| -------------- | --------------------------------- | ----------------------- | ----------------------------------- |
| Readability    | Low                               | Medium                  | High                                |
| Error Handling | Nested `try/catch` or error-first | `.catch()`              | `try/catch` block                   |
| Syntax Style   | Function-based                    | Chain-based (`.then()`) | Synchronous-looking async functions |

<br>

##  How Async Code Works in JS

* **Web APIs** (like `fetch`) hand off work to the browser.
* **Event loop** manages when callbacks or promises resolve.
* JS uses the **microtask queue** for promises, which gets priority over the callback queue.

<br>

---

<br>


# Part 2: The `async` Keyword

## Introduction

The `async` keyword is used to declare an asynchronous function. These functions always return a Promise, even if you return a plain value.

<br>

## Syntax

```js
async function functionName() {
  // Your code
}
```

You can also use it with arrow functions:

```js
const greet = async () => {
  return "Hello";
};
```

<br>

## What Does `async` Do?

* Wraps the return value in a Promise.
* Allows use of `await` inside the function.

Example:

```js
async function greet() {
  return "Hello";
}

// Equivalent to:
function greet() {
  return Promise.resolve("Hello");
}
```

Usage:

```js
greet().then(msg => console.log(msg));
// Output: Hello
```

<br>

## Important Notes

* If the function throws an error, it returns a rejected Promise.

```js
async function errorFunc() {
  throw new Error("Oops!");
}

errorFunc().catch(err => console.error(err.message));
// Output: Oops!
```

* Async functions make it easier to structure asynchronous flow.


<br>

---

<br>


# Part 3: The `await` Keyword

## Introduction

The `await` keyword is used inside an `async` function to pause execution until a Promise is resolved or rejected.

<br>

## Syntax

```js
let result = await promise;
```

* `await` only works inside an `async` function.
* It pauses execution until the promise settles.

<br>

## Example: Awaiting a Fetch Request

```js
async function fetchData() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  let data = await response.json();
  console.log(data);
}

fetchData();
```

<br>

## Awaiting Non-Promise Values

You can technically `await` any value.

```js
async function example() {
  let x = await 10;
  console.log(x); // Output: 10
}
example();
```

The value is converted to a resolved Promise.

<br>

## Blocking vs Non-blocking

Even though `await` appears to block, it only pauses **that async function**, not the entire script. Other code outside the function continues running.

```js
async function pause() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("After 2 seconds");
}

pause();
console.log("This logs first");
```

<br>

## Common Pitfalls

* Using `await` outside an `async` function (will cause a syntax error).
* Forgetting to handle errors with `try...catch`.
* Sequential `await` where parallel execution is possible.


<br>

---

<br>


## Execution Workflow
```js
console.log("1");

async function getData() {
  console.log("2");
  await fetchData(); // Assume fetchData returns a Promise
  console.log("3");
}

function fetchData() {
  return new Promise((resolve) => {
    console.log("4");
    setTimeout(() => {
      console.log("5");
      resolve();
    }, 1000);
  });
}

getData();
console.log("6");

```
### Step-by-Step Execution

Here's a breakdown of the execution flow:

<br>

1. **Step 1: Call Stack Runs Synchronously**

* `console.log("1")`
    * Output: `1`
* `getData()` is called
    * `getData()` enters the Call Stack.


<br>

2. **Step 2: Inside `getData()`**

* `console.log("2")`
    * Output: `2`
* `await fetchData()`
    * This *pauses* execution inside `getData()` until the Promise returned by `fetchData()` resolves.
    * **BUT here's the trick:**
        * `fetchData()` runs immediately.
        * `console.log("4")`
            * Output: `4`
        * `setTimeout(..., 1000)` sets a timer.
            * The callback function for `setTimeout` is pushed to the Web APIs area.
        * Now, `getData()` is paused at the `await`, and JavaScript *exits* the async function temporarily, allowing other synchronous code to run.


<br>

3. **Step 3: Continue Synchronous Execution**

* `console.log("6")`
    * Output: `6`


<br>

4. **Step 4: Timer Expires (After 1 second)**

* The callback from `setTimeout` moves from the Web APIs area to the Callback Queue.
* The Event Loop picks it up and runs it:
    * `console.log("5")`
        * Output: `5`
    * `resolve()` is called.
        * This signals that the Promise from `fetchData()` is now resolved.


<br>

5. **Step 5: Resume `getData()` (from Await Point)**

* The `await` is now resolved.
* Execution resumes in `getData()` immediately after the `await` statement.
* `console.log("3")`
    * Output: `3`

```
1
2
4
6
5
3

```

#### Call Stack
```
Call Stack:
 ┌────────────────────────────────────┐
 │ console.log("1")                   │ → 1
 │ getData()                          │
 │   console.log("2")                 │ → 2
 │   await fetchData()                │
 │     console.log("4")               │ → 4
 │     setTimeout(...)                │
 │ console.log("6")                   │ → 6
 │ // Waits...                        │
 │ Timer done → console.log("5")      │ → 5
 │ Resume async → console.log("3")    │ → 3
 └────────────────────────────────────┘

```

<br>

---

<br>


#  Part 4: Error Handling

## Introduction

Handling errors in asynchronous code is crucial to prevent crashes and debug issues effectively. With `async`/`await`, error handling becomes cleaner using `try...catch` blocks.

<br>

## Basic Syntax

```js
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

* `try` contains the code that may throw an error.
* `catch` handles any error that occurs in the `try` block.

<br>

## Handling Fetch Failures

Common failures include:

* Network errors
* Invalid JSON responses
* Non-200 status codes

```js
async function getUser() {
  try {
    let res = await fetch('https://wrongurl.com');
    if (!res.ok) throw new Error("Request failed: " + res.status);
    let user = await res.json();
    console.log(user);
  } catch (err) {
    console.error("Fetch error:", err);
  }
}
```

<br>

## Nested Error Handling

You can use multiple `try...catch` blocks if needed:

```js
async function complexFlow() {
  try {
    let res = await fetch(url1);
    let data1 = await res.json();

    try {
      let res2 = await fetch(url2);
      let data2 = await res2.json();
    } catch (innerErr) {
      console.error("Error in second fetch:", innerErr);
    }
  } catch (err) {
    console.error("Initial fetch failed:", err);
  }
}
```

<br>

## Important Notes

* Uncaught async errors will reject the promise and can be caught using `.catch()`.
* Always validate status codes manually for fetch.
* Prefer `try...catch` for cleaner, synchronous-looking error flows.

<br>

---

<br>

# Part 5: Sequential vs Parallel Execution

## Sequential Execution

When you use `await` multiple times one after another, each task waits for the previous one to complete.

```js
async function loadData() {
  const user = await fetch('/user').then(res => res.json());
  const posts = await fetch('/posts').then(res => res.json());
  console.log(user, posts);
}
```

* Each request starts **after** the previous one finishes.
* Useful when later tasks **depend** on earlier results.
* Downside: Slower if tasks are independent.

<br>

## Parallel Execution with `Promise.all()`

Run multiple independent tasks at the same time for better performance.

```js
async function loadDataParallel() {
  const [user, posts] = await Promise.all([
    fetch('/user').then(res => res.json()),
    fetch('/posts').then(res => res.json())
  ]);

  console.log(user, posts);
}
```

* Both fetches start at the same time.
* Faster total execution time.
* Use only if tasks are **independent**.

<br>

## Choosing the Right Approach

| Situation                          | Use                         |
| ---------------------------------- | --------------------------- |
| Tasks depend on each other         | Sequential `await`          |
| Tasks are independent              | `Promise.all()`             |
| Need all results, including errors | `Promise.allSettled()`      |
| Use the result of the fastest task | `Promise.race()` or `any()` |

<br>

## Other Promise Methods (Overview)

* `Promise.allSettled()` – waits for all to finish, no matter success or failure.
* `Promise.any()` – returns the first fulfilled Promise.
* `Promise.race()` – returns the first settled Promise (fulfilled or rejected).

<br>

---

<br>

# Part 6: Async Operations in Loops

## Problem with `forEach` and `map`

* These methods don't work well with `await` because they don't handle asynchronous control flow properly.

```js
const ids = [1, 2, 3];

ids.forEach(async (id) => {
  const res = await fetch(`/user/${id}`);
  const data = await res.json();
  console.log(data);
});
```

* This will run all async functions in parallel and does **not wait** for one before moving to the next.
* The parent function doesn't wait for the loop to finish.

<br>

## Preferred: `for...of` with `await`

Use `for...of` to run async calls in a loop where order matters or you want to `await` properly.

```js
const ids = [1, 2, 3];

async function fetchUsers() {
  for (const id of ids) {
    const res = await fetch(`/user/${id}`);
    const data = await res.json();
    console.log(data);
  }
}

fetchUsers();
```

* Executes requests sequentially.
* Slower, but safe for ordered or dependent tasks.

<br>

## Running in Parallel with `.map()` and `Promise.all()`

For better performance when tasks are independent:

```js
const ids = [1, 2, 3];

async function fetchAllUsers() {
  const promises = ids.map(async (id) => {
    const res = await fetch(`/user/${id}`);
    return res.json();
  });

  const results = await Promise.all(promises);
  console.log(results);
}

fetchAllUsers();
```

* All API calls start simultaneously.
* Use when order doesn't matter and tasks are independent.

<br>

## Summary

| Loop Style              | Handles `await` | Executes In Order | Suitable When               |
| ----------------------- | --------------- | ----------------- | --------------------------- |
| `forEach`               | No              | No                | Avoid with async functions  |
| `for...of`              | Yes             | Yes               | Order matters or needs sync |
| `map` + `Promise.all()` | Yes             | No                | Tasks are independent       |



<br>

---

<br>


# Part 7: Real-world Use Cases

## 1. Fetching Data from an API (Client Side)

Async/await is commonly used in front-end apps to fetch data from APIs.

```js
async function loadPost() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await res.json();
    console.log(post);
  } catch (err) {
    console.error('Error loading post:', err);
  }
}

loadPost();
```

<br>

## 2. Submitting Forms Asynchronously

```js
async function handleSubmit(event) {
  event.preventDefault();

  const data = { name: 'Alice', age: 25 };

  try {
    const res = await fetch('/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    console.log('Form submitted:', result);
  } catch (err) {
    console.error('Submission failed:', err);
  }
}
```

<br>

## 3. Using Async/Await in React Components

```js
import { useEffect, useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch('/user');
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchUser();
  }, []);

  return <div>{user ? user.name : 'Loading...'}</div>;
}
```

<br>

## 4. File I/O in Node.js (Server Side)

```js
const fs = require('fs/promises');

async function readFile() {
  try {
    const data = await fs.readFile('./file.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error('File read error:', err);
  }
}

readFile();
```

<br>

## Summary

Async/await is used widely in real-world applications for:

* Fetching and displaying data
* Form submissions
* Component lifecycle methods in React
* File system operations in Node.js



<br>

---

<br>


# Part 8: Advanced Patterns

## 1. Promise.allSettled()

Waits for all promises to settle (either fulfilled or rejected).

```js
const promises = [
  fetch('/valid-url'),
  fetch('/invalid-url')
];

const results = await Promise.allSettled(promises);

results.forEach((result) => {
  if (result.status === 'fulfilled') {
    console.log('Success:', result.value);
  } else {
    console.log('Failed:', result.reason);
  }
});
```

* Useful when you want to handle **all outcomes** individually.

<br>

## 2. Promise.any()

Resolves as soon as **one promise** is fulfilled.

```js
const sources = [
  fetch('/bad-url'),
  fetch('/another-bad-url'),
  fetch('/good-url')
];

try {
  const firstSuccess = await Promise.any(sources);
  console.log('First successful response:', firstSuccess);
} catch (error) {
  console.log('All failed:', error);
}
```

* Ignores all rejections until one succeeds.

<br>

## 3. Promise.race()

Returns the **first settled** promise (resolved or rejected).

```js
const slow = new Promise(resolve => setTimeout(() => resolve('slow'), 2000));
const fast = new Promise(resolve => setTimeout(() => resolve('fast'), 1000));

const result = await Promise.race([slow, fast]);
console.log(result); // Outputs: fast
```

* Useful when you want to **timeout** or **pick the fastest** result.

<br>

## 4. Timeout with Promise.race()

```js
function timeoutAfter(ms) {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Timed out')), ms)
  );
}

async function fetchWithTimeout(url) {
  return Promise.race([
    fetch(url),
    timeoutAfter(3000)
  ]);
}
```

* Helps prevent long waits for slow network responses.

<br>

## 5. Retry Logic

Simple retry with a loop:

```js
async function retryFetch(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Bad response');
      return await res.json();
    } catch (err) {
      if (i === retries - 1) throw err;
    }
  }
}
```



<br>

---

<br>


# Part 9: Common Mistakes and Gotchas

## 1. Using `await` Outside an `async` Function

```js
//  SyntaxError
const data = await fetch('/api');
```

* `await` can only be used inside `async` functions or in top-level modules.

<br>

## 2. Forgetting to Handle Errors

```js
async function fetchData() {
  const res = await fetch('/bad-url'); //  Throws on network failure
  const data = await res.json();
  console.log(data);
}
```

* Always wrap async code in `try...catch` to prevent unhandled exceptions.

<br>

## 3. Not Using `Promise.all()` for Parallel Tasks

```js
//  Sequential and slow
await task1();
await task2();
await task3();

//  Parallel
await Promise.all([task1(), task2(), task3()]);
```

* Prefer `Promise.all()` when tasks are independent to improve performance.

<br>

## 4. Mixing `.then()` with `await` Unnecessarily

```js
//  Redundant
const data = await fetch('/api').then(res => res.json());

//  Cleaner
const res = await fetch('/api');
const data = await res.json();
```

* Mixing styles can reduce readability. Stick to one style (preferably `await`).

<br>

## 5. Using `forEach` with `await`

```js
//  Doesn't await properly
items.forEach(async item => {
  await process(item);
});
```

* Use `for...of` or `map` with `Promise.all()` for correct async behavior.

<br>

## 6. Unhandled Promise Rejections

* Uncaught rejections may crash your app or be silently ignored.
* Always use `.catch()` or `try...catch`.



<br>

---

<br>


# Part 10: Testing Async Code

## 1. Using `async` Functions in Tests

Most testing frameworks like Jest and Mocha support async tests by simply declaring the test function as `async`.

```js
test('fetches data correctly', async () => {
  const data = await fetchData();
  expect(data).toHaveProperty('id');
});
```

* The test runner will wait for the `Promise` to resolve.

<br>

## 2. Using `done` Callback (Jasmine/Mocha-style)

In older or callback-style APIs:

```js
it('calls done when finished', (done) => {
  fetchData().then(data => {
    expect(data).toBeDefined();
    done();
  });
});
```

* Call `done()` after async work completes.

<br>

## 3. Catching Errors in Async Tests

Always test for thrown errors using `try...catch` or testing framework utilities.

```js
test('throws error on failure', async () => {
  await expect(fetchWithError()).rejects.toThrow('Network Error');
});
```

* Use `.rejects.toThrow()` in Jest.

<br>

## 4. Mocking Async Calls

Mock functions using `jest.fn()` or libraries like `nock` or `msw`.

```js
// Mock fetch in Jest
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve({ name: 'Test' }) })
);

const data = await fetchData();
expect(data.name).toBe('Test');
```

<br>

## 5. Tips for Testing

* Always return or await Promises in test functions.
* Use `async/await` for readability.
* Handle rejections with `.rejects`, not `try...catch` unless you're testing inside.



<br>

---

<br>

