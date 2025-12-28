# 1. Fundamentals

## 1.1 What is TypeScript (Deep Understanding)

* TypeScript is a **typed superset of JavaScript** created by Microsoft.
* It does **not change how JavaScript works at runtime**.
* TypeScript exists only during **development time**.
* Browsers and Node.js **do not understand TypeScript** directly.
  
Key mental model:
* TypeScript = JavaScript + Type System + Compiler
* After compilation, **all types are erased**.

Example:

```ts
let x: number = 10;
```

Compiled JavaScript:

```js
let x = 10;
```

Important trick:

* If something works in JavaScript but errors in TypeScript, **TypeScript is warning you about a future bug**.

<br>

## 1.2 JavaScript vs TypeScript (Conceptual Difference)

JavaScript behavior:

* Types are checked **at runtime**.
* Errors appear when the program executes.

```js
function add(a, b) {
  return a + b;
}

add(10, "5"); // "105"
```

TypeScript behavior:

* Types are checked **before execution**.

```ts
function add(a: number, b: number): number {
  return a + b;
}

add(10, "5"); // Compile-time error
```

Key takeaway:

* TypeScript prevents **invalid states** from ever reaching runtime.

<br>

## 1.3 TypeScript Compiler (tsc)

* `tsc` is the TypeScript compiler.
* It performs two jobs:

  1. Type checking
  2. Transpiling TypeScript to JavaScript

Common commands:

```bash
tsc index.ts          # compile single file
tsc                   # compile project using tsconfig.json
tsc --watch           # recompile on file change
```

Trick:

* If there are **type errors**, JavaScript may still be emitted unless `noEmitOnError` is enabled.

<br>

## 1.4 Project Initialization and tsconfig.json

Create config file:

```bash
tsc --init
```

Important compiler options you MUST understand:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "module": "commonjs",
    "strict": true,
    "rootDir": "src",
    "outDir": "dist",
    "esModuleInterop": true
  }
}
```

Explanation:

* `target` → JavaScript version output
* `module` → how imports/exports work
* `strict` → enables all strict type checks
* `rootDir` → where TypeScript files live
* `outDir` → where compiled JavaScript goes
* `esModuleInterop` → required for most Node.js libraries

Interview trick:

* **Always enable strict mode** in real projects.

<br>

## 1.5 Strict Mode (Very Important)

When `strict: true`, TypeScript enables:

* `noImplicitAny`
* `strictNullChecks`
* `strictFunctionTypes`
* `strictPropertyInitialization`

Example:

```ts
function greet(name) {
  return "Hello " + name;
}
```

Error:
* Parameter `name` implicitly has type `any`.

Correct version:

```ts
function greet(name: string): string {
  return "Hello " + name;
}
```

Mental note:

* **TypeScript forces you to be explicit where JavaScript is vague**.

<br>

## 1.6 TypeScript Compilation Flow (How It Actually Works)

1. `.ts` files are read by the compiler
2. Types are checked
3. Type errors are reported
4. Types are erased
5. Clean JavaScript is generated

Important understanding:

* Types do NOT exist in runtime
* You cannot check a TypeScript type using `typeof` at runtime

Wrong thinking:

```ts
if (user is Admin) {}
```

Correct thinking:

* Types are for the compiler, not for runtime logic

<br>

## 1.7 Why TypeScript is Critical in MERN

Frontend (React):

* Prevents wrong props usage
* Safer state handling
* Better refactoring

Backend (Node + Express):

* Strong API contracts
* Safer request and response handling
* Fewer runtime crashes

Database (MongoDB):

* Type-safe models
* Predictable data shapes

<br>

## 1.8 Common Beginner Mistakes

* Using `any` to silence errors
* Thinking TypeScript runs in browser
* Skipping strict mode
* Treating types as runtime values

Golden rule:

* If TypeScript complains, **fix the design**, not the error.

<br>

Next Topic:
**2. Type System Basics**
