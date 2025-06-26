
<h1 align="center"><b> Mongooose </b> <img src="https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/b7fc024ffbf64d2dfd63b0ccdad5a5ef822a236f/NodeJS/StoreRoom/mongodb-leaf_32x32.png?raw=true"></h1>

<br>

### Index

1. [Part 1: Introduction to Mongoose](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/02_Moongoose_In_Depth.md#part-1-introduction-to-mongoose)
2. [Part 2: Installation & Connection](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/02_Moongoose_In_Depth.md#part-2-installation--connection)
3. [Part 3: Schemas and Models](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/02_Moongoose_In_Depth.md#part-3-schemas-and-models)
4. [Part 4: CRUD Operations in Mongoose](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/02_Moongoose_In_Depth.md#part-4-crud-operations-in-mongoose)
5. [Part 5: Schema Validation in Mongoose](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/02_Moongoose_In_Depth.md#part-5-schema-validation-in-mongoose)
6. [Part 6: Model Methods in Mongoose](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/02_Moongoose_In_Depth.md#part-6-model-methods-in-mongoose)
7. [Part 7: Middleware (Hooks) in Mongoose](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/02_Moongoose_In_Depth.md#part-7-middleware-hooks-in-mongoose)
8. [Part 8: Relationships and Population in Mongoose](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/02_Moongoose_In_Depth.md#part-8-relationships-and-population-in-mongoose)
9. [Part 9: Error Handling in Mongoose](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/02_Moongoose_In_Depth.md#part-9-error-handling-in-mongoose)
10. [Part 10: Mongoose + Express Integration](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/02_Moongoose_In_Depth.md#part-10-mongoose--express-integration)


<br>

## Part 1: Introduction to Mongoose

### What is Mongoose?
* Mongoose is an **Object Data Modeling (ODM)** library for MongoDB and Node.js.
* It provides a structured and schema-based approach to interact with MongoDB.
* Mongoose wraps MongoDB native drivers with helpful features like validation, middleware, and querying.

### Why Use Mongoose?
* Enforces **data structure** using schemas
* Simplifies **CRUD operations** with built-in methods
* Adds **middleware support** for logic before/after operations
* Enables **relationships** through referencing and population

### Key Features
* Schema definitions
* Type casting
* Built-in validation
* Query helpers
* Middleware (pre/post hooks)
* Relationships (`populate()`)

### Example Use Case
Instead of inserting raw MongoDB documents manually:

```js
// MongoDB native driver
collection.insertOne({ name: "John", age: 25 });
```

You use Mongoose with defined structure:

```js
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const User = mongoose.model("User", userSchema);
User.create({ name: "John", age: 25 });
```

<br>

---

<br>

## Part 2: Installation & Connection

### Installing Mongoose

```bash
npm install mongoose
```

### Basic Connection to Local MongoDB

```js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myApp")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection error", err));
```

### Using Environment Variables (Recommended)

* Store MongoDB URI in `.env` file:

```env
MONGO_URI=mongodb://localhost:27017/myApp
```

* Load `.env` and connect:

```js
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection error", err));
```

### Connecting to MongoDB Atlas

* Replace local URI with Atlas URI:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbName
```



<br>

---

<br>

## Part 3: Schemas and Models

### What is a Schema?

* A schema defines the structure of documents in a MongoDB collection.
* Includes field names, types, default values, validation rules, etc.

### Creating a Schema

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0 },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});
```

### Creating a Model

* A model is a constructor compiled from the schema.
* It represents the collection and provides methods to interact with it.

```js
const User = mongoose.model("User", userSchema);
```

### Data Types in Mongoose

* `String`
* `Number`
* `Boolean`
* `Date`
* `Buffer`
* `ObjectId`
* `Array`
* `Mixed` (any type)

### Schema Options

```js
const schema = new mongoose.Schema({}, { timestamps: true });
```

* `timestamps: true` → adds `createdAt` and `updatedAt` fields automatically.
* `versionKey: false` → disables the `__v` field.

### Example Combined

```js
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, enum: ["Books", "Electronics", "Clothing"] }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
```



<br>

---

<br>

## Part 4: CRUD Operations in Mongoose

### 1. Create Documents

#### `Model.create()`

```js
User.create({ name: "Alice", email: "alice@example.com", age: 24 })
  .then(user => console.log(user))
  .catch(err => console.error(err));
```

#### Using `new Model()` and `save()`

```js
const newUser = new User({ name: "Bob", email: "bob@example.com", age: 30 });
newUser.save();
```

<br>

### 2. Read Documents

#### `find()` – multiple documents

```js
User.find({ age: { $gte: 18 } })
  .then(users => console.log(users));
```

#### `findOne()` – first matching document

```js
User.findOne({ email: "alice@example.com" })
  .then(user => console.log(user));
```

#### `findById()` – by document ID

```js
User.findById("64a2b1...id")
  .then(user => console.log(user));
```


<br>

### 3. Update Documents

#### `updateOne()`

```js
User.updateOne({ name: "Alice" }, { $set: { age: 25 } })
  .then(res => console.log(res));
```

#### `findByIdAndUpdate()` (returns old data by default)

```js
User.findByIdAndUpdate(id, { age: 26 }, { new: true })
  .then(updatedUser => console.log(updatedUser));
```


<br>

### 4. Delete Documents

#### `deleteOne()`

```js
User.deleteOne({ email: "bob@example.com" })
  .then(res => console.log(res));
```

#### `findByIdAndDelete()`

```js
User.findByIdAndDelete(id)
  .then(deletedUser => console.log(deletedUser));
```


<br>

### Revision

| Operation | Method                               |
| --------- | ------------------------------------ |
| Create    | `create()`, `save()`                 |
| Read      | `find()`, `findOne()`, `findById()`  |
| Update    | `updateOne()`, `findByIdAndUpdate()` |
| Delete    | `deleteOne()`, `findByIdAndDelete()` |



<br>

---

<br>

## Part 5: Schema Validation in Mongoose

### Why Use Validation?

* Ensures data correctness before saving to MongoDB.
* Prevents saving incomplete, invalid, or malformed data.

### 1. Built-in Validators

You can specify validators directly in the schema.

#### Example:

```js
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  age: { type: Number, min: 0, max: 120 },
  role: { type: String, enum: ["user", "admin"] }
});
```

### 2. Required Fields

```js
email: { type: String, required: true }
```

### 3. Value Limits

* **min** and **max** for numbers

```js
age: { type: Number, min: 18, max: 65 }
```

### 4. Pattern Matching (Regex)

* Use `match` for string patterns like email or phone

```js
email: { type: String, match: /.+\@.+\..+/ }
```

### 5. Enumerated Values

```js
status: { type: String, enum: ["pending", "active", "blocked"] }
```

### 6. Custom Validators

```js
password: {
  type: String,
  validate: {
    validator: function(v) {
      return v.length >= 6;
    },
    message: "Password must be at least 6 characters long"
  }
}
```

### 7. Validation Errors

* Mongoose throws a `ValidationError` if a document fails validation

```js
const user = new User({ email: "not-an-email" });
user.save().catch(err => console.log(err.message));
```




<br>

---

<br>


## Part 6: Model Methods in Mongoose

Mongoose allows you to add **custom methods** to your models to make them more powerful and reusable.


<br>

### 1. Instance Methods

* Added to the `schema.methods` object.
* Available on individual document instances.

#### Example:

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

userSchema.methods.greet = function() {
  return `Hello, my name is ${this.name}`;
};

const User = mongoose.model("User", userSchema);

const user = new User({ name: "Alice" });
console.log(user.greet()); // Hello, my name is Alice
```


<br>

### 2. Static Methods

* Added to `schema.statics` object.
* Available on the model itself (not individual documents).

#### Example:

```js
userSchema.statics.findByEmail = function(email) {
  return this.findOne({ email });
};

User.findByEmail("alice@example.com")
  .then(user => console.log(user));
```


<br>

### 3. Virtual Properties

* Fields not stored in DB but computed on the fly.
* Use `schema.virtual()`.

#### Example:

```js
const productSchema = new mongoose.Schema({
  price: Number,
  tax: Number
});

productSchema.virtual("totalPrice").get(function() {
  return this.price + this.tax;
});

const Product = mongoose.model("Product", productSchema);
const item = new Product({ price: 100, tax: 20 });
console.log(item.totalPrice); // 120
```

To include virtuals in JSON:

```js
schema.set("toJSON", { virtuals: true });
schema.set("toObject", { virtuals: true });
```




<br>

---

<br>

## Part 7: Middleware (Hooks) in Mongoose

### What is Middleware?

* Middleware are functions that run **before or after** certain Mongoose operations.
* Also called **hooks**.


<br>

### 1. Types of Middleware

* **Pre** middleware – runs **before** an operation
* **Post** middleware – runs **after** an operation

Operations you can hook into include:

* `save`
* `remove`
* `validate`
* `updateOne`
* `findOneAndUpdate`
* and more


<br>

### 2. Pre Save Hook (Common Use: Hash Passwords)

```js
userSchema.pre("save", function(next) {
  if (this.isModified("password")) {
    this.password = hash(this.password); // assume hash() is defined
  }
  next();
});
```


<br>

### 3. Post Save Hook (Log or Notify)

```js
userSchema.post("save", function(doc) {
  console.log("User saved:", doc);
});
```


<br>

### 4. Middleware on Queries (e.g. `findOneAndUpdate`)

```js
userSchema.pre("findOneAndUpdate", function(next) {
  console.log("Updating user...");
  next();
});
```



---
> ### Note :

> * Use `this` carefully. In document middleware, `this` refers to the document.
> * In query middleware, `this` refers to the query.
---


<br>

---

<br>

## Part 8: Relationships and Population in Mongoose

### What Are Relationships?

* MongoDB is non-relational, but Mongoose lets you build relationships between documents using **references**.
* Common in full-stack apps where one object relates to another (e.g., Users → Posts).


<br>

### 1. Referencing Documents (Normalization)

* Store an ObjectId reference to another document

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({ name: String });
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);
```


<br>

### 2. Using `populate()`

* Populate replaces the referenced `_id` with the actual document

```js
Post.find().populate("author")
  .then(posts => console.log(posts));
```

* You can also specify fields:

```js
Post.find().populate("author", "name");
```

<br>

### 3. Embedding Documents (Denormalization)

* Store the entire subdocument inside the parent

```js
const commentSchema = new mongoose.Schema({
  body: String,
  createdAt: { type: Date, default: Date.now }
});

const postSchema = new mongoose.Schema({
  title: String,
  comments: [commentSchema]
});
```

---
>  This is better for small subdocuments with tight coupling
---

### When to Use Which?

| Use Referencing            | Use Embedding                |
| -------------------------- | ---------------------------- |
| Many-to-One / Many-to-Many | One-to-Few (tightly related) |
| Reuse referenced doc       | Subdoc won't be reused       |
| Size is large              | Size is small                |



<br>

---

<br>

## Part 9: Error Handling in Mongoose

### Why It Matters

* Helps catch issues like validation errors, missing documents, duplicate keys, etc.
* Essential in production apps for user feedback and debugging.


<br>

### 1. Try-Catch with Async/Await

Use `try/catch` to catch errors in async functions:

```js
try {
  const user = await User.findById(id);
  if (!user) throw new Error("User not found");
  console.log(user);
} catch (err) {
  console.error("Error:", err.message);
}
```


<br>

### 2. Validation Errors

Occurs when document fails schema validation rules.

```js
const user = new User({ email: "invalid-email" });
user.save().catch(err => {
  if (err.name === "ValidationError") {
    console.log("Validation failed:", err.message);
  }
});
```


<br>

### 3. Duplicate Key Errors

Happens when `unique` constraint is violated (like duplicate email).

```js
try {
  await User.create({ email: "test@example.com" });
} catch (err) {
  if (err.code === 11000) {
    console.log("Duplicate key error:", err.keyValue);
  }
}
```


<br>

### 4. Error Types in Mongoose

* `ValidationError` – schema validation failed
* `CastError` – invalid ID or type
* `MongoError` – DB-level errors (like duplicate key)


<br>

### 5. Global Error Handling in Express (Bonus)

```js
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});
```


<br>

---

<br>

## Part 10: Mongoose + Express Integration

### Overview

In a typical full-stack MERN app, Mongoose is used in Express routes to:

* Interact with MongoDB
* Handle CRUD operations
* Send JSON data to the frontend (React)


<br>

### 1. Basic Setup

```js
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/myApp")
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));
```


<br>

### 2. Defining a Model

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);
```


<br>

### 3. Creating Routes

#### Create

```js
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
```

#### Read

```js
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
```

#### Update

```js
app.put("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
```

#### Delete

```js
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});
```

<br>

### 4. Running the Server

```js
app.listen(3000, () => console.log("Server running on port 3000"));
```



<br>

---

<br>
