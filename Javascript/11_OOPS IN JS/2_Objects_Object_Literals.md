# 🎯 Lesson 2: Objects & Object Literals

## 📌 Introduction
In JavaScript, objects are **key-value pairs** that store related data and functionality together. They are the **foundation of OOP** and are widely used in full-stack development for handling structured data.

We will continue our **E-Commerce Store Example** from Lesson 1 to understand objects in depth.

---

## 🏪 Defining an Object (Object Literals)
An **object literal** is the simplest way to create an object in JavaScript.

```javascript
const product = {
  name: "Wireless Mouse",
  price: 1200,
  category: "Electronics",
  inStock: true,
};
```

Each property (`name`, `price`, `category`, `inStock`) consists of a **key-value pair**.

---

## 🔹 Accessing Object Properties
You can access properties using **dot notation** or **bracket notation**.

```javascript
console.log(product.name);      // "Wireless Mouse"
console.log(product["price"]);  // 1200
```

🔹 **Use dot notation** when property names are known.
🔹 **Use bracket notation** when property names are dynamic or contain special characters.

Example of dynamic access:

```javascript
let key = "category";
console.log(product[key]); // "Electronics"
```

---

## 🔹 Adding, Updating, and Deleting Properties
You can **modify objects** by adding, updating, or deleting properties.

```javascript
// Adding a new property
product.brand = "Logitech";

// Updating an existing property
product.price = 999;

// Deleting a property
delete product.inStock;
```

🔹 Useful when handling **real-time data updates** in **e-commerce platforms**.

---

## 🔹 Nested Objects
Objects can have **nested objects** for better structuring.

```javascript
const product = {
  name: "Wireless Mouse",
  price: 1200,
  specifications: {
    weight: "150g",
    battery: "AA",
  },
};

console.log(product.specifications.battery); // "AA"
```

💡 Used in **API responses** where complex data is stored hierarchically.

---

## 🔹 Looping Over Object Properties
Use the `for...in` loop to iterate over object properties.

```javascript
for (let key in product) {
  console.log(`${key}: ${product[key]}`);
}
```

🔹 Useful for **displaying product details dynamically** in a frontend UI.

---

## 🔹 Object Methods (Functions Inside Objects)
Objects can have **methods** to perform actions.

```javascript
const product = {
  name: "Wireless Mouse",
  price: 1200,
  displayInfo: function() {
    return `${this.name} costs Rs. ${this.price}`;
  }
};

console.log(product.displayInfo()); // "Wireless Mouse costs Rs. 1200"
```

🔹 Used for **business logic**, such as calculating discounts, tax, etc.

---

## 🛠 Applications in Full-Stack Development
✅ **Frontend**: Handling UI data (React/Next.js states, props)
✅ **Backend**: API responses (Express.js, Node.js)
✅ **Database Operations**: Storing structured data (MongoDB, PostgreSQL)
✅ **Authentication**: User sessions & tokens (JWT, OAuth)

---

## 🎯 Conclusion
Objects are **fundamental in JavaScript** and essential for structuring data in **full-stack applications**. Mastering them will make **handling APIs, databases, and UI components much easier**.

🚀 Next: [Lesson 3 - The `this` Keyword](./3_This_Keyword.md)

