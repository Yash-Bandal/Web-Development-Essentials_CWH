# 2. Type System Basics

## 2.1 Basic Types

TypeScript provides primitive types to describe simple values.

### 2.1.1 number

* Used for integers and floating-point numbers.
* TypeScript does not differentiate between int and float.

```ts
let age: number = 21;
let price: number = 99.99;
```

Trick:

* `NaN` and `Infinity` are still of type `number`.

<br>

### 2.1.2 string

* Represents textual data.
* Supports template literals.

```ts
let username: string = "Yash";
let message: string = `Hello ${username}`;
```

<br>

### 2.1.3 boolean

* Represents true or false.

```ts
let isLoggedIn: boolean = true;
```

<br>

---

<br>

## 2.2 Arrays

Arrays can be typed in two equivalent ways.

### 2.2.1 Using type[] syntax

```ts
let scores: number[] = [90, 85, 88];
```

<br>


### 2.2.2 Using Array<T> syntax

```ts
let names: Array<string> = ["A", "B", "C"];
```

Best practice:

* Prefer `type[]` for readability unless generics are required.


<br>

---


<br>



## 2.3 Tuples

Tuples allow fixed-length arrays with fixed types at specific positions.

```ts
let user: [number, string] = [1, "Admin"];
```

Key understanding:

* Order and length matter in tuples.

Common mistake:

```ts
user = ["Admin", 1]; // Error
```


<br>

---


<br>



## 2.4 Enums

Enums define a set of named constants.

### 2.4.1 Numeric Enums

```ts
enum Role {
  ADMIN,
  USER,
  GUEST
}

let role: Role = Role.ADMIN;
```

Underlying JavaScript:

* Enums compile to objects.

<br>


### 2.4.2 String Enums (Preferred)

```ts
enum Status {
  SUCCESS = "success",
  ERROR = "error"
}
```

Trick:

* Prefer string enums for debugging and API consistency.


<br>

---


<br>



## 2.5 any vs unknown

### 2.5.1 any

* Disables type checking completely.
* Dangerous if overused.

```ts
let data: any = 10;
data = "text";
data.foo(); // No error
```

<br>


### 2.5.2 unknown

* Safer alternative to any.
* Requires type checking before use.

```ts
let value: unknown = "hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

Golden rule:

* Use `unknown` instead of `any` whenever possible.

<br>


---

<br>


## 2.6 void

Used when a function does not return a value.

```ts
function logMessage(msg: string): void {
  console.log(msg);
}
```

<br>


---

<br>


## 2.7 never

Represents values that never occur.

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

Used in:

* Functions that always throw
* Exhaustive checks

<br>


---

<br>


## 2.8 Type Inference

TypeScript automatically infers types when possible.

```ts
let count = 10; // inferred as number
```

Important:

* Explicit typing is not always required.
* Inference keeps code clean and safe.

<br>


---

<br>


## 2.9 Type Assertions

Used when you know more about the type than TypeScript.

```ts
let input: unknown = "TypeScript";
let length = (input as string).length;
```

Rule:

* Assertions do not change runtime behavior.

<br>


---

<br>



## 2.10 Common Pitfalls in Type System Basics

* Overusing `any`
* Confusing tuples with arrays
* Expecting enums to exist as types at runtime
* Ignoring inference and over-annotating

<br>




Next Topic:
**3. Advanced Types**
