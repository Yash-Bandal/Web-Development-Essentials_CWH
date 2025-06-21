# Lesson 5: Prototypes & Prototype Inheritance

## 🚀 Introduction
In JavaScript, **prototypes** enable objects to inherit properties and methods from other objects. This is a key concept in JavaScript’s object-oriented approach, allowing for **efficient memory usage** and **code reusability**.

---

## 🔹 1. What are Prototypes?
Every JavaScript object has an internal property called `[[Prototype]]`, which points to another object, known as its **prototype**. The prototype acts as a blueprint from which objects can inherit properties and methods.

### Example:
```javascript
function User(name) {
    this.name = name;
}

User.prototype.greet = function() {
    console.log(`Hello, ${this.name}!`);
};

const user1 = new User("Alice");
user1.greet(); // Output: Hello, Alice!
```
Here, `greet()` is defined on `User.prototype`, so all instances of `User` can access it.

---

## 🔹 2. How Prototype Inheritance Works
Prototype inheritance allows one object to inherit properties from another.

### Example:
```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log(`Hi, I am ${this.name}.`);
};

function Employee(name, role) {
    Person.call(this, name); // Call the parent constructor
    this.role = role;
}

Employee.prototype = Object.create(Person.prototype); // Inherit from Person
Employee.prototype.constructor = Employee;

Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.role}.`);
};

const emp1 = new Employee("Bob", "Developer");
emp1.sayHello(); // Output: Hi, I am Bob.
emp1.work();     // Output: Bob is working as a Developer.
```
Here, `Employee` inherits from `Person`, allowing `Employee` instances to access `sayHello()`.

---

## 🔹 3. Modifying Prototypes
Prototypes can be modified at runtime, but this should be done carefully to avoid unexpected behavior.

### Adding a new method:
```javascript
Person.prototype.sayBye = function() {
    console.log(`${this.name} says bye!`);
};

emp1.sayBye(); // Output: Bob says bye!
```

### Overriding a method:
```javascript
Employee.prototype.sayHello = function() {
    console.log(`Hello, I am ${this.name}, a ${this.role}.`);
};

emp1.sayHello(); // Output: Hello, I am Bob, a Developer.
```

---

## 🔹 4. Prototype Chain
JavaScript objects have a **prototype chain**, meaning if a property or method is not found in an object, JavaScript looks up the prototype chain until it finds it (or reaches `null`).

### Example:
```javascript
console.log(emp1.hasOwnProperty("name")); // true
console.log(emp1.hasOwnProperty("sayHello")); // false (it's inherited)
```

Here, `hasOwnProperty()` is found in `Object.prototype`, which is part of the prototype chain.

---

## 🔹 5. Applications in Web Development
- **Inheritance in UI Components** (e.g., React Components, class-based approach)
- **Optimizing Memory Usage** (common methods shared via prototypes instead of duplicating them)
- **Custom Prototypes for API Wrappers** (e.g., extending built-in objects for utilities)

---

## 🎯 Conclusion
- **Prototypes allow objects to inherit properties and methods.**
- **Prototype chaining helps JavaScript efficiently look up properties.**
- **Prototypes are widely used in frameworks like React and Node.js.**

🚀 Next: **Lesson 6 - ES6 Classes: Modern OOP in JavaScript**

