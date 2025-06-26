<div display="flex" align = "center">
<h1>
  MongoDB
  <img src="https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/b7fc024ffbf64d2dfd63b0ccdad5a5ef822a236f/NodeJS/StoreRoom/mongodb-leaf_32x32.png?raw=true" alt="MongoDB" width="30" />
</h1>

</div>

<br>

1. [Documentation](https://www.mongodb.com/docs/)
2. [W3Schools](https://www.w3schools.com/mongodb/)

<br>


### Index

1. [Part 1: Introduction to MongoDB](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/01_Notes.md#part-1-introduction-to-mongodb)
2. [Part 2: MongoDB Core Concepts](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/01_Notes.md#part-2-mongodb-core-concepts)
3. [Part 3: Installation and Setup](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/01_Notes.md#part-3-installation-and-setup)
4. [Part 4: Basic MongoDB Shell Commands](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/01_Notes.md#part-4-basic-mongodb-shell-commands)
5. [Part 5: Query Operators](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/01_Notes.md#part-5-query-operators)
6. [Part 6: Indexing](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/01_Notes.md#part-6-indexing)
7. [Part 7: Aggregation Framework](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/01_Notes.md#part-7-aggregation-framework)
8. [Part 8: Data Modeling](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/01_Notes.md#part-8-data-modeling)
9. [Part 9: Mongoose (MongoDB with Node.js)](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/01_Notes.md#part-9-mongoose-mongodb-with-nodejs)
10. [Part 10: Using MongoDB in MERN Stack](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/01_Notes.md#part-10-using-mongodb-in-mern-stack)
11. [Part 11: Security and Best Practices](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/MongoDB/01_Notes.md#part-11-security-and-best-practices)


<br>

##  Part 1: Introduction to MongoDB

### What is MongoDB?

* **MongoDB** is a **NoSQL, document-oriented database**.
* It stores data in **JSON-like documents** (BSON - Binary JSON).
* Developed by MongoDB Inc, first released in 2009.
* Designed for **scalability, high availability, and performance**.

### Key Features

* **Schema-less**: Collections do not enforce document structure.
* **Document-based**: Data stored as key-value pairs in BSON documents.
* **Horizontal Scaling**: Supports sharding for large-scale applications.
* **High Performance**: Optimized for read/write operations.
* **Flexible Data Model**: Nested documents and arrays supported.

### Use Cases

* Real-time analytics
* Content management systems
* Mobile and IoT apps
* Catalogs and inventory management
* Logging and event storage

### MongoDB Database Structure

* **Database**: Container for collections.
* **Collection**: Similar to tables in SQL, but no enforced schema.
* **Document**: Core data unit, like a row in SQL but flexible in structure.

```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "age": 28,
  "skills": ["Node.js", "MongoDB"]
}
```

### Advantages of MongoDB

* Highly scalable and performant
* Easy to set up and use
* Ideal for agile development
* Schema flexibility
* Community and cloud support (MongoDB Atlas)

### When to Use MongoDB

* You require fast iterations and flexible schema design.
* Handling large volumes of unstructured or semi-structured data.
* Application needs rapid scaling.
* You want JSON-style document storage instead of complex SQL schemas.

<br>

---

<br>

## Part 2: MongoDB Core Concepts

### 1. Documents, Collections, and Databases

* **Database**: Highest-level container for data in MongoDB.
* **Collection**: A group of MongoDB documents, similar to a table in RDBMS.
* **Document**: A single record in a collection, stored in BSON format.

Example document:

```json
{
  "_id": "60a7c6f9b8e4",
  "name": "John",
  "email": "john@example.com",
  "age": 30,
  "address": {
    "city": "Mumbai",
    "zip": "400001"
  }
}
```

### 2. BSON vs JSON

* **JSON** (JavaScript Object Notation): Lightweight data-interchange format.
* **BSON** (Binary JSON): Binary-encoded serialization of JSON-like documents used by MongoDB.
* BSON supports more data types like `Date`, `int`, `long`, `decimal128`.

### 3. Schema-less Design

* MongoDB collections do not enforce any document structure.
* Documents in the same collection can have different fields.
* Offers flexibility but requires discipline to avoid data inconsistency.

### 4. ObjectId

* `_id` is a unique identifier automatically generated for each document.
* Default type is **ObjectId**, a 12-byte value consisting of:

  * 4-byte timestamp
  * 5-byte random value
  * 3-byte incrementing counter
* Can be overridden with custom unique values.

### 5. Embedded vs Referenced Documents

#### Embedded Documents

* Documents can contain nested documents (embedding).
* Useful when related data is frequently accessed together.

Example:

```json
{
  "title": "Post 1",
  "comments": [
    { "text": "Nice!", "user": "Alice" },
    { "text": "Thanks!", "user": "Bob" }
  ]
}
```

#### Referenced Documents

* Store references (\_id) to other documents.
* Helps in reducing document size and redundancy.
* Useful when embedding would cause document bloat or circular references.

Example:

```json
{
  "title": "Post 1",
  "comments": ["60a7...", "60a8..."]
}
```

### 6. Data Types in MongoDB

* String
* Number (Int32, Int64, Double, Decimal128)
* Boolean
* Date
* Array
* Object
* Null
* ObjectId
* Binary Data
* Regular Expression




<br>

---

<br>

## Part 3: Installation and Setup

### 1. Installing MongoDB Locally

#### For Windows

* Download from official site: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
* Install using the MSI installer.
* Add MongoDB to system PATH during setup.
* MongoDB server (`mongod`) and shell (`mongosh`) are included.

#### For macOS

* Install using Homebrew:

  ```bash
  brew tap mongodb/brew
  brew install mongodb-community
  ```
* Start MongoDB:

  ```bash
  brew services start mongodb-community
  ```

#### For Linux (Ubuntu)

* Use APT repository:

  ```bash
  sudo apt update
  sudo apt install -y mongodb
  sudo systemctl start mongodb
  sudo systemctl enable mongodb
  ```

### 2. MongoDB Compass (GUI)

* Visual interface to explore and manage databases.
* Download from: [https://www.mongodb.com/products/compass](https://www.mongodb.com/products/compass)
* Use Compass to:

  * Connect to local or remote MongoDB
  * Create databases and collections
  * View and edit documents

### 3. MongoDB Shell (mongosh)

* Command-line tool for interacting with MongoDB.
* Run:

  ```bash
  mongosh
  ```
* Use it to execute commands like:

  ```js
  show dbs
  use myDatabase
  db.myCollection.insertOne({ name: "Test" })
  ```

### 4. Using MongoDB Atlas (Cloud Database)

#### Steps to Set Up Atlas:

1. Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create an account and build a free cluster
3. Add IP whitelist: 0.0.0.0/0 (for development)
4. Create a database user with password
5. Connect to cluster:

   * Use **MongoDB Compass** or
   * Copy connection URI for use in backend code

Example URI:

```
mongodb+srv://username:password@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
```

### 5. Testing the Connection

* Use Compass or shell to test the connection:

  ```bash
  mongosh "mongodb+srv://..."
  ```
* On success, you should see the MongoDB shell prompt.




<br>

---

<br>

## Part 4: Basic MongoDB Shell Commands

### 1. Starting the Shell

```bash
mongosh
```

* Connects you to the default MongoDB instance.

### 2. Database Commands

* **List all databases**

  ```js
  show dbs
  ```
* **Switch to / Create a database**

  ```js
  use myDatabase
  ```
* **Display current database**

  ```js
  db
  ```

### 3. Collection Commands

* **List all collections in the current database**

  ```js
  show collections
  ```
* **Create a collection**

  ```js
  db.createCollection("users")
  ```

### 4. Insert Documents

* **Insert a single document**

  ```js
  db.users.insertOne({ name: "Alice", age: 25 })
  ```
* **Insert multiple documents**

  ```js
  db.users.insertMany([
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 }
  ])
  ```

### 5. Find Documents

* **Find all documents**

  ```js
  db.users.find()
  ```
* **Find with a filter**

  ```js
  db.users.find({ age: 25 })
  ```
* **Find with projection** (only include `name`)

  ```js
  db.users.find({}, { name: 1 })
  ```

### 6. Update Documents

* **Update one document**

  ```js
  db.users.updateOne(
    { name: "Alice" },
    { $set: { age: 26 } }
  )
  ```
* **Update multiple documents**

  ```js
  db.users.updateMany(
    { age: { $gt: 25 } },
    { $set: { status: "active" } }
  )
  ```

### 7. Delete Documents

* **Delete one document**

  ```js
  db.users.deleteOne({ name: "Charlie" })
  ```
* **Delete multiple documents**

  ```js
  db.users.deleteMany({ age: { $lt: 28 } })
  ```

### 8. Drop Collection / Database

* **Drop a collection**

  ```js
  db.users.drop()
  ```
* **Drop the current database**

  ```js
  db.dropDatabase()
  ```



<br>

---

<br>

## Part 5: Query Operators

MongoDB provides a wide range of **query operators** to filter documents. These operators are used inside `find`, `update`, and aggregation queries.

### 1. Comparison Operators

* `$eq`: Equal to
* `$ne`: Not equal to
* `$gt`: Greater than
* `$gte`: Greater than or equal to
* `$lt`: Less than
* `$lte`: Less than or equal to
* `$in`: Matches any value in an array
* `$nin`: Not in array

**Example:**

```js
// Find users older than 25
db.users.find({ age: { $gt: 25 } })

// Find users with age 25 or 30
db.users.find({ age: { $in: [25, 30] } })
```

### 2. Logical Operators

* `$and`: Matches documents that satisfy all conditions
* `$or`: Matches documents that satisfy at least one condition
* `$not`: Inverts the effect of a query expression
* `$nor`: Matches documents that fail all the conditions

**Example:**

```js
// Find users aged 25 AND named Alice
db.users.find({ $and: [{ age: 25 }, { name: "Alice" }] })

// Find users aged 25 OR named Bob
db.users.find({ $or: [{ age: 25 }, { name: "Bob" }] })
```

### 3. Element Operators

* `$exists`: Checks if a field exists
* `$type`: Matches documents where a field is of a specific BSON type

**Example:**

```js
// Find users with a phone field
db.users.find({ phone: { $exists: true } })

// Find documents where age is a number
db.users.find({ age: { $type: "number" } })
```

### 4. Evaluation Operators

* `$regex`: Regular expression match
* `$expr`: Use aggregation expressions in queries
* `$mod`: Modulo operation

**Example:**

```js
// Find users with names starting with A
db.users.find({ name: { $regex: /^A/ } })

// Find users with even ages
db.users.find({ age: { $mod: [2, 0] } })
```

### 5. Array Operators

* `$all`: Matches arrays that contain all specified elements
* `$elemMatch`: Matches documents with at least one array element that matches all the specified query criteria
* `$size`: Matches arrays with a specified number of elements

**Example:**

```js
// Find users with both skills
db.users.find({ skills: { $all: ["Node.js", "MongoDB"] } })

// Find users with exactly 3 skills
db.users.find({ skills: { $size: 3 } })
```

### 6. Sorting, Limiting, Skipping

* `sort()`: Sort result by a field
* `limit()`: Limit the number of documents
* `skip()`: Skip specified number of documents

**Example:**

```js
// Sort users by age descending
db.users.find().sort({ age: -1 })

// Skip first 2 users and limit to 5
db.users.find().skip(2).limit(5)
```



<br>

---

<br>

## Part 6: Indexing

### What is Indexing?

* Indexes are special data structures that improve the speed of query operations.
* Without an index, MongoDB performs a **collection scan**, checking every document.
* Indexes allow MongoDB to quickly locate data based on the indexed fields.

### Types of Indexes

#### 1. Single Field Index

* Created on a single field.

```js
// Create index on age field
db.users.createIndex({ age: 1 })  // 1 for ascending, -1 for descending
```

#### 2. Compound Index

* Index on multiple fields, order matters.

```js
// Create compound index on age and name
db.users.createIndex({ age: 1, name: -1 })
```

#### 3. Multikey Index

* Created automatically when indexing array fields.

```js
// Automatically handled by MongoDB
{ skills: ["Node.js", "React"] }
```

#### 4. Text Index

* Enables text search within string content.

```js
// Create text index on 'bio' field
db.users.createIndex({ bio: "text" })
```

```js
// Search using text
db.users.find({ $text: { $search: "developer" } })
```

#### 5. Unique Index

* Ensures all values in the indexed field are unique.

```js
// Email must be unique
db.users.createIndex({ email: 1 }, { unique: true })
```

### Viewing and Dropping Indexes

* **List indexes**:

```js
  db.users.getIndexes()
```

* **Drop an index**:

```js
  db.users.dropIndex("age_1")
```

### Index Use in Queries

* Use `explain()` to check how a query is executed:

```js
  db.users.find({ age: 30 }).explain("executionStats")
```

* Look for `IXSCAN` in the output to confirm index usage.

### Best Practices

* Index fields that are frequently used in query filters or sorting.
* Avoid indexing fields with high write frequency if not needed.
* Limit number of indexes to reduce overhead.



<br>

---

<br>

## Part 7: Aggregation Framework

### What is Aggregation?

* Aggregation operations process data records and return computed results.
* Useful for tasks like grouping, filtering, sorting, transforming, and computing aggregate values (e.g., sum, average).

### Aggregation Pipeline

* A framework that processes data through a sequence of **stages**.
* Each stage transforms the documents and passes the result to the next stage.

### Common Stages

#### 1. `$match`

* Filters documents (similar to `find`).

```js
{ $match: { status: "active" } }
```

#### 2. `$group`

* Groups documents by a field and performs accumulations.

```js
{ 
  $group: {
    _id: "$department",
    total: { $sum: 1 }
  }
}
```

#### 3. `$project`

* Reshapes documents (includes, excludes, or creates new fields).

```js
{ 
  $project: {
    name: 1,
    email: 1,
    isAdult: { $gt: ["$age", 18] }
  }
}
```

#### 4. `$sort`

* Sorts the documents.

```js
{ $sort: { age: -1 } }
```

#### 5. `$limit` and `$skip`

* Limits or skips a number of documents.

```js
{ $limit: 5 },
{ $skip: 10 }
```

#### 6. `$lookup`

* Performs a left outer join with another collection.

```js
{
  $lookup: {
    from: "orders",
    localField: "_id",
    foreignField: "userId",
    as: "userOrders"
  }
}
```

#### 7. `$unwind`

* Deconstructs an array field to output a document for each element.

```js
{ $unwind: "$skills" }
```

### Example: Total number of users per city

```js
  db.users.aggregate([
    { $group: { _id: "$city", totalUsers: { $sum: 1 } } },
    { $sort: { totalUsers: -1 } }
  ])
```

### Tips

* Use indexes before the `$match` stage.
* Minimize the number of documents early in the pipeline.
* Aggregation pipelines are powerful for reporting and analytics.



<br>

---

<br>

## Part 8: Data Modeling

### What is Data Modeling in MongoDB?

* Designing how data is stored, accessed, and related.
* Important for performance, consistency, and scalability.
* In MongoDB, data modeling is flexible due to its schema-less nature.

### Key Concepts

#### 1. Embedding vs Referencing

**Embedding**:

* Store related data inside a single document.
* Good for fast reads and when related data is used together.

Example:

```json
{
  "name": "Alice",
  "orders": [
    { "item": "Book", "price": 250 },
    { "item": "Pen", "price": 50 }
  ]
}
```

**Referencing**:

* Store related data in separate documents and use references.
* Good when data is large, reused, or updated independently.

Example:

```json
{
  "_id": 1,
  "name": "Alice"
}
```

```json
{
  "_id": 101,
  "userId": 1,
  "item": "Book",
  "price": 250
}
```

#### 2. One-to-One Relationship

* Use embedding or referencing based on access patterns.
* Example: user and profile.

#### 3. One-to-Many Relationship

* Embed if the “many” side is not large.
* Reference if documents grow too large or are queried separately.

#### 4. Many-to-Many Relationship

* Usually modeled using referencing and array of references.

### Design Tips

* Model data based on access patterns.
* Avoid deeply nested documents beyond 2-3 levels.
* Use schema validation to enforce consistency.
* Limit document size (max: 16MB per document).
* Consider read/write frequency and use indexes accordingly.

### Schema Validation (Optional)

* MongoDB supports JSON Schema for validation.

```js
  db.createCollection("users", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "email"],
        properties: {
          name: {
            bsonType: "string"
          },
          email: {
            bsonType: "string"
          }
        }
      }
    }
  })
```



<br>

---

<br>

## Part 9: Mongoose (MongoDB with Node.js)

### What is Mongoose?

* Mongoose is an **Object Data Modeling (ODM) library** for MongoDB and Node.js.
* Provides a schema-based solution to model your application data.
* Offers built-in type casting, validation, query building, middleware, and more.

### Installation

```bash
npm install mongoose
```

### Connecting to MongoDB

```js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myDatabase")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Connection error", err));
```

### Defining a Schema and Model

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  age: Number,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);
```

### CRUD Operations with Mongoose

#### Create

```js
const user = new User({ name: "Alice", email: "alice@example.com", age: 25 });
user.save();
```

#### Read

```js
User.find(); // all users
User.findOne({ name: "Alice" });
User.findById("60a7c6f9b8e4");
```

#### Update

```js
User.updateOne({ name: "Alice" }, { $set: { age: 26 } });
```

#### Delete

```js
User.deleteOne({ name: "Alice" });
```

### Schema Features

* **Validation**: required, min, max, enum, match
* **Default values**: set defaults for fields
* **Custom methods**: attach instance methods to schema
* **Middleware (Hooks)**: pre/post save, remove, etc.

### Example: Schema with Validation

```js
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, min: 0 },
  category: { type: String, enum: ["Books", "Electronics", "Clothing"] }
});
```



<br>

---

<br>

## Part 10: Using MongoDB in MERN Stack

### What is MERN?

* MERN stands for **MongoDB, Express.js, React, Node.js**.
* MongoDB serves as the database layer in a full-stack JavaScript application.

### Connecting MongoDB with Express (Backend)

#### 1. Setup

```bash
npm init -y
npm install express mongoose
```

#### 2. Create Express Server and Connect to MongoDB

```js
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/myApp")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(err));

app.listen(3000, () => console.log("Server running on port 3000"));
```

### Creating Models and Routes

#### User Model (models/User.js)

```js
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});
module.exports = mongoose.model("User", userSchema);
```

#### API Routes (routes/user.js)

```js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post("/", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

module.exports = router;
```

#### Use the Route in Main Server File

```js
const userRoutes = require("./routes/user");
app.use("/api/users", userRoutes);
```

### Frontend (React) Integration

#### 1. Fetch Data from Express API

```js
useEffect(() => {
  fetch("http://localhost:3000/api/users")
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);
```

#### 2. Post Data to MongoDB via Backend

```js
fetch("http://localhost:3000/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "New User", email: "user@example.com" })
})
.then(res => res.json())
.then(data => console.log(data));
```

### MongoDB Atlas in Production

* Replace local URI with Atlas URI in `mongoose.connect()`.
* Secure with `.env` file:

```env
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/myDb
```

### Tips for MERN Apps

* Always validate input on both frontend and backend.
* Use Mongoose models to enforce schema.
* Use environment variables for secrets and URIs.
* Handle errors and edge cases (e.g., failed DB connection).



<br>

---

<br>

## Part 11: Security and Best Practices

### 1. Authentication and Access Control

* **Enable Authentication** in MongoDB production environments.
* Use **username and password** for access.
* Use **MongoDB Atlas** to manage secure, cloud-hosted MongoDB instances.
* Use **IP Whitelisting** to allow only specific clients.

### 2. Environment Variables

* Store sensitive information like database URI in a `.env` file.
* Use `dotenv` package in Node.js:

```bash
npm install dotenv
```

```js
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI);
```

### 3. Input Validation and Sanitization

* Always validate incoming data.
* Use Mongoose schema validation.
* Sanitize data to prevent **NoSQL injection attacks**.
* Example: avoid allowing raw queries from user input.

### 4. Limit Data Exposure

* Use projection to return only necessary fields:

```js
User.find({}, { name: 1, email: 1 });
```

* Avoid returning passwords, internal IDs, or sensitive data.

### 5. Rate Limiting and Throttling

* Prevent abuse by limiting the number of requests.
* Use middleware like `express-rate-limit`:

```bash
npm install express-rate-limit
```

### 6. Backups and Replication

* Use regular backups to prevent data loss.
* Use MongoDB Replica Sets for high availability.
* Consider MongoDB Atlas backups and recovery options.

### 7. Use Indexes Wisely

* Avoid over-indexing (adds write overhead).
* Index frequently queried fields.
* Monitor query performance using `explain()`.

### 8. Versioning and Schema Evolution

* Plan for schema changes.
* Use optional fields and schema validation.
* Avoid breaking changes.

### 9. Secure API Access

* Use HTTPS in production.
* Use authentication (JWT, sessions) for routes interacting with the database.
* Always check user authorization before performing operations.

### 10. Logging and Monitoring

* Monitor errors and performance using tools like:

  * MongoDB Atlas Monitoring
  * Mongoose debug logs
  * External tools (e.g., PM2, Winston, New Relic)



<br>

---

<br>
