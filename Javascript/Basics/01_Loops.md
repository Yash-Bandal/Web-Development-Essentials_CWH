# Loops

## Console Output

```js
console.log("I am inside console ...");
// Output: I am inside console ...
```

---

## For Loops

### 1. Normal for loop with array

```js
let Array = [2, 4, , 8, 10];
for (let i = 0; i < Array.length; i++) {
    console.log(i, ":", Array[i]);
}
/*
Output:
0 : 2
1 : 4
2 : undefined
3 : 8
4 : 10
*/
```

### 2. Loop through object using for...in
type forin ...emmet

```js
let obj = {
    name: "Yash",
    age: 20,
    city: "Pune"
};

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, ":", element);
    }
}
/*
Output:
name : Yash
age : 20
city : Pune
*/
```

### 3. Range-style loop using for...in

```js
for (const key in obj) {
    console.log(key, ":", obj[key]);
}
/*
Output:
name : Yash
age : 20
city : Pune
*/
```

### 4. Incorrect loop over string using colon (Syntax Error)
Like in cp we use `:`, its not there in js
```js
// for(const c : "YashBandal") {
//     console.log(c);
// }
// Error: SyntaxError: Unexpected token ':'
```

### 5. Correct loop over string using for...of

```js
for (const c of "YashBandal") {
    console.log(c);
}
/*
Output:
Y
a
s
h
B
a
n
d
a
l
*/
```

### 6. for...in on object to get keys

```js
let object = {a: 1, b: 2, c: 3};
for (const element in object) {
    console.log(element);
}
/*
Output:
a
b
c
*/
```

### Summary

```text
for     - for numbers, arrays
for...in - for objects (keys)
for...of - for strings (characters), arrays
```

---

## While Loop

```js
let i = 0; // initialization
while (i < 10) { // condition
    console.log(i);
    i++; // increment
}
/*
Output:
0
1
2
3
4
5
6
7
8
9
*/
```

---

## Do While Loop

```js
let i = 10; // initialization
do {
    console.log(i); // printed at least once
    i = i + 2; // increment
} while (i < 5);
/*
Output:
10
*/
```
