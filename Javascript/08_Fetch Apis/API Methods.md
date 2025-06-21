# 📡 Fetch API Methods in JavaScript

## 🚀 Introduction
The **Fetch API** provides a modern way to make HTTP requests in JavaScript. It is **promise-based** and supports different HTTP methods to interact with servers.

### 📌 Available Methods in Fetch API
| Method  | Description |
|---------|-------------|
| **GET**    | Retrieves data from the server |
| **POST**   | Sends new data to the server |
| **PUT**    | Updates existing data on the server |
| **DELETE** | Removes data from the server |
| **PATCH**  | Partially updates a resource |
| **HEAD**   | Retrieves response headers without a body |
| **OPTIONS**| Checks allowed methods for a resource |

---

## 1️⃣ GET Request - Retrieving Data
Fetches data from a server using `GET`.
```javascript
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log("Fetched Data:", data))
  .catch(error => console.log("Error:", error));
```
### ✅ Output:
```json
{
  "id": 1,
  "name": "Item 1"
}
```

---

## 2️⃣ POST Request - Sending Data
Sends new data to a server using `POST`.
```javascript
fetch("https://api.example.com/data", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "New Item" })
})
  .then(response => response.json())
  .then(data => console.log("New Item Added:", data))
  .catch(error => console.log("Error:", error));
```
### ✅ Output:
```json
{
  "id": 2,
  "name": "New Item",
  "message": "Item added successfully!"
}
```

---

## 3️⃣ PUT Request - Updating Data
Updates existing data on a server using `PUT`.
```javascript
fetch("https://api.example.com/data/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Updated Item" })
})
  .then(response => response.json())
  .then(data => console.log("Item Updated:", data))
  .catch(error => console.log("Error:", error));
```
### ✅ Output:
```json
{
  "id": 1,
  "name": "Updated Item",
  "message": "Item updated successfully!"
}
```

---

## 4️⃣ DELETE Request - Removing Data
Deletes data from a server using `DELETE`.
```javascript
fetch("https://api.example.com/data/1", {
  method: "DELETE"
})
  .then(response => response.json())
  .then(data => console.log("Item Deleted:", data))
  .catch(error => console.log("Error:", error));
```
### ✅ Output:
```json
{
  "id": 1,
  "message": "Item deleted successfully!"
}
```

---

## 5️⃣ PATCH Request - Partial Update
Partially updates data using `PATCH`.
```javascript
fetch("https://api.example.com/data/1", {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ price: 99.99 })
})
  .then(response => response.json())
  .then(data => console.log("Item Partially Updated:", data))
  .catch(error => console.log("Error:", error));
```
### ✅ Output:
```json
{
  "id": 1,
  "price": 99.99,
  "message": "Item updated successfully!"
}
```

---

## 6️⃣ HEAD Request - Getting Headers Only
Fetches response headers without body.
```javascript
fetch("https://api.example.com/data", { method: "HEAD" })
  .then(response => console.log("Headers:", response.headers))
  .catch(error => console.log("Error:", error));
```

---

## 7️⃣ OPTIONS Request - Checking Allowed Methods
Checks what methods are allowed for a resource.
```javascript
fetch("https://api.example.com/data", { method: "OPTIONS" })
  .then(response => console.log("Allowed Methods:", response.headers.get("Allow")))
  .catch(error => console.log("Error:", error));
```

---

## 🔥 Handling Errors in Fetch API

### ✅ Common Fetch Errors:
| Error Type | Description |
|------------|-------------|
| **Network Error** | No internet connection or server unreachable |
| **404 Not Found** | Requested resource does not exist |
| **500 Internal Server Error** | Server failed to process the request |
| **CORS Issue** | Request blocked due to Cross-Origin restrictions |

### 📌 Example: Handling Fetch Errors
```javascript
fetch("https://api.example.com/invalid-endpoint")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    return response.json();
  })
  .catch(error => console.log("Fetch Error:", error.message));
```
### ✅ Possible Output:
```
Fetch Error: HTTP Error! Status: 404
```

---

## 🎯 Conclusion
- The **Fetch API** supports multiple HTTP methods: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `HEAD`, and `OPTIONS`.

  ---
  # 📡 Fetch API Methods in JavaScript

## 🚀 Introduction
The Fetch API provides various methods to handle HTTP responses efficiently. Below are some key methods that allow us to process the response in different formats, work with headers, and check response status.

---

## 📌 1. `response.json()` - Parsing JSON Data
Converts the response body into a JavaScript object.

```javascript
fetch("https://api.example.com/data")
  .then(response => response.json()) // Convert response to JSON
  .then(data => console.log("Parsed JSON:", data))
  .catch(error => console.log("Error parsing JSON:", error));
```

### ✅ Expected Output:
```json
{
  "id": 1,
  "name": "John Doe"
}
```

---

## 📌 2. `response.text()` - Getting Response as Text
Useful for fetching HTML, plain text, or XML data.

```javascript
fetch("https://api.example.com/page")
  .then(response => response.text()) // Convert response to text
  .then(data => console.log("Response Text:", data))
  .catch(error => console.log("Error fetching text:", error));
```

### ✅ Expected Output:
```
<html>
  <body>
    <h1>Welcome</h1>
  </body>
</html>
```

---

## 📌 3. `response.blob()` - Handling Binary Data (Images, PDFs)
Useful for downloading images, videos, or files.

```javascript
fetch("https://api.example.com/image.jpg")
  .then(response => response.blob())
  .then(blob => {
    let imgUrl = URL.createObjectURL(blob);
    console.log("Image URL:", imgUrl);
  })
  .catch(error => console.log("Error fetching blob:", error));
```

---

## 📌 4. `response.headers` - Accessing Headers
Retrieves response headers.

```javascript
fetch("https://api.example.com/data")
  .then(response => {
    console.log("Content-Type:", response.headers.get("Content-Type"));
  })
  .catch(error => console.log("Error fetching headers:", error));
```

### ✅ Expected Output:
```
Content-Type: application/json
```

---

## 📌 5. `response.status` & `response.ok` - Checking Response Status
Used to verify if a request was successful.

```javascript
fetch("https://api.example.com/data")
  .then(response => {
    if (response.ok) {
      console.log("Success! Status Code:", response.status);
    } else {
      console.log("Failed! Status Code:", response.status);
    }
  })
  .catch(error => console.log("Network Error:", error));
```

### ✅ Possible Output:
```
Success! Status Code: 200
```
OR
```
Failed! Status Code: 404
```

---

## 📌 6. `response.arrayBuffer()` - Handling Low-Level Binary Data
Useful for working with audio, video, and other binary formats.

```javascript
fetch("https://api.example.com/audio.mp3")
  .then(response => response.arrayBuffer())
  .then(buffer => console.log("ArrayBuffer Length:", buffer.byteLength))
  .catch(error => console.log("Error fetching array buffer:", error));
```

---

## 📌 7. `response.formData()` - Handling Form Data
Used when submitting forms via Fetch.

```javascript
fetch("https://api.example.com/upload", {
  method: "POST",
  body: new FormData(document.querySelector("form"))
})
  .then(response => response.json())
  .then(data => console.log("Form Submitted:", data))
  .catch(error => console.log("Error submitting form:", error));
```

---

## 🎯 Conclusion
- **`response.json()`** - Converts response to JSON
- **`response.text()`** - Retrieves response as plain text
- **`response.blob()`** - Handles images and files
- **`response.headers.get()`** - Accesses headers
- **`response.status` & `response.ok`** - Checks response status
- **`response.arrayBuffer()`** - Works with raw binary data
- **`response.formData()`** - Handles form submissions



- It is **promise-based**, working well with `.then()` and `async/await`.
- Error handling is essential for **robust API requests**.

