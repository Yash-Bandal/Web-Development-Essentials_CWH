# Dotenv Module in Node.js

## Overview

`dotenv` is a module that loads environment variables from a `.env` file into `process.env`.

It helps in keeping configuration values like database credentials, API keys, and port numbers outside your codebase.

<br>

## Why Use Dotenv?
* Separates configuration from code
* Avoids hardcoding sensitive data
* Supports multiple environments (dev, test, production)
* Easy to change config without editing source files

<br>

## Installation
```bash
npm install dotenv
```

<br>

## Setting Up
### Step 1: Create a `.env` file in your root directory

```env
PORT=3000
DB_USER=admin
DB_PASS=secret123
```

### Step 2: Load `.env` variables in your code

```js
require('dotenv').config();

console.log(process.env.PORT);      // 3000
console.log(process.env.DB_USER);   // admin
```

---
> Always load `dotenv` at the very top of your entry file.
---
 
<br>

## Example in Express

```js
require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

<br>

## Best Practices

* Add `.env` to `.gitignore` to avoid exposing secrets
* Use descriptive variable names: `DB_URL`, `API_SECRET`, etc.
* Separate environment configs using multiple `.env` files:

  * `.env.development`
  * `.env.production`

<br>

## Common Gotchas

* Variables in `.env` are **always strings**
* Restart server after changing `.env`
* `dotenv` must be called **before** accessing `process.env`

<br>

## Revise

| Feature           | Description                              |
| ----------------- | ---------------------------------------- |
| `.env` file       | Stores key-value config data             |
| `dotenv.config()` | Loads variables into `process.env`       |
| `process.env.VAR` | Access the variable in your Node.js app  |
| `.gitignore`      | Prevent committing sensitive info to Git |

<br>


## MongoDB Integration - Setting Up

### Step 1: Create a `.env` file in your root directory

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/myapp
```

### Step 2: Load `.env` variables in your code

```js
require('dotenv').config();

console.log(process.env.PORT);       // 3000
console.log(process.env.MONGO_URI);  // mongodb://localhost:27017/myapp
```

---
> Always load `dotenv` at the very top of your entry file.
---

## MongoDB Integration Example

```js
require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));
```
---
> This keeps your connection string secure and outside your source code.
---

<br>
---

<br>



