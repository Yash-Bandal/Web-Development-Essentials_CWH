# Lesson 11: Polymorphism in JavaScript

## 📌 Introduction to Polymorphism
Polymorphism is a key concept in Object-Oriented Programming (OOP) that allows different classes to have methods with the same name but different behaviors. In JavaScript, polymorphism is achieved through **method overriding** and **method overloading** (though true overloading is not natively supported in JS).

### 🎯 Why is Polymorphism Important in Full Stack Development?
- Helps in writing more **scalable and maintainable** code.
- Reduces code duplication by allowing **multiple behaviors** for the same method.
- Enables a **flexible architecture** where different objects can be treated uniformly.

---

## 📌 Method Overriding in JavaScript
Method overriding occurs when a subclass provides a specific implementation for a method already defined in its superclass. The overridden method in the child class **replaces** the parent class method when called on an instance of the child class.

### 🛒 Example: Polymorphism in an E-Commerce Platform
In our **E-Commerce system**, we want different types of users (`Customer`, `Admin`, and `Guest`) to have a `checkout()` method, but each with a different behavior.

```javascript
// Parent Class
class User {
  constructor(name) {
    this.name = name;
  }
  
  checkout() {
    console.log(`${this.name} is checking out as a standard user.`);
  }
}

// Subclass 1: Customer (Overriding checkout method)
class Customer extends User {
  checkout() {
    console.log(`${this.name} is checking out with loyalty points applied.`);
  }
}

// Subclass 2: Admin (Overriding checkout method)
class Admin extends User {
  checkout() {
    console.log(`${this.name} is checking out with an admin discount.`);
  }
}

// Subclass 3: Guest (Overriding checkout method)
class Guest extends User {
  checkout() {
    console.log(`Guest users need to sign up before checking out.`);
  }
}

// Creating instances and calling checkout
let user1 = new Customer("Alice");
let user2 = new Admin("Bob");
let user3 = new Guest("Guest User");

user1.checkout(); // Alice is checking out with loyalty points applied.
user2.checkout(); // Bob is checking out with an admin discount.
user3.checkout(); // Guest users need to sign up before checking out.
```

### ✅ Explanation
- The `checkout()` method in the `User` class provides a **default behavior**.
- The `Customer`, `Admin`, and `Guest` classes **override** this method with their own specific behaviors.
- Now, calling `checkout()` on different objects results in different outputs, even though the method name is the same.

---

## 📌 Polymorphism with Function Parameters
We can also achieve polymorphism by using **different data types as parameters** in the same function.

### 🎯 Example: Handling Different Payment Methods in Checkout
In an E-Commerce system, users may pay using a **Credit Card**, **PayPal**, or **Cryptocurrency**. The `processPayment()` method should handle all these payment types dynamically.

```javascript
class Payment {
  processPayment(amount) {
    console.log(`Processing payment of $${amount}.`);
  }
}

class CreditCardPayment extends Payment {
  processPayment(amount) {
    console.log(`Processing credit card payment of $${amount}.`);
  }
}

class PayPalPayment extends Payment {
  processPayment(amount) {
    console.log(`Processing PayPal payment of $${amount}.`);
  }
}

class CryptoPayment extends Payment {
  processPayment(amount) {
    console.log(`Processing cryptocurrency payment of $${amount}.`);
  }
}

// Function to process any type of payment
function makePayment(paymentMethod, amount) {
  paymentMethod.processPayment(amount);
}

// Usage
let creditCard = new CreditCardPayment();
let paypal = new PayPalPayment();
let crypto = new CryptoPayment();

makePayment(creditCard, 100); // Processing credit card payment of $100.
makePayment(paypal, 50);      // Processing PayPal payment of $50.
makePayment(crypto, 200);     // Processing cryptocurrency payment of $200.
```

### ✅ Explanation
- The `processPayment()` method is overridden in different subclasses to provide **custom behaviors**.
- The `makePayment()` function works with **any payment method** thanks to polymorphism.
- This allows our E-Commerce system to **easily expand** and support new payment methods.

---

## 📌 Summary
- **Polymorphism** allows different classes to define **the same method name** but with **different implementations**.
- **Method Overriding** is the primary way to achieve polymorphism in JavaScript.
- Helps in making **flexible, scalable, and maintainable** code for full-stack applications.
- Used in scenarios like **checkout variations**, **payment processing**, and **user role behaviors**.

🚀 **Next Lesson:** [Lesson 12 - Abstraction in JavaScript](./12_Abstraction.md)

