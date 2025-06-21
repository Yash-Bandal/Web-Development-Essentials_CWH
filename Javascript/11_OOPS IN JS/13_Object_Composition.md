# 🎭 Lesson 13: Object Composition (Alternative to Inheritance)

## 📌 Introduction
Object Composition is an alternative to classical inheritance in JavaScript. Instead of creating deep inheritance chains, we build objects by combining smaller, reusable pieces of functionality. This approach improves **flexibility**, **code reuse**, and **maintainability**.

In this lesson, we'll explore Object Composition in the context of our **E-commerce platform**, demonstrating how it helps avoid issues related to deep inheritance hierarchies.

---

## 🔹 Why Use Object Composition?

### ❌ Problems with Inheritance:
- **Tightly coupled code**: Changes in parent classes affect all subclasses.
- **Deep hierarchies**: Can make debugging and refactoring difficult.
- **Inflexibility**: An object can only inherit from one class.

### ✅ Advantages of Composition:
- **More flexible**: Objects can include multiple behaviors dynamically.
- **Reusability**: Functions can be shared without creating unnecessary hierarchies.
- **Better maintainability**: Code is easier to extend and modify.

---

## 🔹 Implementing Object Composition
### 🔥 Example: E-Commerce Platform

#### 🏗️ Step 1: Define Reusable Behaviors (Mixins)
```js
// Define common behaviors as separate functions
const canAddToCart = (product) => ({
    addToCart: () => console.log(`${product.name} added to cart!`)
});

const canBeReviewed = (product) => ({
    review: (rating) => console.log(`Review for ${product.name}: ${rating} stars`)
});

const canBeDiscounted = (product) => ({
    applyDiscount: (discount) => {
        product.price -= product.price * (discount / 100);
        console.log(`${product.name} now costs $${product.price}`);
    }
});
```

#### 🏗️ Step 2: Create a Function to Compose Objects
```js
const createProduct = (name, price) => {
    let product = { name, price };
    
    return Object.assign(
        product,
        canAddToCart(product),
        canBeReviewed(product),
        canBeDiscounted(product)
    );
};
```

#### 🏗️ Step 3: Use the Composition Model
```js
const laptop = createProduct("Gaming Laptop", 1500);
laptop.addToCart(); // Gaming Laptop added to cart!
laptop.review(5); // Review for Gaming Laptop: 5 stars
laptop.applyDiscount(10); // Gaming Laptop now costs $1350
```

---

## 🔹 When to Use Composition Over Inheritance?
| Situation | Use Inheritance | Use Composition |
|-----------|----------------|----------------|
| Objects share a common base behavior | ✅ | 🚫 |
| Objects need multiple independent features | 🚫 | ✅ |
| You want flexible and reusable code | 🚫 | ✅ |
| Deep hierarchies cause maintainability issues | 🚫 | ✅ |

---

## 🔹 Conclusion
Object Composition provides a **better alternative to inheritance** when dealing with complex applications like **E-commerce platforms**. It allows us to build **modular, reusable, and maintainable** code by composing objects dynamically instead of relying on rigid class hierarchies.

---

📌 **Next Lesson: OOP in Full Stack Development** 🚀

