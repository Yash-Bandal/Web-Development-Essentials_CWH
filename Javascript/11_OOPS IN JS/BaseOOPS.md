# 📌 Object-Oriented Programming (OOP) in JavaScript for Full-Stack Development

## 🚀 Introduction
Object-Oriented Programming (OOP) is a programming paradigm based on the concept of **objects**, which can contain data (properties) and methods (functions). JavaScript, though prototype-based, supports OOP through **constructors, classes, and inheritance**, making it essential for full-stack development.

### ✅ Why Use OOP in JavaScript?
- **Code Reusability** – Write once, use multiple times
- **Encapsulation** – Keep data secure inside objects
- **Abstraction** – Hide complexity from users
- **Inheritance** – Extend functionality without modifying existing code
- **Polymorphism** – Use different implementations of the same interface

---

# 📌 1. Objects & Object Literals

### 🔹 Creating Objects with Object Literals
```javascript
const user = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

user.greet();
```
✅ **Output:** `Hello, my name is Alice`

### 🔹 Adding & Removing Properties
```javascript
user.email = "alice@example.com"; // Add property
delete user.age; // Remove property
```

---

# 📌 2. The `this` Keyword

### 🔹 `this` in Object Methods
```javascript
const person = {
  name: "Bob",
  speak() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

person.speak();
```
✅ **Output:** `Hello, I'm Bob`

### 🔹 `this` in Arrow Functions (Does NOT Bind `this`)
```javascript
const person2 = {
  name: "Charlie",
  speak: () => console.log(`Hello, I'm ${this.name}`)
};

person2.speak();
```
✅ **Output:** `Hello, I'm undefined`

---

# 📌 3. Constructor Functions

### 🔹 Creating Objects Using Constructors
```javascript
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

const car1 = new Car("Tesla", "Model X");
console.log(car1.brand); // Tesla
```

---

# 📌 4. Prototypes & Inheritance

### 🔹 Using Prototypes to Add Methods
```javascript
Car.prototype.getDetails = function() {
  return `${this.brand} - ${this.model}`;
};

console.log(car1.getDetails());
```
✅ **Output:** `Tesla - Model X`

---

# 📌 5. ES6 Classes - Modern OOP in JavaScript

### 🔹 Creating a Class
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log("Animal Sound");
  }
}

const dog = new Animal("Dog");
dog.makeSound();
```
✅ **Output:** `Animal Sound`

---

# 📌 6. Class Inheritance

### 🔹 Extending a Class
```javascript
class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}

const myDog = new Dog("Buddy");
myDog.makeSound();
```
✅ **Output:** `Woof!`

---

# 📌 7. Getters & Setters

### 🔹 Using Getters and Setters
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value > 0) {
      this._age = value;
    }
  }
}

const user1 = new Person("David", 30);
console.log(user1.age); // 30
```

---

# 📌 8. Static Methods & Properties

### 🔹 Using Static Methods
```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 10));
```
✅ **Output:** `15`

---

# 📌 9. Encapsulation & Private Properties

### 🔹 Using `#` for Private Properties
```javascript
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
console.log(account.getBalance()); // 1000
console.log(account.#balance); // ❌ Error
```

---

# 📌 10. OOP in Full Stack Development

### 🔹 Using OOP in Node.js (Backend)
```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  save() {
    console.log(`Saving user ${this.name} to database`);
  }
}

const user2 = new User("Alice", "alice@example.com");
user2.save();
```

### 🔹 OOP in Frontend (React Example)
```javascript
class Component {
  constructor(props) {
    this.props = props;
  }
}

class Button extends Component {
  render() {
    return `<button>${this.props.label}</button>`;
  }
}

const myButton = new Button({ label: "Click Me" });
console.log(myButton.render());
```
✅ **Output:** `<button>Click Me</button>`

---

# 🎯 Conclusion
✅ **Key Takeaways:**
- JavaScript OOP uses **prototypes and classes**.
- **Encapsulation** helps protect data.
- **Inheritance** allows reuse of code.
- **Polymorphism** enables flexible method overriding.
- **OOP is widely used in Full-Stack JavaScript** (Node.js, React, Next.js).

🚀 **Now you're ready to use OOP in JavaScript for real-world full-stack development!** 🎉
