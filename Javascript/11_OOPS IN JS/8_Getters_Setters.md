# 🏪 Lesson 8: Getters & Setters in JavaScript

## 📌 Introduction
In Object-Oriented Programming, **Getters and Setters** allow us to control access to object properties. They provide a clean way to encapsulate and manipulate data, ensuring validation and security before accessing or modifying properties.

In our **E-commerce Store Example**, we will use **getters** and **setters** to manage product pricing securely.

---

## 🎯 Why Use Getters & Setters?
1. **Encapsulation** – Control how data is accessed and modified.
2. **Validation** – Prevent invalid values from being assigned.
3. **Computed Properties** – Calculate values dynamically.
4. **Security** – Restrict direct property access.

---

## 🛒 Implementing Getters & Setters in an E-commerce Store

Let's take the example of a **Product class** in our e-commerce store. We need to ensure that:
- The **price** is always a positive number.
- We can **retrieve the formatted price** dynamically.

```javascript
class Product {
    constructor(name, price) {
        this.name = name;
        this._price = price; // Using _price to prevent direct modification
    }

    // Getter for price
    get price() {
        return `$${this._price.toFixed(2)}`; // Formats price
    }

    // Setter for price with validation
    set price(value) {
        if (value < 0) {
            console.log("Price cannot be negative!");
        } else {
            this._price = value;
        }
    }
}

// Using the class
const laptop = new Product("Gaming Laptop", 1500);
console.log(laptop.price); // Output: "$1500.00"

laptop.price = -500; // Invalid update
console.log(laptop.price); // Output: "$1500.00" (unchanged)

laptop.price = 2000; // Valid update
console.log(laptop.price); // Output: "$2000.00"
```

---

## 📌 Application in Web Development
### 🛍️ How Getters & Setters Help in E-commerce?
1. **Product Price Validation** – Prevent incorrect price updates.
2. **Discount Calculations** – Compute discounted prices dynamically.
3. **User Profile Management** – Securely update user information.
4. **Shopping Cart Total** – Calculate total dynamically without manual updates.

---

## 🔥 Example: Applying Discounts Dynamically
Let's modify our `Product` class to apply discounts using a **getter**:

```javascript
class Product {
    constructor(name, price, discount) {
        this.name = name;
        this._price = price;
        this.discount = discount; // Discount in percentage
    }

    // Getter for final price after discount
    get finalPrice() {
        return `$${(this._price * (1 - this.discount / 100)).toFixed(2)}`;
    }
}

const smartphone = new Product("Smartphone", 1000, 10);
console.log(smartphone.finalPrice); // Output: "$900.00" (after 10% discount)
```

---

## 🎯 Summary
✅ **Getters** help in retrieving **computed properties** easily.
✅ **Setters** prevent **invalid updates** and add validation.
✅ Essential for **secure and scalable** web applications.

🔹 Next, we will explore **Static Methods & Properties** in Lesson 9. 🚀

