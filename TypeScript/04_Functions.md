# 4. Functions in TypeScript

## 4.1 Function Type Annotations

Functions can have types for parameters and return values.

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

Why this matters:

* Prevents accidental misuse
* Clear function contracts

If return type is omitted:

```ts
function multiply(a: number, b: number) {
  return a * b; // inferred as number
}
```

Best practice:

* Explicit return types for public / API-facing functions

<br>


---

<br>


## 4.2 Optional Parameters

Optional parameters are marked using `?`.

```ts
function greet(name: string, title?: string): string {
  return title ? `${title} ${name}` : name;
}
```

Rules:

* Optional parameters must come **after required ones**

<br>


---

<br>


## 4.3 Default Parameters

Default values automatically make parameters optional.

```ts
function createUser(role: string = "USER") {
  return role;
}
```

Difference from optional:

* Default parameters always have a value

<br>


---

<br>


## 4.4 Rest Parameters

Used when number of arguments is unknown.

```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}
```

Rest parameters:

* Must be an array type
* Only one rest parameter allowed

<br>


---

<br>


## 4.5 Function Types (Variables as Functions)

Functions can be typed as values.

```ts
type MathOperation = (a: number, b: number) => number;

const subtract: MathOperation = (a, b) => a - b;
```

Used heavily in:

* Callbacks
* React props
* Event handlers

<br>


---

<br>


## 4.6 Void vs Never in Functions

### void

* Function completes normally

```ts
function log(msg: string): void {
  console.log(msg);
}
```

### never

* Function never completes

```ts
function fail(message: string): never {
  throw new Error(message);
}
```

Mental model:

* `void` → nothing returned
* `never` → function never reaches end

<br>


---

<br>


## 4.7 Function Overloading

Allows multiple function signatures.

```ts
function getData(id: number): string;
function getData(id: string): string;
function getData(id: number | string): string {
  return `Data for ${id}`;
}
```

Why overloads matter:

* Cleaner API surface
* Stronger type safety

Important rule:

* Only one implementation


<br>


---

<br>



## 4.8 Arrow Functions

Arrow functions support full typing.

```ts
const divide = (a: number, b: number): number => a / b;
```

Used widely in:

* React components
* Callbacks


<br>


---

<br>



## 4.9 Callbacks and Higher-Order Functions

```ts
function process(
  value: number,
  callback: (x: number) => number
): number {
  return callback(value);
}
```

Understanding this is critical for:

* Array methods
* React hooks
* Express middleware


<br>


---

<br>


## 4.10 Common Mistakes in Functions

* Forgetting return types
* Misusing never
* Overloading when union types are enough
* Using any in callbacks



<br>





Next Topic:
**5. Objects and Custom Types**
