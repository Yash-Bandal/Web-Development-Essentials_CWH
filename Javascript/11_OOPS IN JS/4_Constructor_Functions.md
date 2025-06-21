# 📌 Lesson 4: Constructor Functions in JavaScript

## 🚀 Introduction
Constructor functions in JavaScript allow us to create multiple objects with similar properties and methods efficiently. They are the foundation of object creation before ES6 introduced classes.

---

## 🔹 What is a Constructor Function?
A **constructor function** is a special function used to create and initialize objects.

- It follows naming conventions with a **capitalized** first letter (e.g., `Person`, `Car`).
- It uses the `this` keyword to assign properties to newly created objects.
- It is invoked using the `new` keyword.

### ✅ Example
```javascript
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// Creating objects using the constructor
const car1 = new Car("Tesla", "Model S", 2023);
const car2 = new Car("Ford", "Mustang", 2022);

console.log(car1.brand); // Tesla
console.log(car2.year);  // 2022
```

---

## 🔹 Adding Methods to Constructor Functions
We can add methods inside the constructor function to perform specific actions.

### ✅ Example
```javascript
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    
    this.getDetails = function() {
        return `${this.brand} ${this.model} (${this.year})`;
    };
}

const car1 = new Car("Tesla", "Model S", 2023);
console.log(car1.getDetails()); // Tesla Model S (2023)
```

---

## 🔹 Prototype-based Methods (Efficient Approach)
Instead of defining methods inside the constructor, we can add them to the **prototype** of the constructor function. This improves memory efficiency as methods are shared among all instances.

### ✅ Example
```javascript
Car.prototype.getDetails = function() {
    return `${this.brand} ${this.model} (${this.year})`;
};

const car2 = new Car("Ford", "Mustang", 2022);
console.log(car2.getDetails()); // Ford Mustang (2022)
```

🔹 **Why use Prototypes?**
- Methods inside constructors are created for each instance → **Memory Inefficient**
- Methods inside prototypes are shared among all instances → **Memory Efficient**

---

## 🔹 The `instanceof` Operator
We can check whether an object is an instance of a constructor using `instanceof`.

### ✅ Example
```javascript
console.log(car1 instanceof Car); // true
console.log({} instanceof Car);  // false
```

---

## 📌 Applications in Full Stack Development
1. **Backend (Node.js)** → Defining models for database objects.
2. **Frontend (React/Vanilla JS)** → Creating reusable objects like UI components.
3. **API Development** → Defining request-response data structures.

---

## 🎯 Summary
- Constructor functions create multiple objects with similar properties.
- Methods can be defined inside constructors (less efficient) or in prototypes (more efficient).
- The `new` keyword is required to invoke constructor functions.
- `instanceof` checks if an object is an instance of a constructor.

🔹 Next: **Lesson 5 - Prototypes & Prototype Inheritance** 🚀

