In JavaScript, private properties inside a class are declared using the # symbol. By default, private properties cannot be accessed directly outside the class. 
However, you can access private values using getter methods, or manipulate them using setter methods.

## 🔹 Accessing Private Object Values in JavaScript Classes  

### ✅ **Method 1: Using Getter Methods**
You can create a **getter method** to retrieve private property values.

```javascript
class Product {
    #price; // Private property

    constructor(name, price) {
        this.name = name;
        this.#price = price;
    }

    // Getter method to access private property
    getPrice() {
        return this.#price;
    }
}

const laptop = new Product("Laptop", 1200);
console.log(laptop.getPrice()); // ✅ 1200
```

❌ `console.log(laptop.#price);` **(Error: Private field '#price' must be declared in an enclosing class)**

---

### ✅ **Method 2: Using Setter Methods**
If you need to **modify** a private property, use a **setter method**.

```javascript
class Product {
    #price; // Private property

    constructor(name, price) {
        this.name = name;
        this.#price = price;
    }

    // Getter method
    getPrice() {
        return this.#price;
    }

    // Setter method
    setPrice(newPrice) {
        if (newPrice > 0) {
            this.#price = newPrice;
        } else {
            console.log("Price must be positive");
        }
    }
}

const phone = new Product("Phone", 800);
console.log(phone.getPrice()); // ✅ 800

phone.setPrice(900); // Updating price
console.log(phone.getPrice()); // ✅ 900

phone.setPrice(-50); // ❌ "Price must be positive"
```

---

### ✅ **Method 3: Using Static Private Methods**
You can also use **static private methods** to handle private properties.

```javascript
class Product {
    #price;
    static #discountRate = 0.1; // Private static property

    constructor(name, price) {
        this.name = name;
        this.#price = price;
    }

    // Static private method
    static #applyDiscount(price) {
        return price - price * this.#discountRate;
    }

    getDiscountedPrice() {
        return Product.#applyDiscount(this.#price);
    }
}

const tv = new Product("Smart TV", 1500);
console.log(tv.getDiscountedPrice()); // ✅ 1350 (10% discount applied)
```

---

## 🔥 Summary  

| Method | Purpose |
|--------|---------|
| **Getter Method (`getPrice()`)** | Allows controlled access to private values |
| **Setter Method (`setPrice(value)`)** | Enables modifying private properties with validation |
| **Static Private Methods (`#applyDiscount()`)** | Used for private operations that don’t need an instance |

💡 **Best Practice:** Always use **getter and setter methods** to access private values instead of exposing them directly!


