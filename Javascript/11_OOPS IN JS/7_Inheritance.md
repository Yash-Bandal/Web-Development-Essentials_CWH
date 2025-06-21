# Lesson 7: Inheritance in ES6 Classes

## 🔥 Introduction
Inheritance is a key concept in object-oriented programming (OOP) that allows a class (child) to inherit properties and methods from another class (parent). In JavaScript, **ES6 classes** make implementing inheritance cleaner and more intuitive.

---

## 📌 Why Use Inheritance?
1. **Code Reusability** - Avoids duplicate code by reusing parent class properties and methods.
2. **Extensibility** - Easily extend existing functionalities without modifying the parent class.
3. **Maintainability** - Keeps the code structured and easy to manage.

---

## 🎯 Defining a Parent Class
A **parent class** (also called a base or super class) defines common properties and methods that can be shared by multiple child classes.

```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  getDetails() {
    return `${this.name} (${this.email})`;
  }
}
```

Here, `User` is the parent class with a constructor and a method `getDetails()`.

---

## 🏗️ Creating a Child Class using `extends`
To create a child class that inherits from a parent class, we use the `extends` keyword.

```javascript
class Admin extends User {
  constructor(name, email, role) {
    super(name, email); // Calls the parent class constructor
    this.role = role;
  }
  
  getAdminInfo() {
    return `${this.name} is an ${this.role}`;
  }
}
```
Here:
- `Admin` extends `User`, meaning it inherits properties (`name`, `email`) and methods (`getDetails()`).
- The `super(name, email)` calls the parent class constructor.
- We add a new property `role` and a method `getAdminInfo()` specific to `Admin`.

---

## 🔥 Using the Child Class
```javascript
const admin1 = new Admin("Alice", "alice@example.com", "Super Admin");
console.log(admin1.getDetails()); // Alice (alice@example.com)
console.log(admin1.getAdminInfo()); // Alice is an Super Admin
```

Since `Admin` extends `User`, it can access `getDetails()` from `User` while also having its own `getAdminInfo()` method.

---

## 🎯 Using the `super` Keyword
The `super` keyword is used to call **parent class methods** inside a child class.

### ✅ Overriding Methods using `super`
If a child class needs to modify a parent method, we override it:
```javascript
class Customer extends User {
  constructor(name, email, membership) {
    super(name, email);
    this.membership = membership;
  }
  
  getDetails() {
    return `${super.getDetails()} - Membership: ${this.membership}`;
  }
}
```

### ✅ Example Usage
```javascript
const customer1 = new Customer("Bob", "bob@example.com", "Gold");
console.log(customer1.getDetails()); // Bob (bob@example.com) - Membership: Gold
```
Here:
- `super.getDetails()` calls the parent `getDetails()` method and **extends** its output.

---

## 🌟 Applications in Full Stack Development
1. **User Authentication Systems** - Common user classes (`User`, `Admin`, `Customer`) with shared properties.
2. **E-commerce Applications** - Different product categories (`Electronics`, `Clothing`, `Books`) extending a base `Product` class.
3. **MVC Architecture** - Model classes inherit from a base model with shared database methods.

---

## 🔥 Summary
✅ `extends` allows a class to inherit from another class.
✅ `super` calls the parent constructor and methods.
✅ Overriding methods lets child classes modify inherited behavior.
✅ Used in real-world apps like **user management, e-commerce, and MVC frameworks**.

🚀 **Next Lesson: Method Overriding and More Advanced OOP Concepts!**

