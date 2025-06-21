## The Story: A Task That Takes Time

Imagine you are a chef in a busy restaurant. You have many tasks to do, like preparing appetizers, cooking meals,
and serving food. Some tasks take longer than others. For example, cooking a steak takes longer than tossing a salad.

In programming terms, you can think of each task as a function. Some functions take time (like cooking steak), and some are quick (like tossing salad). Normally, when you give a task to a chef, they might not wait for it to finish. They can move on to another task while the first one is still cooking.

### Without async/await: The Old Way (Callbacks and Promises)
Before we had async and await, JavaScript used promises to handle time-consuming tasks. 
But promises are like asking your chef to give you a piece of paper with instructions for when the task is done. However,
the chef would still continue with other work while waiting for the task to be completed.

```javascript
function cookSteak() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Steak is ready!');
      resolve();
    }, 2000); // Takes 2 seconds
  });
}

function tossSalad() {
  console.log('Salad is ready!');
}

cookSteak().then(() => {
  tossSalad();
});

```
This works, but it's a bit messy. The then() method is used to handle the next task, but it can get tricky to manage as tasks grow in complexity.

### Enter async and await: The New Way
Now, let's change the way we handle our tasks. Imagine if the chef could simply pause while cooking the steak and only proceed when the steak is ready. This is what async and await allow you to do.

- async turns a function into one that returns a promise, even if you don’t use new Promise(). <br>
- await tells the program to pause and wait for a promise to resolve before continuing to the next task.

```javascript
async function cookSteak() {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
  console.log('Steak is ready!');
}

async function tossSalad() {
  console.log('Salad is ready!');
}

async function chefTask() {
  await cookSteak(); // Wait for steak to be ready
  tossSalad();       // Then toss the salad
}

chefTask();  //dont forget this
```


Notice how await makes the code cleaner and more readable? It looks almost like synchronous code, but the chef can still handle other tasks while waiting for the steak.

### Why Use async/await in Real Projects?
Now, in a real project, imagine you’re building a web application that needs to fetch data from a server. That process is slow and might take a few seconds. Instead of freezing the entire application, we can use async/await to handle this asynchronous task while still keeping the application responsive.

**Example**: Fetching Data from a Server
Let’s say you want to fetch user data from a server. Without async/await, your code would be messy:


```javascript
fetch('https://api.example.com/user')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

async function getUserData() {
  try {
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getUserData();

```
Now the flow is more natural and looks like synchronous code, even though it’s still non-blocking.
This is especially useful in real projects where you want to keep your application smooth, even when performing tasks like API calls, reading files, or waiting for user input.

###  Why Is async/await So Powerful?
1. clearer code
2.  error handing
3.  Better performance
4.  Real-life applications


### Conclusion: Your Chef’s New Skills
With async/await, your chef (the JavaScript engine) can cook the steak, pause, and wait for it to finish before 
starting the salad, all while still keeping the restaurant running smoothly. This makes your code both efficient and easy to follow,
which is why it's the go-to approach in modern JavaScript development.


## Technical :

### 1. async Keyword:
The async keyword is used to define an asynchronous function, which always returns a Promise. 
If the function explicitly returns a value, it is automatically wrapped in a resolved promise. If it throws an error, the returned promise is rejected.

```javascript
async function functionName() {
  // Asynchronous code
}

async function greet() {
  return "Hello, World!";
}

greet().then(console.log); // Output: Hello, World!

```

###  2. await Keyword:
The await keyword is used inside an async function to pause execution until a Promise resolves. It makes asynchronous code look and behave more like synchronous code, improving readability.
```
//syntax
let result = await promise;
```

await can only be used inside an async function.
It pauses execution of the function until the given promise resolves or rejects.

```javascript
async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  let data = await response.json();
  console.log(data);
}

fetchData();
```

OR
```javascript
const functionName = async() =>{
  //required code
}
```
The function waits for the fetch() request to complete before proceeding to parse the JSON response.


## Use cases
Practical Uses in Real Projects:
- Fetching data from APIs (e.g., fetch())
- Reading/writing files in Node.js (fs.promises.readFile())
- Database queries (MongoDB, PostgreSQL, etc.)
- Delayed execution (setTimeout() wrapped in a promise)
- Processing multiple asynchronous tasks efficiently (Promise.all() with await)
