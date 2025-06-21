# What is Web API?
API stands for Application Programming Interface.
A Web API is an application programming interface for the Web.
- Web Browser API
- Third Party API



## Web Storage API
The Web Storage API is a simple syntax for storing and retrieving data in the browser. It is very easy to use:
### The localStorage Object
The localStorage.setItem() method stores a data item in a storage.<br>
It takes a name and a value as parameters:
The localStorage.getItem() method retrieves a data item from the storage.<br>
It takes a name as parameter:
```html
localStorage.setItem("name", "Persistant store"); 
localStorage.getItem("name");
```

### The sessionStorage Object
The sessionStorage object is identical to the localStorage object.
The difference is that the sessionStorage object stores data for one session.
The data is deleted when the browser is closed.
setL getl
```html
sessionStorage.setItem("name", "Cache Store ");  
sessionStorage.getItem("name");
```
---

## Forms and History APIS
## Web Workers API
A web worker is a JavaScript running in the background, without affecting the performance of the page.

---

## JavaScript Fetch API - Heart API
Fetch API is a modern JavaScript feature that allows you to request resources from a server and handle responses asynchronously. It is a replacement for the older XMLHttpRequest method.
It is promise-based, meaning it works with .then() and async/await.
It retrieves data from a server using GET, POST, PUT, DELETE, etc.

# 📡 Fetch API in JavaScript

## 🚀 Introduction
The **Fetch API** is a modern way to make HTTP requests in JavaScript. It is **promise-based**, meaning it supports `.then()` and `async/await` for handling asynchronous operations.

- ✅ Used for **fetching data from servers**
- ✅ Works with **GET, POST, PUT, DELETE** requests
- ✅ Returns **Promises** and supports **error handling**

---

## 📌 1. Making a Simple GET Request

### 🔹 Fetching data from an API
```javascript
fetch("https://api.example.com/ingredients")
  .then(response => response.json()) // Convert response to JSON
  .then(data => console.log(data)) // Output the ingredient list
  .catch(error => console.log("Error fetching ingredients:", error));
```

### ✅ Expected Output:
```json
[
  { "id": 1, "name": "Flour" },
  { "id": 2, "name": "Sugar" },
  { "id": 3, "name": "Eggs" }
]
```

---

## 📌 2. Sending Data with a POST Request

### 🔹 Adding a new ingredient
```javascript
fetch("https://api.example.com/ingredients", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ name: "Vanilla Extract" })
})
  .then(response => response.json())
  .then(data => console.log("New Ingredient Added:", data))
  .catch(error => console.log("Error adding ingredient:", error));
```

### ✅ Expected Output:
```json
{
  "id": 4,
  "name": "Vanilla Extract",
  "message": "Ingredient added successfully!"
}
```

---

## 📌 3. Updating Data with a PUT Request

### 🔹 Updating an ingredient
```javascript
fetch("https://api.example.com/ingredients/2", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ name: "Brown Sugar" })
})
  .then(response => response.json())
  .then(data => console.log("Ingredient Updated:", data))
  .catch(error => console.log("Error updating ingredient:", error));
```

### ✅ Expected Output:
```json
{
  "id": 2,
  "name": "Brown Sugar",
  "message": "Ingredient updated successfully!"
}
```

---

## 📌 4. Deleting Data with a DELETE Request

### 🔹 Removing an ingredient
```javascript
fetch("https://api.example.com/ingredients/3", {
  method: "DELETE"
})
  .then(response => response.json())
  .then(data => console.log("Ingredient Removed:", data))
  .catch(error => console.log("Error deleting ingredient:", error));
```

### ✅ Expected Output:
```json
{
  "id": 3,
  "message": "Ingredient deleted successfully!"
}
```

---

## 📌 5. Using Async/Await for Fetch Requests

### 🔹 Fetching data in an elegant way
```javascript
async function fetchIngredients() {
  try {
    let response = await fetch("https://api.example.com/ingredients");
    let data = await response.json();
    console.log("Ingredients List:", data);
  } catch (error) {
    console.log("Error fetching ingredients:", error);
  }
}

fetchIngredients();
```

✅ **Why use `async/await`?**
- Clean and readable syntax
- No need to chain `.then()`
- Error handling with `try...catch`

---

## 📌 6. Handling Errors in Fetch API

### 🔹 Handling Server Errors (404, 500)
```javascript
fetch("https://api.example.com/ingredients/999")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    return response.json();
  })
  .catch(error => console.log("Error:", error.message));
```

### ✅ Possible Output:
```
Error: HTTP Error! Status: 404
```

---

## 📌 Summary Table

| Action | Method | Purpose | Example |
|--------|--------|---------|---------|
| **Get ingredients** | `GET` | Retrieve data | `fetch(url)` |
| **Add ingredient** | `POST` | Send new data | `fetch(url, {method: "POST"})` |
| **Update ingredient** | `PUT` | Replace existing data | `fetch(url, {method: "PUT"})` |
| **Delete ingredient** | `DELETE` | Remove data | `fetch(url, {method: "DELETE"})` |

---

## 🎯 Conclusion
- Fetch API is used to **communicate with servers**.
- Supports `GET`, `POST`, `PUT`, `DELETE` requests.
- Works well with **promises and async/await**.
- Handles **error management properly**.

🚀 **Now you’re ready to use Fetch API in real-world projects!** 🎉
