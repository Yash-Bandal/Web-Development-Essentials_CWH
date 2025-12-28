# 3. Advanced Types

## 3.1 Union Types

Union types allow a variable to hold **one of multiple types**.

```ts
let id: number | string;
id = 101;
id = "A101";
```

Why unions matter:

* Models real-world uncertainty
* Common in APIs (id, status, response)

Example (MERN-style):

```ts
type ApiResponse = string | null;
```

<br>


---

<br>


## 3.2 Intersection Types

Intersection types **combine multiple types into one**.

```ts
type User = { name: string };
type Admin = { role: string };

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: "Yash",
  role: "ADMIN"
};
```

Mental model:

* Union = OR (|)
* Intersection = AND (&)

<br>


---

<br>


## 3.3 Literal Types

Literal types restrict values to **exact values**.

```ts
type Status = "success" | "error" | "loading";

let state: Status;
state = "success";
```

Why useful:

* Prevents invalid states
* Perfect for UI states and API responses

<br>


---

<br>


## 3.4 Nullable Types and strictNullChecks

With `strictNullChecks` enabled:

* `null` and `undefined` are NOT allowed unless explicitly stated

```ts
let username: string;
username = null; // Error
```

Correct approach:

```ts
let username: string | null = null;
```

Optional values:

```ts
type User = {
  name: string;
  age?: number;
};
```

Important distinction:

* `age?: number` → number | undefined

<br>


---

<br>


## 3.5 Type Narrowing

Type narrowing refines a union type to a specific type.

### 3.5.1 typeof narrowing

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
```


<br>



### 3.5.2 in operator narrowing

```ts
type Admin = { role: string };
type User = { name: string };

function check(entity: Admin | User) {
  if ("role" in entity) {
    console.log(entity.role);
  }
}
```


<br>



### 3.5.3 instanceof narrowing

```ts
class Dog {
  bark() {}
}

class Cat {
  meow() {}
}

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  }
}
```

<br>


---

<br>


## 3.6 Discriminated Unions (Very Important)

A pattern using literal properties to safely narrow types.

```ts
type Success = {
  status: "success";
  data: string;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type Response = Success | ErrorResponse;

function handle(res: Response) {
  if (res.status === "success") {
    console.log(res.data);
  } else {
    console.log(res.message);
  }
}
```

Why this is powerful:

* Eliminates undefined checks
* Compiler guarantees correctness

<br>


---

<br>


## 3.7 Exhaustive Checking with never

Ensures all cases are handled.

```ts
function assertNever(x: never): never {
  throw new Error("Unexpected value");
}
```

Used with discriminated unions:

```ts
function handle(res: Response) {
  switch (res.status) {
    case "success":
      return res.data;
    case "error":
      return res.message;
    default:
      return assertNever(res);
  }
}
```

Compiler benefit:

* Error if a new case is added but not handled

<br>


---

<br>


## 3.8 Common Mistakes in Advanced Types

* Using unions without narrowing
* Forgetting strictNullChecks behavior
* Overusing intersection types
* Not leveraging discriminated unions

<br>


---

<br>


Next Topic:
**4. Functions in TypeScript**
