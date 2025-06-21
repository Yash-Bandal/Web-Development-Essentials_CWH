# 🎯 Lesson 10: Encapsulation & Private Properties in JavaScript

## 🔹 What is Encapsulation?
Encapsulation is an **OOP principle** that restricts direct access to some of an object's properties and methods. It helps in **data hiding** and **protecting** internal implementation details.

### ✅ Benefits of Encapsulation
- Prevents accidental modification of critical data
- Ensures better code maintainability
- Helps in implementing security constraints

---

## 🔹 Public vs. Private Properties in JavaScript
In JavaScript, object properties are **public** by default, meaning they can be accessed from outside the object. However, ES6 introduced **private properties** using the `#` symbol.

### ✨ Example: Public vs. Private Properties in an E-Commerce App
```javascript
class Product {
    #discount; // Private property
    
    constructor(name, price, discount) {
        this.name = name;  // Public property
        this.price = price; // Public property
        this.#discount = discount; // Private property
    }
    
    // Public method to calculate final price
    getFinalPrice() {
        return this.price - (this.price * this.#discount / 100);
    }
}

const laptop = new Product("Gaming Laptop", 1500, 10);
console.log(laptop.name);  // ✅ Accessible
console.log(laptop.price); // ✅ Accessible
console.log(laptop.#discount); // ❌ Error! Private property
console.log(laptop.getFinalPrice()); // ✅ Returns final price
```

---

## 🔹 Using Getters & Setters for Encapsulation
To allow **controlled access** to private properties, we use **getter and setter methods**.

### ✨ Example: Secure Access to Private Properties
```javascript
class Product {
    #discount;
    constructor(name, price, discount) {
        this.name = name;
        this.price = price;
        this.#discount = discount;
    }
    
    get discount() { // Getter to access private property
        return `${this.#discount}% discount available!`;
    }
    
    set discount(value) { // Setter with validation
        if (value >= 0 && value <= 50) {
            this.#discount = value;
        } else {
            console.log("Invalid discount value!");
        }
    }
}

const phone = new Product("Smartphone", 800, 15);
console.log(phone.discount); // ✅ "15% discount available!"
phone.discount = 20; // ✅ Updates discount
phone.discount = 60; // ❌ Invalid discount value!
```

---

## 🔹 Encapsulation in Full-Stack Development
### **Backend (Node.js)**
- Protecting database credentials
- Restricting access to sensitive API endpoints

### **Frontend (React/Next.js)**
- Keeping sensitive UI logic private
- Preventing direct manipulation of component state

---

## 🎯 **Summary**
✅ Encapsulation **hides** data to prevent unauthorized access.  
✅ Private properties in JS are defined using `#`.  
✅ Getters & Setters allow controlled data access.  
✅ Used in **full-stack** development to improve security.  

---

🔹 **Next Lesson:** [Lesson 11 - Polymorphism](./11_Polymorphism.md) 🚀

