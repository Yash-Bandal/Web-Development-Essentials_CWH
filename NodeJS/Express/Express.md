# Express

[Documentation](https://expressjs.com/)

<br>

### Index
1. [Introduction to Express.js](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#1-introduction-to-expressjs)
2. [Express.js Core Concepts](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#2-expressjs-core-concepts)
3. [Middleware in Express](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#3-middleware-in-express)
4. [Serving Static Files and Assets](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#4-serving-static-files-and-assets)
5. [Route Parameters and Query Strings](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#5-route-parameters-and-query-strings)
6. [Express Router](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#6-express-router)
7. [Templating Engines in Express](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#7-templating-engines-in-express)
8. [Building REST APIs with Express](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#8-building-rest-apis-with-express)
9. [Handling Forms and JSON Data](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#9-handling-forms-and-json-data)
10. [Error Handling in Express](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#10-error-handling-in-express)
11. [Express Project Structure & Organization](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#11-express-project-structure--organization)
12. [Connecting to MongoDB with Mongoose](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#12-connecting-to-mongodb-with-mongoose)
13. [CRUD App with Express + MongoDB](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#13-crud-app-with-express--mongodb)
14. [REST API with MVC + MongoDB - Best Practices](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#14-rest-api-with-mvc--mongodb<br>best-practices)
15. [Authentication with JWT in Express](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#15-authentication-with-jwt-in-express)
16. [File Uploads with Multer](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#16-file-uploads-with-multer)
17. [CORS in Express Apps](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#17-cors-in-express-apps)
18. [Environment Management with dotenv](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#18-environment-management-with-dotenv)
19. [Logging and Debugging in Express](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#19-logging-and-debugging-in-express)
20. [Express + Frontend Integration](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#20-express--frontend-integration)
21. [Pagination and Filtering in REST APIs](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#21-pagination-and-filtering-in-rest-apis)
22. [Rate Limiting and Security](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#22-rate-limiting-and-security)
23. [Testing Express Apps](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#23-testing-express-apps)
24. [Deployment Best Practices](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Express/Express.md#24-deployment-best-practices)


<br>

## 1. Introduction to Express.js

### 1.1 What is Express.js?

* Express.js is a **minimal and flexible Node.js web application framework**.
* It provides features to build **web applications and RESTful APIs**.
* Built on top of Node.js's HTTP module.
* Handles routing, middleware, templating, static files, etc.

### 1.2 Why Use Express?

* Simplifies routing and request/response handling.
* Middleware system for extensibility.
* Integrates easily with databases (MongoDB, MySQL).
* Supports template engines (EJS, Pug).
* Ideal for both **single-page apps** and **RESTful services**.

### 1.3 Installing Express

```bash
npm init -y             # Initialize Node project
npm install express     # Install express
```

### 1.4 Basic Express Server

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

### 1.5 How Express Differs from Native HTTP

| Feature      | Node.js (HTTP)                   | Express.js                     |
| --| -- | -- |
| Routing      | Manual URL & method check        | Built-in routing methods       |
| Middleware   | Manual parsing of body, URL etc. | Easy chaining with `app.use()` |
| JSON parsing | Requires `body-parser` or logic  | Built-in via `express.json()`  |
| Templating   | Not supported                    | Supports EJS, Pug, etc.        |
| Simplicity   | Verbose                          | Clean & readable syntax        |


<br>

---

<br>

## 2. Express.js Core Concepts

### 2.1 Application Object

* `const app = express();`
* Central object for defining routes, middleware, settings, etc.

<br>

### 2.2 Routing Basics

* Express provides routing methods like `get`, `post`, `put`, `delete`, etc.

```js
app.get('/', (req, res) => res.send('GET Home'));
app.post('/', (req, res) => res.send('POST Home'));
app.put('/user', (req, res) => res.send('Update User'));
app.delete('/user', (req, res) => res.send('Delete User'));
```

<br>

### 2.3 Request Methods

| Method | Usage           |
| -- | -- |
| GET    | Fetch resources |
| POST   | Submit data     |
| PUT    | Update data     |
| DELETE | Remove data     |

<br>

### 2.4 Request and Response Methods

#### Request Object (`req`)

* `req.url` – URL string
* `req.method` – HTTP method
* `req.query` – Query string object
* `req.params` – Route parameters
* `req.body` – Parsed request body (needs middleware)

#### Response Object (`res`)

* `res.send()` – Send text/HTML
* `res.json()` – Send JSON
* `res.status()` – Set HTTP status
* `res.redirect()` – Redirect to another URL

```js
app.get('/user/:id', (req, res) => {
  console.log(req.params.id);
  res.status(200).json({ id: req.params.id });
});
```



### 2.5 Chaining Route Methods

```js
app.route('/book')
  .get((req, res) => res.send('Get book'))
  .post((req, res) => res.send('Add book'))
  .put((req, res) => res.send('Update book'));
```



<br>

---

<br>


## 3. Middleware in Express

### 3.1 What is Middleware?

* Middleware functions are functions that have access to the **request object (********`req`****\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*)**, the **response object (********`res`****\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*)**, and the **next function**.
* They run in between the time a request is received and a response is sent.

```js
app.use((req, res, next) => {
  console.log('Request received');
  next();
});
```

<br>

### 3.2 Types of Middleware

#### 1. Built-in Middleware

* `express.json()` – Parses incoming JSON requests
* `express.urlencoded()` – Parses URL-encoded bodies
* `express.static()` – Serves static files

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
```

#### 2. Custom Middleware

```js
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}
app.use(logger);
```

#### 3. Third-Party Middleware

* Examples: `morgan`, `cors`, `helmet`

```bash
npm install morgan cors helmet
```

```js
const morgan = require('morgan');
app.use(morgan('dev'));
```

<br>

### 3.3 Middleware Chaining with `next()`

```js
app.use((req, res, next) => {
  console.log('Step 1');
  next();
});

app.use((req, res, next) => {
  console.log('Step 2');
  next();
});
```

<br>

### 3.4 Error Handling Middleware

* Must have **4 parameters**: `err`, `req`, `res`, `next`

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

<br>

---

<br>

## 4. Serving Static Files and Assets

### 4.1 What are Static Files?

Static files are files that don’t change dynamically and are sent directly to the client. Common examples:

* HTML
* CSS
* JavaScript
* Images
* Fonts

<br>

### 4.2 Using `express.static()`

Express provides built-in middleware to serve static files.

#### Step 1: Create a folder (e.g., `public/`) with static files:

```
project/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── app.js
```

#### Step 2: Register static middleware

```js
const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Static server running at http://localhost:3000');
});
```

Now visiting `http://localhost:3000/index.html` will serve your HTML file directly.

<br>

### 4.3 Serving from a Virtual Path Prefix

```js
app.use('/static', express.static('public'));
```

* Now you must visit `http://localhost:3000/static/index.html`

<br>

### 4.4 Serving Multiple Static Folders

```js
app.use(express.static('public'));
app.use(express.static('assets'));
```

Express will look for the file in `public/` first, then `assets/`.

<br>

### 4.5 Best Practices

* Store only static assets (HTML, CSS, JS, images) in the public folder
* Do not put confidential or backend files in this folder
* Use cache headers for optimization in production


<br>

---

<br>

## 5. Route Parameters and Query Strings

### 5.1 Route Parameters

* Used to define **dynamic parts** in the URL path.
* Express captures these parameters and stores them in `req.params`.

#### Syntax

```js
app.get('/user/:id', (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});
```

#### Multiple Parameters

```js
app.get('/user/:id/book/:bookId', (req, res) => {
  const { id, bookId } = req.params;
  res.send(`User ${id}, Book ${bookId}`);
});
```

<br>

### 5.2 Query Strings

* Used to pass data in URL after the `?` symbol.
* Express captures them in `req.query`.

#### Example URL

```
http://localhost:3000/search?q=express&category=node
```

#### Code

```js
app.get('/search', (req, res) => {
  const { q, category } = req.query;
  res.send(`Search query: ${q}, Category: ${category}`);
});
```

<br>

### 5.3 Combining Params and Query

```js
app.get('/user/:id', (req, res) => {
  const { id } = req.params;
  const { showDetails } = req.query;
  res.send(`User ID: ${id}, Show details: ${showDetails}`);
});
```

<br>

### 5.4 Use Cases

* `req.params`: used for **resource identification** (e.g. `/product/101`)
* `req.query`: used for **filtering, sorting, or optional input** (e.g. `?page=2&limit=10`)


<br>

---

<br>

## 6. Express Router

### 6.1 What is Express Router?

* A mini Express app that handles routes.
* Helps in separating routes into different files for **modular** and **maintainable** code.

<br>

### 6.2 Creating a Router Module

#### 📁 File Structure Example

```
project/
├── routes/
│   └── userRoutes.js
├── app.js
```

#### routes/userRoutes.js

```js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('User Home');
});

router.get('/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

module.exports = router;
```

#### app.js

```js
const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');

app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server running');
});
```

Now visiting `/users/` or `/users/123` will trigger the router.

<br>

### 6.3 Route Grouping

```js
// routes/productRoutes.js
router.route('/')
  .get((req, res) => res.send('Get all products'))
  .post((req, res) => res.send('Add product'));

router.route('/:id')
  .get((req, res) => res.send(`Product ID: ${req.params.id}`))
  .put((req, res) => res.send(`Update Product ${req.params.id}`))
  .delete((req, res) => res.send(`Delete Product ${req.params.id}`));
```

<br>

### 6.4 Benefits of Using Routers

* Keeps `app.js` clean
* Easier to manage and scale large apps
* Allows separation by features/modules

<br>

---

<br>

## 7. Templating Engines in Express

### 7.1 What is a Templating Engine?

* Templating engines allow you to **generate dynamic HTML** on the server.
* You can embed JavaScript logic inside HTML files.

Popular engines:

* EJS (Embedded JavaScript)
* Pug (formerly Jade)
* Handlebars

We'll focus on **EJS**, which is widely used and easy to learn.

<br>

### 7.2 Setting Up EJS

```bash
npm install ejs
```

```js
const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // Set EJS as the templating engine
```

Place EJS files in the default `views/` folder:

```
project/
├── views/
│   └── index.ejs
├── app.js
```

<br>

### 7.3 Basic EJS Template

#### views/index.ejs

```ejs
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
</head>
<body>
  <h1>Hello, <%= user %>!</h1>
</body>
</html>
```

#### app.js

```js
app.get('/', (req, res) => {
  res.render('index', { title: 'Home', user: 'Yash' });
});
```

<br>

### 7.4 Using Partials (Reusable Layouts)

Create a `partials/` folder:

```
views/
├── partials/
│   ├── header.ejs
│   └── footer.ejs
├── index.ejs
```

#### partials/header.ejs

```ejs
<header>
  <h1>Site Header</h1>
</header>
```

#### partials/footer.ejs

```ejs
<footer>
  <p>&copy; 2025</p>
</footer>
```

#### Use in Main File

```ejs
<%- include('partials/header') %>
<h2>Main Content</h2>
<%- include('partials/footer') %>
```

<br>

### 7.5 Best Practices

* Keep views organized in folders
* Use partials for headers, footers, and common layouts
* Avoid heavy logic in templates
* Use layout packages like `express-ejs-layouts` (optional)


<br>

---

<br>

## 8. Building REST APIs with Express

### 8.1 What is a REST API?

* REST (Representational State Transfer) is an architectural style for designing APIs.
* In RESTful APIs, each resource (e.g., users, products) is represented by a URL and manipulated using standard HTTP methods:

  * `GET` → Read
  * `POST` → Create
  * `PUT` → Update
  * `DELETE` → Remove

<br>

### 8.2 Creating REST Routes

```js
const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET single user
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  user ? res.json(user) : res.status(404).send('User not found');
});

// POST create user
app.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (user) {
    Object.assign(user, req.body);
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// DELETE user
app.delete('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  if (index !== -1) {
    users.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
});

app.listen(3000, () => console.log('API running on port 3000'));
```

<br>

### 8.3 Testing with Postman

Use Postman (or curl) to test each route:

* `GET /users` → List users
* `GET /users/1` → Get user with ID 1
* `POST /users` → Add user with JSON body
* `PUT /users/1` → Update user
* `DELETE /users/1` → Remove user

<br>

### 8.4 Status Codes Summary

| Code | Meaning               |
|--- | --- |
| 200  | OK                    |
| 201  | Created               |
| 204  | No Content            |
| 400  | Bad Request           |
| 404  | Not Found             |
| 500  | Internal Server Error |

<br>

---

<br>

## 9. Handling Forms and JSON Data

### 9.1 Parsing JSON Data

* Express has built-in middleware to handle JSON input from clients.
* Required when sending data using tools like Postman or frontend JavaScript `fetch()`.

```js
app.use(express.json()); // parse JSON bodies
```

#### Example:

```js
app.post('/api/data', (req, res) => {
  const data = req.body;
  console.log(data);
  res.send('JSON received');
});
```

Send a request with:

```json
{
  "name": "Yash",
  "age": 21
}
```

<br>

### 9.2 Handling Form Submissions

* Forms typically send data using `application/x-www-form-urlencoded` encoding.
* Use `express.urlencoded()` middleware to parse this data.

```js
app.use(express.urlencoded({ extended: true }));
```

#### HTML Form Example:

```html
<form action="/submit" method="POST">
  <input type="text" name="username">
  <button type="submit">Submit</button>
</form>
```

#### Express Route:

```js
app.post('/submit', (req, res) => {
  const { username } = req.body;
  res.send(`Received username: ${username}`);
});
```

<br>

### 9.3 Validating Input (Basic)

```js
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send('All fields are required');
  }
  res.send('Login data received');
});
```

<br>

### 9.4 Best Practices

* Always use `express.json()` and `express.urlencoded()` at the top.
* Sanitize and validate user inputs.
* Use external libraries like `express-validator` or `joi` for advanced validation.

<br>

---

<br>

## 10. Error Handling in Express

### 10.1 Handling 404 Errors (Not Found)

* Place this middleware **after all routes** to catch undefined paths.

```js
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});
```

<br>

### 10.2 Global Error Handler

* Catch and handle internal errors from routes or middleware.
* Must have **4 parameters**: `(err, req, res, next)`

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});
```

Use `next(err)` to forward errors to this handler.

<br>

### 10.3 Using try-catch in Async Routes

* Express doesn't automatically catch errors in async functions.

```js
app.get('/data', async (req, res, next) => {
  try {
    const data = await fetchData();
    res.json(data);
  } catch (err) {
    next(err); // forward to error handler
  }
});
```

<br>

### 10.4 Example: Throwing a Custom Error

```js
app.get('/error', (req, res, next) => {
  const error = new Error('This is a forced error');
  error.status = 500;
  next(error);
});
```

<br>

### 10.5 Best Practices

* Always define a **global error handler**.
* Use proper **HTTP status codes**.
* Avoid leaking stack traces in production.
* Use error-handling libraries (e.g., `http-errors` or `express-async-errors`).

<br>

## 11. Express Project Structure & Organization

### 11.1 Why Organize Code?

* Clean and maintainable
* Scalable for large projects
* Easier debugging and testing

<br>

### 11.2 Common Folder Structure

```
project/
├── controllers/      # Business logic
│   └── userController.js
├── models/           # Data schemas (for MongoDB, etc.)
│   └── userModel.js
├── routes/           # Route definitions
│   └── userRoutes.js
├── middleware/       # Custom middleware
│   └── auth.js
├── views/            # Templates (EJS/Pug)
├── public/           # Static assets (CSS, JS, images)
├── app.js            # Entry point
└── package.json
```

<br>

### 11.3 Separating Routes and Controllers

#### routes/userRoutes.js

```js
const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController');

router.get('/', getUsers);

module.exports = router;
```

#### controllers/userController.js

```js
exports.getUsers = (req, res) => {
  res.send('All users listed here');
};
```

#### app.js

```js
const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

app.listen(3000, () => console.log('Server started'));
```

<br>

### 11.4 Additional Folders

* `config/`: Configuration files like DB connections
* `utils/`: Helper functions
* `logs/`: Custom logging
* `tests/`: Unit & integration tests

<br>

### 11.5 Best Practices

* Keep `app.js` minimal (just setup and imports)
* Use environment variables (`dotenv` package)
* Follow MVC pattern where applicable
* Separate concerns clearly

<br>

## 12. Connecting to MongoDB with Mongoose

### 12.1 What is MongoDB?

* A **NoSQL database** that stores data in **BSON (Binary JSON)** format.
* Document-oriented and schema-less (flexible).
* Each record = document; each document = collection of key-value pairs.
* Ideal for modern, fast-changing web applications.

### 12.2 What is Mongoose?

* Mongoose is an **ODM (Object Data Modeling) library** for MongoDB and Node.js.
* It provides:

  * Schema validation
  * Model-based structure
  * Middleware support
  * Query building

```bash
npm install mongoose
```

<br>

### 12.3 Connecting to MongoDB

```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));
```

<br>

### 12.4 Defining a Schema & Model

```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);
```

* `Schema`: Blueprint of the data structure
* `Model`: Represents a collection in the database and provides methods to interact with it

<br>

### 12.5 Basic CRUD with Mongoose

#### Create a document

```js
const user = new User({ name: 'Yash', email: 'yash@example.com', age: 21 });
await user.save();
```

#### Read documents

```js
const users = await User.find();
const singleUser = await User.findById('userId');
```

#### Update a document

```js
await User.findByIdAndUpdate('userId', { age: 22 });
```

#### Delete a document

```js
await User.findByIdAndDelete('userId');
```

<br>

### 12.6 Mongoose Model Methods

| Method                | Description                  |
| ---| ---|
| `find()`              | Get all documents            |
| `findById(id)`        | Find by document ID          |
| `findOne()`           | Find first matching document |
| `create(obj)`         | Shortcut to `new + save()`   |
| `findByIdAndUpdate()` | Update a document by ID      |
| `findByIdAndDelete()` | Delete a document by ID      |

<br>

### 12.7 Common Mongoose Concepts

* **Schema Types**: String, Number, Boolean, Date, Array, ObjectId
* **Validation**: Required, min/max, match (regex), enums
* **Middleware**: Pre/post hooks like `save`, `remove`
* **Virtuals**: Fields not stored in DB but computed on the fly

<br>

## 13. CRUD App with Express + MongoDB

### 13.1 Project Overview

We will build a simple **User Management API** with:

* MongoDB (database)
* Mongoose (data modeling)
* Express (server & routing)

<br>

### 13.2 Folder Structure

```
project/
├── controllers/
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js
├── app.js
└── package.json
```

<br>

### 13.3 userModel.js

```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: Number
});

module.exports = mongoose.model('User', userSchema);
```

<br>

### 13.4 userController.js

```js
const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  user ? res.json(user) : res.status(404).send('User not found');
};

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
};

exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  user ? res.json(user) : res.status(404).send('User not found');
};

exports.deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  user ? res.status(204).send() : res.status(404).send('User not found');
};
```

<br>

### 13.5 userRoutes.js

```js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router.route('/:id')
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
```

<br>

### 13.6 app.js

```js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/userDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

app.use('/api/users', userRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
```

<br>

### 13.7 Testing with Postman

* `GET /api/users` – list all users
* `GET /api/users/:id` – get user by ID
* `POST /api/users` – create user (send JSON)
* `PUT /api/users/:id` – update user
* `DELETE /api/users/:id` – delete user

<br>
## 14. REST API with MVC + MongoDB - Best Practices

### 14.1 Why Use MVC (Model-View-Controller)?

* **Model**: Handles data and DB logic (e.g., Mongoose models)
* **View**: Templating system (not used in pure API, optional)
* **Controller**: Business logic for requests/responses

 Benefits:

* Clear separation of concerns
* Easy to maintain and scale
* Promotes clean architecture

<br>

### 14.2 Folder Structure (MVC Pattern)

```
project/
├── controllers/
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js
├── config/
│   └── db.js
├── middleware/
│   └── errorHandler.js
├── app.js
├── server.js
└── .env
```

<br>

### 14.3 `server.js` (Entry Point)

```js
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

<br>

### 14.4 `app.js` (App Setup)

```js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());

connectDB();

app.use('/api/users', userRoutes);
app.use(errorHandler);

module.exports = app;
```

<br>

### 14.5 `config/db.js` (DB Connection)

```js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
```

<br>

### 14.6 `middleware/errorHandler.js`

```js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || 'Server Error' });
};

module.exports = errorHandler;
```

<br>

### 14.7 `.env` File

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/mvcAPI
```

<br>

### 14.8 Best Practices Checklist 

* Use **dotenv** for config management
* Keep database config separate
* Use **controllers** for logic, not in routes
* Use custom middleware for errors
* Separate server and app files for flexibility (e.g., testing)
* Organize folders for scalability

<br>

## 15. Authentication with JWT in Express

### 15.1 What is JWT?

* **JWT (JSON Web Token)** is a compact, URL-safe token used for **authentication and authorization**.
* It contains:

  * **Header** (algorithm & token type)
  * **Payload** (user info/claims)
  * **Signature** (to verify integrity)

```bash
npm install jsonwebtoken bcryptjs
```

<br>

### 15.2 Basic Flow

1. User registers or logs in.
2. Server generates a JWT and sends it to the client.
3. Client stores token (e.g., in localStorage).
4. Client sends token in `Authorization` header for protected routes.
5. Server verifies token and grants access.

<br>

### 15.3 Signup & Login Routes

#### authController.js

```js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });
};

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });
  const token = createToken(user._id);
  res.status(201).json({ token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send('Invalid credentials');
  }

  const token = createToken(user._id);
  res.json({ token });
};
```

<br>

### 15.4 Middleware to Protect Routes

#### authMiddleware.js

```js
const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('Access denied');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).send('Invalid token');
  }
};

module.exports = protect;
```

<br>

### 15.5 Using Protected Routes

#### userRoutes.js

```js
const protect = require('../middleware/authMiddleware');

router.route('/')
  .get(protect, userController.getAllUsers)
  .post(userController.createUser); // public
```

<br>

### 15.6 Environment Variables (`.env`)

```
JWT_SECRET=supersecretkey123
```

<br>

### 15.7 Best Practices

* Store hashed passwords (never plain text)
* Set expiry time for JWTs
* Handle token errors gracefully
* Use HTTPS in production
* Consider using refresh tokens for long-term sessions

<br>

## 16. File Uploads with Multer

### 16.1 What is Multer?

* Multer is a middleware for handling **multipart/form-data**, used for uploading files in Express.

```bash
npm install multer
```

<br>

### 16.2 Basic Setup

#### uploadMiddleware.js

```js
const multer = require('multer');
const path = require('path');

// Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });
module.exports = upload;
```

<br>

### 16.3 Creating Upload Route

#### routes/uploadRoutes.js

```js
const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');

router.post('/single', upload.single('image'), (req, res) => {
  res.send({ filename: req.file.filename });
});

router.post('/multiple', upload.array('images', 3), (req, res) => {
  res.send({ files: req.files });
});

module.exports = router;
```

#### app.js

```js
const uploadRoutes = require('./routes/uploadRoutes');
app.use('/upload', uploadRoutes);
```

<br>

### 16.4 Upload Form Example (HTML)

```html
<form action="/upload/single" method="POST" enctype="multipart/form-data">
  <input type="file" name="image" />
  <button type="submit">Upload</button>
</form>
```

<br>

### 16.5 Serving Uploaded Files

Make `uploads/` publicly accessible:

```js
app.use('/uploads', express.static('uploads'));
```

Now files can be accessed at `http://localhost:3000/uploads/filename.jpg`

<br>

### 16.6 Best Practices

* Validate file types and sizes
* Store files in cloud (e.g. S3) in production
* Use UUID or timestamps for unique filenames
* Handle errors using middleware

<br>

## 17. CORS in Express Apps

### 17.1 What is CORS?

* **CORS (Cross-Origin Resource Sharing)** is a security mechanism enforced by browsers.
* It restricts web apps from making requests to a **different origin** (domain, port, or protocol) than the one it was served from.

🔒 By default, browsers block cross-origin requests unless explicitly allowed by the server.

<br>

### 17.2 Common Use Cases

* Frontend (React/Vue) running on `localhost:3000`
* Backend API (Express) running on `localhost:5000`
* Requests from frontend → backend will be blocked unless CORS is handled.

<br>

### 17.3 Installing and Using `cors` Middleware

```bash
npm install cors
```

#### Basic Setup

```js
const cors = require('cors');
app.use(cors());
```

#### Allowing Specific Origin

```js
app.use(cors({
  origin: 'http://localhost:3000'
}));
```

#### Multiple Origins

```js
const allowedOrigins = ['http://localhost:3000', 'https://myapp.com'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
```

<br>

### 17.4 Preflight Requests

* CORS uses **OPTIONS** request (preflight) before certain methods like `PUT`, `DELETE`, or custom headers.

Express handles it automatically with `cors()` middleware.

<br>

### 17.5 Enabling Credentials (Cookies, Auth)

```js
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

Also set `withCredentials: true` on the frontend request.

<br>

### 17.6 Best Practices

* Avoid `app.use(cors())` with `*` in production.
* Use environment variables to manage allowed origins.
* Log and debug CORS errors using browser console/network tab.

<br>

## 18. Environment Management with dotenv

### 18.1 Why Use dotenv?

* Keeps sensitive credentials **out of code** (e.g. passwords, API keys)
* Allows **different configurations** for dev, test, and production
* Stores variables in a simple `.env` file

<br>

### 18.2 Installing dotenv

```bash
npm install dotenv
```

<br>

### 18.3 Using dotenv in Your App

#### Add this at the top of your `app.js` or `server.js`

```js
require('dotenv').config();
```

<br>

### 18.4 Creating a `.env` File

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/mydb
JWT_SECRET=verysecretkey123
NODE_ENV=development
```

✅ Keep this file in `.gitignore`

```bash
# .gitignore
.env
```

<br>

### 18.5 Accessing Environment Variables

```js
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;
```

<br>

### 18.6 Switching Environments

Use `NODE_ENV` to check the environment type:

```js
if (process.env.NODE_ENV === 'production') {
  // Do something for production
}
```

<br>

### 18.7 Best Practices

* Never commit `.env` to Git
* Use `.env.example` to document required keys
* Use different `.env` files per environment
* Use secure vaults (e.g., GitHub secrets, Heroku config vars, etc.) in production

<br>

## 19. Logging and Debugging in Express

### 19.1 Why Logging Matters

* Monitor requests/responses
* Debug application flow
* Record errors and usage patterns

<br>

### 19.2 Using `morgan` for HTTP Request Logging

#### Install morgan:

```bash
npm install morgan
```

#### Use in app:

```js
const morgan = require('morgan');
app.use(morgan('dev'));
```

<br>
>  Modes: `dev`, `combined`, `tiny`, `short`
<br>

```js
// Save logs to file
const fs = require('fs');
const path = require('path');
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));
```

<br>

### 19.3 Using `debug` Module for Custom Debugging

#### Install debug:

```bash
npm install debug
```

#### Usage:

```js
const debug = require('debug')('app:start');
debug('Starting the server...');
```

Enable debug output:

```bash
DEBUG=app:* node server.js
```

<br>

### 19.4 Logging Errors

Use a custom error-handling middleware:

```js
app.use((err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] ${err.stack}`);
  res.status(500).json({ message: 'Something went wrong' });
});
```

<br>

### 19.5 Logging with Winston (Advanced)

* Use for production-ready logging (files, levels, formats)

```bash
npm install winston
```

```js
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

logger.info('Server started');
```

<br>

### 19.6 Best Practices

* Use `morgan` for request logs
* Use `debug` for dev-only logs
* Use `winston` in production (or another logger)
* Keep logs in structured JSON
* Log to external services in production (e.g., Datadog, Loggly)

<br>

## 20. Express + Frontend Integration

### 20.1 Why Integrate Frontend with Express?

* Serve frontend (React, Vue, etc.) from Express backend in production
* Simplifies deployment: one server handles both frontend and backend
* Useful for SEO, SSR, and routing fallback

<br>

### 20.2 Serving Static React Build in Express

#### Step 1: Build the React app

```bash
cd client
npm run build
```

This creates a `build/` folder with production-ready files.

#### Step 2: Serve `build` folder from Express

```js
const path = require('path');

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});
```

This handles all routes and serves the React frontend.

<br>

### 20.3 Setup Proxy for Dev Environment

When running React and Express on different ports in development:

#### `client/package.json`

```json
"proxy": "http://localhost:5000"
```

This forwards frontend requests (e.g., API calls) to Express.

<br>

### 20.4 CORS Handling for Frontend

If not using proxy:

```js
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
```

<br>

### 20.5 Folder Structure (Fullstack Example)

```
project/
├── client/            # React app
│   ├── public/
│   └── src/
├── server/            # Express app
│   ├── controllers/
│   ├── routes/
│   └── app.js
├── .env
├── package.json       # root (with scripts to run both apps)
```

<br>

### 20.6 Best Practices

* Use `proxy` in development
* Use `build/` for production
* Configure paths properly in deployment platform (e.g., Vercel, Netlify, Render)
* Separate frontend/backend clearly for clarity and testing

<br>

## 21. Pagination and Filtering in REST APIs

### 21.1 Why Use Pagination & Filtering?

* Improve performance by loading fewer items per request
* Enhance user experience with faster responses
* Avoid overloading frontend and backend

<br>

### 21.2 Pagination with Mongoose (`limit` & `skip`)

```js
// Example: GET /api/users?page=2&limit=5
exports.getPaginatedUsers = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const users = await User.find().skip(skip).limit(limit);
  const total = await User.countDocuments();

  res.json({
    page,
    limit,
    totalPages: Math.ceil(total / limit),
    data: users
  });
};
```

<br>

### 21.3 Filtering by Fields (Query Parameters)

```js
// Example: GET /api/users?age=21&name=Yash
exports.filterUsers = async (req, res) => {
  const filters = req.query; // { age: '21', name: 'Yash' }
  const users = await User.find(filters);
  res.json(users);
};
```

<br>

### 21.4 Search with Regular Expressions

```js
// Example: GET /api/users/search?name=ya
exports.searchUsers = async (req, res) => {
  const { name } = req.query;
  const users = await User.find({
    name: { $regex: name, $options: 'i' } // case-insensitive search
  });
  res.json(users);
};
```

<br>

### 21.5 Sorting

```js
// Example: GET /api/users?sort=age
const sortBy = req.query.sort || 'name';
const users = await User.find().sort(sortBy);
```

<br>

### 21.6 Combining All (Pagination + Filter + Search + Sort)

```js
exports.getUsersAdvanced = async (req, res) => {
  const { page = 1, limit = 10, sort = 'name', name } = req.query;
  const skip = (page - 1) * limit;

  const filter = {};
  if (name) filter.name = { $regex: name, $options: 'i' };

  const users = await User.find(filter)
    .skip(skip)
    .limit(parseInt(limit))
    .sort(sort);

  const total = await User.countDocuments(filter);

  res.json({
    page: parseInt(page),
    totalPages: Math.ceil(total / limit),
    data: users
  });
};
```

<br>

### 21.7 Best Practices

* Set default `limit` and max limit to prevent abuse
* Use indexes on fields being filtered/searched
* Paginate all list-heavy endpoints
* Return meta-data with response (total count, current page, etc.)

<br>

Next: **22. Security in Express (Helmet, Rate Limiting)**

* Use of `helmet` for headers
* Prevent brute force attacks with `express-rate-limit`

Shall we continue?


## 22. Rate Limiting and Security


## 23. Testing Express Apps

## 24. Deployment Best Practices




