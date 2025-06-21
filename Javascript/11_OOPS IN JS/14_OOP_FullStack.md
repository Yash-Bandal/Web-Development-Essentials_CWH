# 🎯 Lesson 14: OOP in Full Stack Development

Object-Oriented Programming (OOP) is widely used in full-stack JavaScript development. Both **backend (Node.js)** and **frontend (React/Next.js)** frameworks leverage OOP principles to manage complex applications efficiently.

---
## 🚀 1. OOP in Node.js (Backend)

### ✅ Using Classes in Node.js
In **backend development**, classes help manage business logic, handle database operations, and define models in frameworks like **Express.js** and **NestJS**.

📌 **Example: Product Management in an E-commerce API**

```javascript
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    getProductDetails() {
        return `${this.name} - $${this.price} (${this.category})`;
    }
}

// Example Usage
const laptop = new Product("Laptop", 1200, "Electronics");
console.log(laptop.getProductDetails());
```

### ✅ OOP in Express.js
We use classes for **controllers, services, and middleware** in Express.js applications.

📌 **Example: Express.js Service Class**
```javascript
class ProductService {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getAllProducts() {
        return this.products;
    }
}

const productService = new ProductService();
productService.addProduct(new Product("Phone", 800, "Electronics"));
console.log(productService.getAllProducts());
```

---
## 🎨 2. OOP in React/Next.js (Frontend)

### ✅ React Class Components (Legacy but Important)

Although React promotes **functional components with hooks**, **class components** are still used in large applications.

📌 **Example: Product Component in React**
```javascript
import React, { Component } from "react";

class ProductCard extends Component {
    render() {
        return (
            <div className="product-card">
                <h2>{this.props.name}</h2>
                <p>Price: ${this.props.price}</p>
                <p>Category: {this.props.category}</p>
            </div>
        );
    }
}

export default ProductCard;
```

### ✅ OOP with Functional Components (React Hooks + Classes)
While hooks replaced many class-based patterns, OOP can still be leveraged in **custom hooks and state management**.

📌 **Example: Using a Class in a Functional Component**
```javascript
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }
}

function CartComponent() {
    const cart = new Cart();
    cart.addItem({ name: "Headphones", price: 150 });
    return (
        <div>
            <h2>Shopping Cart</h2>
            <p>Items: {JSON.stringify(cart.getItems())}</p>
        </div>
    );
}

export default CartComponent;
```

---
## 🛢️ 3. OOP with Databases (MongoDB & PostgreSQL)

### ✅ OOP in MongoDB with Mongoose
Mongoose allows us to define **models (classes)** that interact with a MongoDB database.

📌 **Example: Product Model in Mongoose**
```javascript
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
```

### ✅ OOP in PostgreSQL with Sequelize
Sequelize is an ORM for SQL databases like **PostgreSQL** and follows an **OOP-based model structure**.

📌 **Example: Product Model in Sequelize**
```javascript
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Product = sequelize.define("Product", {
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Product;
```

---
## 🎯 Conclusion
✅ **Node.js:** OOP is used for structuring backend logic, services, and APIs.
✅ **React/Next.js:** OOP patterns help in managing UI components and global state.
✅ **Databases:** ORM libraries like Mongoose (MongoDB) and Sequelize (PostgreSQL) use OOP models for data handling.

**OOP provides a scalable and maintainable approach for full-stack JavaScript development!** 🚀

