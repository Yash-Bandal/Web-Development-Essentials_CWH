# JavaScript Strings Notes

## Console-Based Examples

### 1. Access characters with indices

```js
let a = "YashBandal";
console.log(a[0]); // Output: Y
console.log(a[1]); // Output: a
console.log(a[2]); // Output: s
console.log(a[3]); // Output: h
console.log(a[10]); // Output: undefined ..the ele that doesnt exist..no address like thing
console.log(a.length); // Output: 10
```

### 2. String concatenation and template literals

```js
let real_name = "Lala";
console.log("His name is " + real_name); // Output: His name is Lala

let friend = "Jethalal";
console.log("His friends name is " + friend); // Output: His friends name is Jethalal 
console.log('His friends name is ${friend}'); // Output: His friends name is ${friend}  //no "" or ''  use ``
console.log(`His friends "name" is " ${friend}`); // Output: His friends "name" is " Jethalal
// '' diff `` diff...its called template literals  ..it also allows u to use "" inside clg
```

### 3. Carriage Return behaviour

```js
process.stdout.write("Loading...\rDone!");
// Output on terminal: Done! (overwrites "Loading...")
/*
It resets the position of the cursor to the start of the current line.
Characters written after \r overwrite the characters already on that line.
Usage in JavaScript:

It's typically used in console outputs or strings, often in scenarios like overwriting progress indicators.
*/
```

### 4. String functions

```js
let b = "Bahubali";
let c = " Anna";
console.log(b.toUpperCase()); // Output: BAHUBALI
console.log(b.toLowerCase()); // Output: bahubali
console.log(b.length); // Output: 8
console.log(b.slice(0, 5)); // Output: Bahub
console.log(b.slice(1)); // Output: ahubali
console.log(b.replace("Bahu", "Thanga")); // Output: Thangabali
console.log(b.concat(c)); // Output: Bahubali Anna
console.log(b.concat(c, " Shetty")); // Output: Bahubali Anna Shetty
```

### 5. Trimming whitespaces
Only affects the start and end of the string, not spaces in between.
```js
let wspc = "A b C d E";
console.log(wspc.trim()); // Output: A b C d E

let tz = "      Dada      ";
console.log(tz.trim()); // Output: Dada
```

### 6. Immutability

```js

//Note : STRINGS ARE MUTABLE..
//you can make chanes,..but on a copy of str..eg
console.log(b);  //see at last b remains same..no changes on actual..

// Output: Bahubali (remains unchanged)

//you  can see more function inside inspect console...
//type str = "example"
//str.    ...all sugestions
//other charAt and all..not much used in webdev..but part of js
//if ou need a operation ..you cant remember..just use google..or vscode suggestions

```

---

## DOM-Based and Browser-Side Examples

### 1. String Creation

```html
<script>
const singleQuote = 'Hello, World!';
const doubleQuote = "Hello, World!";
document.getElementById("demo").innerHTML = singleQuote; // Output on page: Hello, World!
const templateLiteral = `Hello, World!`;
console.log(templateLiteral); // Output: Hello, World!
</script>
```

### 2. Accessing Characters

```html
<script>
const str = "JavaScript";
console.log(str[0]); // Output: J
console.log(str.charAt(2)); // Output: v
</script>
```

### 3. String Length

```html
<script>
const length = str.length;
console.log(`Length of string: ${length}`); // Output: Length of string: 10
</script>
```

### 4. Changing Case

```html
<script>
const upperCase = str.toUpperCase();
const lowerCase = str.toLowerCase();
console.log(upperCase); // Output: JAVASCRIPT
console.log(lowerCase); // Output: javascript
</script>
```

### 5. Searching in Strings

```html
<script>
const phrase = "JavaScript is fun";
console.log(phrase.indexOf("is")); //Finds the first occurrence: Output: 11
console.log(phrase.lastIndexOf("a")); // Finds the last occurrence: Output: 3
console.log(phrase.includes("fun")); // Checks if substring exists: Output: true
console.log(phrase.startsWith("Java")); // Output: true
console.log(phrase.endsWith("fun")); // Output: true
</script>
```

### 6. Extracting Substrings

```html
<script>
console.log(phrase.slice(0, 10));     // Extracts from index 0 to 9: Output: "JavaScript"
console.log(phrase.substring(4, 10)); // Extracts from index 0 to 9: Output: "JavaScript"
console.log(phrase.substr(4, 6));     // Extracts 6 characters starting at index 4: Output: "Script"
</script>
```

### 7. Replacing Substrings

```html
<script>
const newPhrase = phrase.replace("fun", "awesome");
console.log(newPhrase); // Output: JavaScript is awesome
</script>
```

### 8. Splitting Strings

```html
<script>
const words = phrase.split(" ");
console.log(words); // Output: ["JavaScript", "is", "fun"]
</script>
```

### 9. Trimming Whitespaces

```html
<script>
const padded = "   JavaScript   ";
console.log(padded.trim()); // Output: JavaScript
</script>
```

### 10. String Concatenation

```html
<script>
const part1 = "Hello";
const part2 = "World";
console.log(part1 + " " + part2); // Output: Hello World
console.log(`${part1} ${part2}`); // Output: Hello World
</script>
```

### 11. Repeating Strings

```html
<script>
const repeated = "Ha! ".repeat(3);
console.log(repeated); // Output: Ha! Ha! Ha! 
</script>
```

### 12. Escape Characters

```html
<script>
const escaped = 'I\'m learning JavaScript!';
console.log(escaped); // Output: I'm learning JavaScript!
</script>
```

### 13. Comparing Strings

```html
<script>
console.log("apple" < "banana"); // Output: true
console.log("Zebra".localeCompare("apple")); // Output: -1
</script>
```

### 14. Template Literals

```html
<script>
const multiLine = `This is\non multiple\nlines.`;
const embedded = `${str} is amazing!`;
console.log(multiLine); // Output (multiline text)
console.log(embedded); // Output: JavaScript is amazing!
</script>
```

### 15. Advanced Methods

```html
<script>
const regexTest = phrase.match(/\bis\b/);
console.log(regexTest); // Output: ["is"]

const paddedStart = str.padStart(15, "*");
const paddedEnd = str.padEnd(15, "*");
console.log(paddedStart); // Output: *****JavaScript
console.log(paddedEnd);   // Output: JavaScript*****
</script>
```

### 16. Practical Example - URL Slug

```html
<script>
const title = "Learn JavaScript in 30 Days!";
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");
console.log(slug); // Output: learn-javascript-in-30-days
</script>
```
