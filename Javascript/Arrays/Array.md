# JavaScript Arrays 

```
When to Use Arrays. When to use Objects.
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.
```

<br>

[W3_Schools](https://www.w3schools.com/js/js_array_methods.asp)



---

## 1. Array Creation

**Using Array Literal:**

```js
const cars = ["Saab", "Volvo", "BMW"];
```

**Using Indexing:**

```js
const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
```

**Using `new` Keyword:**

```js
const cars = new Array("Saab", "Volvo", "BMW");
```

---

## 2. Accessing Elements

```js
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
```

---

## 3. Modifying Elements

```js
cars[0] = "Opel";
```

---

## 4. Convert Array to String

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const result = fruits.toString(); // "Banana,Orange,Apple,Mango"

//document.getElementById("demo").innerHTML = fruits.toString();
```

---

## 5. Array vs Object
 Arrays use numbers to access its "elements". In this example, person[0] returns John:
- Normal Objects use names to access its "members". In this example, person.firstName returns John:

```js
const personArray = ["John", "Doe", 46];
const personObject = { firstName: "John", lastName: "Doe", age: 46 };
```

---

## 6. Array Elements Can Be Objects

```js
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
```

---

## 7. Array Properties and Methods

```js
Arr.length       // Number of elements
Arr.sort()       // Sorts the array
```

---

## 8. Looping Through Arrays

### 8.1. Using `for` Loop 

```js
let text = "<ul>";
for (let i = 0; i < fruits.length; i++) {
  text += `<li>${fruits[i]}</li>`;
}
text += "</ul>";
```

### 8.2. Using `forEach()` - 🏷

```js
let text = "<ul>";

fruits.forEach((fruit) => {
   text += "<li>" + fruit + "</li>"; //or`<li>${fruit}</li>`
});

text += "</ul>"; // Close the list

//or

let text = "<ul>";

fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
 }
```

### 8.3. Using `map()`

```js
const listItems = fruits.map(fruit => `<li>${fruit}</li>`);
const text = `<ul>${listItems.join("")}</ul>`;
```
Output:
```
Looping an Array :
Banana
Orange
Apple
Mango
```


<br>

---

<br>



## 9. Array Operations (with Output)

Let's consider the base array:

```js
let fruits = ["Banana", "Orange", "Apple", "Mango"];
```

###  1 Adding Elements

```js
fruits.push("Pineapple");     // Adds at end
console.log(fruits);
// ["Banana", "Orange", "Apple", "Mango", "Pineapple"]

fruits.unshift("Strawberry"); // Adds at beginning
console.log(fruits);
// ["Strawberry", "Banana", "Orange", "Apple", "Mango", "Pineapple"]
```

<br>


###  2 Removing Elements

```js
fruits.pop();   // Removes last
console.log(fruits);
// ["Strawberry", "Banana", "Orange", "Apple", "Mango"]

fruits.shift(); // Removes first
console.log(fruits);
// ["Banana", "Orange", "Apple", "Mango"]
```

<br>


###  3 Splicing / Modifying Elements

index = where, count = how_many <br>


Syntax to Add:
```
arr.splice(index, count , "element1", "element2", .."elementn")
```

```js
fruits.splice(2, 0, "Peach", "Grapes"); 
console.log(fruits);
// ["Banana", "Orange", "Peach", "Grapes", "Apple", "Mango"]
```


Syntax to Remove:
```
arr.splice(index, count)
```
```js
fruits.splice(1, 1);  // Remove 1 element at index 1
console.log(fruits);
// ["Banana", "Peach", "Grapes", "Apple", "Mango"]
```

<br>

###  4 Searching Elements

```js
console.log(fruits.includes("Apple"));  
// true

console.log(fruits.indexOf("Apple"));   
// 3
```

<br>

### 5  Copying / Combining / Extracting

```js
const sliced = fruits.slice(1, 3);
console.log(sliced);
// ["Peach", "Grapes"]

const combined = fruits.concat(["Kiwi", "Watermelon"]);
console.log(combined);
// ["Banana", "Peach", "Grapes", "Apple", "Mango", "Kiwi", "Watermelon"]
```

<br>


###  6 Iterating & Transforming

```js
const upper = fruits.map(fruit => fruit.toUpperCase());
console.log(upper);
// ["BANANA", "PEACH", "GRAPES", "APPLE", "MANGO"]

const long = fruits.filter(fruit => fruit.length > 5);
console.log(long);
// ["Banana", "Grapes"]
```

<br>


### 7 Sorting and Reversing

```js
const sorted = [...fruits].sort();
console.log(sorted);
// ["Apple", "Banana", "Grapes", "Mango", "Peach"]

const reversed = [...fruits].reverse();
console.log(reversed);
// ["Mango", "Apple", "Grapes", "Peach", "Banana"]
```

<br>

###  Other Methods

```js
const joined = fruits.join(", ");
console.log(joined);
// "Banana, Peach, Grapes, Apple, Mango"

const found = fruits.find(fruit => fruit.length > 5);
console.log(found);
// "Banana"
```

<br>

---

<br>

0.  Array map()....when you need to create array new with certain pattern specifically
1. JavaScript Array map()
2. The map() method creates a new array by performing a function on each array element.
3. The map() method does not execute the function for array elements without values.
4. The map() method does not change the original array.


<br>

---

<br>

<div align = "center">
<img src = "https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/a17bb56d5a4520f84a9bd50ed6e5d6013c1cdb3a/Javascript/Arrays/ArrayManip.jpeg" width = 550>
</div>

## 10. Advanced & Useful Methods

JavaScript provides a rich set of array methods that make working with data more powerful and expressive.

###  Commonly Used Methods

These are frequently used for transformation, iteration, and computation:

* `forEach()` – Executes a function for each array element.
* `map()` – Returns a new array after applying a function to each element.
* `flatMap()` – Maps and flattens the result into a single array.
* `filter()` – Filters elements based on a condition.
* `reduce()` – Reduces array to a single value (e.g., sum, max).
* `reduceRight()` – Similar to `reduce()` but from right to left.

###  Less Commonly Used Methods

These are useful in specific cases:

* `some()` – Checks if **any** array elements pass a test.
* `every()` – Checks if **all** array elements pass a test.
* `from()` – Converts iterable or array-like objects into arrays.
* `keys()` – Returns an iterator of array keys.
* `entries()` – Returns key/value pairs.
* `with()` – Returns a new array with one element replaced immutably.
* Spread Syntax `...` – Expands arrays into elements or copies arrays.

###  Related Topics
* Basic Array Methods (e.g. `push`, `pop`, `shift`)
* Search Methods (`includes`, `find`, `indexOf`)
* Sort Methods (`sort`, `reverse`)

 **Reference:** [Array Iteration - W3Schools](https://www.w3schools.com/js/js_array_iteration.asp)

<br>

---

<br>

## 11. Code Examples

###  1. `forEach()` - Execute for Each Element

```js
//The forEach() method calls a function (a callback function) once for each array element.
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}



const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value + "<br>";
}
```

<br>

###  2. `map()` - Transform and Return New Array

```js

// This example multiplies each array value by 2:
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}



const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}


//with html
let upper = fruits.map(fruit => `<li>${fruit.toUpperCase()} </li>`)
let text = `<ul> ${upper.join("")}</ul>`
document.getElementById("demo").innerHTML = text; 
```

<br>

### 3.  `flatMap()` - Map + Flatten One Level

The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

```js
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);
// Output: [1,10,2,20,3,30,4,40,5,50,6,60]
```

<br>

###  4. `filter()` - Filter Based on Condition

```js
const ages = [32, 33, 16, 40];
const adults = ages.filter(age => age >= 18);
```

<br>

###  5. `reduce()` - Reduce to Single Value

```js
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((acc, val) => acc + val, 0); // Output: 15
```

<br>

###  6. `reduceRight()` - Reduce from Right to Left

```js
const numbers = [1, 2, 3, 4];
const result = numbers.reduceRight((acc, val) => acc - val); // Output: -2
```

<br>

###  7. `some()` / `every()` - Test Conditions

```js
const numbers = [1, 2, 3, 4, 5];
numbers.some(x => x > 3);  // true
numbers.every(x => x > 0); // true
```

<br>

### 8. `keys()` / `entries()` - Iterators

```js
const fruits = ["Banana", "Orange"];
for (let key of fruits.keys()) console.log(key); // 0, 1
for (let [index, val] of fruits.entries()) console.log(index, val);
```

<br>

###  9. `with()` (Immutable Element Update)

```js
const arr = [1, 2, 3];
const newArr = arr.with(1, 99); // [1, 99, 3]
```

<br>

### 10. Spread Operator `...`

```js
const arr = [1, 2, 3];
const copy = [...arr]; // Clone array
const merged = [...arr, 4, 5];
```

<br>

---

<br>

## Conclusion

| Operation | Method                            | Description                              |
| --------- | --------------------------------- | ---------------------------------------- |
| Add       | `push`, `unshift`                 | Add elements to end or beginning         |
| Remove    | `pop`, `shift`                    | Remove from end or beginning             |
| Modify    | `splice`, `with`                  | Add/remove or immutably replace elements |
| Access    | `indexOf`, `includes`             | Search elements                          |
| Copy      | `slice`, `concat`, Spread (`...`) | Extract or merge arrays                  |
| Transform | `map`, `filter`, `flatMap`        | Modify or filter elements                |
| Reduce    | `reduce`, `reduceRight`           | Reduce to a single value                 |
| Sort      | `sort`, `reverse`                 | Reorder elements                         |
| Join      | `join`                            | Convert to string                        |
| Iterate   | `forEach`, `map`, `entries`       | Apply functions or loop with pairs       |
| Find/Test | `find`, `some`, `every`           | Find or test conditions                  |


<br>

---

<br>

