# 5. Objects and Custom Types

## 5.1 Object Type Annotations

Objects can be typed by explicitly describing their shape. 

```ts
const user: { name: string; age: number } = {
  name: "Yash",
  age: 21
};
```

Key understanding:

* Object types describe **structure**, not implementation
* Extra or missing properties cause errors

```ts
const user = {
  name: "Yash",
  age: 21,
  role: "admin"
}; // valid
```

But:

```ts
const user: { name: string; age: number } = {
  name: "Yash"
}; // Error: missing age
```

---

## 5.2 Type Aliases

Type aliases allow you to give a name to any type.

```ts
type User = {
  name: string;
  age: number;
};

const u1: User = { name: "A", age: 22 };
```

Why type aliases matter:

* Reusability
* Cleaner code
* Easier refactoring

Type aliases can represent:

* Objects
* Unions
* Intersections
* Primitives

```ts
type ID = number | string;
```

---

## 5.3 Interfaces

Interfaces are used to define object shapes.

```ts
interface User {
  name: string;
  age: number;
}

const u2: User = { name: "B", age: 23 };
```

Important:

* Interfaces are **open** (can be extended)
* Type aliases are **closed**

---

## 5.4 Interfaces vs Type Aliases (Very Important)

### Use interface when:

* Defining object shapes
* Working with classes
* Expecting extension

```ts
interface Admin extends User {
  role: string;
}
```

### Use type when:

* Creating unions or intersections
* Aliasing primitives

```ts
type Status = "success" | "error";
```

Interview summary:

* Interfaces → object-oriented
* Types → flexible and powerful

---

## 5.5 Optional Properties

Optional properties use `?`.

```ts
interface Profile {
  bio?: string;
}
```

Meaning:

* Property may be absent
* Type becomes `string | undefined`

---

## 5.6 Readonly Properties

Prevents reassignment.

```ts
interface Config {
  readonly apiKey: string;
}
```

Attempting to change:

```ts
config.apiKey = "new"; // Error
```

Used in:

* Constants
* Props in React

---

## 5.7 Index Signatures

Used when property names are not known in advance.

```ts
interface Errors {
  [key: string]: string;
}
```

Example:

```ts
const errors: Errors = {
  email: "Invalid email",
  password: "Too short"
};
```

---

## 5.8 Excess Property Checks

TypeScript checks extra properties in object literals.

```ts
interface User {
  name: string;
}

const u: User = {
  name: "X",
  age: 20 // Error
};
```

Workaround:

* Assign to variable first
* Or use index signature

---

## 5.9 Common Mistakes with Objects

* Confusing optional with nullable
* Using type when interface is better
* Overusing index signatures
* Ignoring excess property checks

---

Next Topic:
**6. Classes and OOP in TypeScript**
