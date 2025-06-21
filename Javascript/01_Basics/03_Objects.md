# JavaScript Objects

---

## 1. What is a JavaScript Object?

A JavaScript **object** is a collection of key-value pairs, where:

* Keys are strings (or symbols)
* Values can be any data type: strings, numbers, arrays, functions, even other objects

<br>

## 2. Creating an Object

```js
const menu = {
  "VadaPav": 15,
  "PavBhaji": 100,
  "Samosa": 20,
  "Bhaji": 30
};
```

### Output:

```js
console.log(menu);
// { VadaPav: 15, PavBhaji: 100, Samosa: 20, Bhaji: 30 }
```

<br>

## 3. Accessing Properties

### Dot Notation

```js
console.log(menu.VadaPav); // 15
```

### Bracket Notation (useful for dynamic keys)

```js
let item = "Samosa";
console.log(menu[item]); // 20
```

<br>

## 4. Adding Properties

### Dynamically

```js
let newItem = "Lassi";
let price = 40;
menu[newItem] = price;
```

### Directly

```js
menu.PaniPuri = 15;
```

### Output:

```js
console.log(menu);
// { VadaPav: 15, PavBhaji: 100, Samosa: 20, Bhaji: 30, Lassi: 40, PaniPuri: 15 }
```

<br>

## 5. Looping Through Object

### Using `for...in`

```js
for (const key in menu) {
  if (menu.hasOwnProperty(key)) {
    console.log(`${key}: ${menu[key]}`);
  }
}
```

### Output:

```text
VadaPav: 15
PavBhaji: 100
Samosa: 20
Bhaji: 30
Lassi: 40
PaniPuri: 15
```

<br>

## 6. Useful Object Methods

* `Object.keys(obj)` – Returns an array of keys
* `Object.values(obj)` – Returns an array of values
* `Object.entries(obj)` – Returns key-value pairs
* `Object.hasOwnProperty(key)` – Checks if key exists directly on object

### Example:

```js
console.log(Object.keys(menu));     // ["VadaPav", "PavBhaji", "Samosa", "Bhaji", "Lassi", "PaniPuri"]
console.log(Object.values(menu));  // [15, 100, 20, 30, 40, 15]
```

<br>

## Conclusion

| Operation     | Syntax                     |
| ------------- | -------------------------- |
| Create        | `let obj = { key: value }` |
| Access        | `obj.key` or `obj["key"]`  |
| Add / Update  | `obj.newKey = value`       |
| Loop          | `for...in` loop            |
| Keys / Values | `Object.keys(obj)` etc.    |


