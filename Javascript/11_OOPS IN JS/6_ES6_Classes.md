# 📌 Lesson 6 - ES6 Classes

## 🎯 Introduction
With the introduction of **ES6 (ECMAScript 2015)**, JavaScript provided a more structured way to create objects using the `class` keyword. **ES6 Classes** are a syntactic sugar over JavaScript's prototype-based inheritance, making OOP concepts more readable and maintainable.

## 📖 Topics Covered
- What are ES6 Classes?
- Class Syntax
- Constructor Method
- Class Methods & Properties
- Applications in Full Stack Development

---

## 🔹 What are ES6 Classes?
In JavaScript, classes are **templates for creating objects**. They provide a structured way to define objects, properties, and methods.

**Example:**
```js
// Defining a class
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

// Creating an instance
const user1 = new User("Alice", "alice@example.com");
console.log(user1);
```

---

## 🔹 Class Syntax
The basic syntax for defining a class:
```js
class ClassName {
    constructor(parameters) {
        // Initialize object properties
    }
    methodName() {
        // Define method functionality
    }
}
```

**Example:**
```js
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayProduct() {
        return `Product: ${this.name}, Price: $${this.price}`;
    }
}

const laptop = new Product("MacBook", 1500);
console.log(laptop.displayProduct());
```

---

## 🔹 Constructor Method
The `constructor()` method is automatically called when a new object is created using the `new` keyword.

**Example:**
```js
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}

const car1 = new Car("Tesla", "Model X");
console.log(car1.brand); // Output: Tesla
```

---

## 🔹 Class Methods & Properties
### 📌 Instance Methods
Methods defined inside a class work on individual instances.
```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name}.`;
    }
}
const p1 = new Person("John", 30);
console.log(p1.greet());
```

### 📌 Class Properties (Public & Private)
```js
class Employee {
    #salary; // Private Property
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.#salary = salary;
    }
    getSalary() {
        return `Salary is confidential`;
    }
}
const emp = new Employee("Bob", "Manager", 70000);
console.log(emp.getSalary());
// console.log(emp.#salary); // ❌ Error: Private property
```

---

## 🏗 Applications in Full Stack Development
1️⃣ **Backend (Node.js)**: Organizing models in **MVC architecture** (e.g., User, Product models in Express.js).
2️⃣ **Frontend (React/Next.js)**: Managing **stateful objects** in UI components.
3️⃣ **Database Models (MongoDB/PostgreSQL)**: Creating structured object representations before database operations.

**Example (Express.js Model Representation):**
```js
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    save() {
        console.log(`Saving user: ${this.name}`);
    }
}

const newUser = new User("Alice", "alice@example.com", "securepass");
newUser.save();
```

---

## ✅ Summary
✔ **ES6 Classes** simplify object creation and structure.

✔ **Constructor Methods** initialize properties.

✔ **Instance Methods & Properties** define behavior.

✔ **Useful in Full-Stack Development** for managing data models.

🚀 **Next Lesson: Inheritance in ES6 Classes** 🔜

