# Props and State

## 1. Concept Overview

In React, **components** are the building blocks of the user interface. To manage and pass data, React uses:

* **Props**: Short for "properties"; read-only inputs passed from parent to child components.
* **State**: Local, mutable data managed within a component, which can change over time.

<br>

## 2. Props (Properties)

### Definition

Props are used to pass data **from a parent component to a child component**. They are **immutable** in the child component.
- Imagine it as a Form(react app) with filled data in inputs(props) that is sent formward
- Like stickers or labels on a LEGO block (Componants)
  
### Characteristics

* Read-only
* Passed from parent to child
* Used to configure child components

### Example

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Yash" />;
}
```

### Output

```
Hello, Yash!
```

<br>

## 3. State

### Definition

State is data that a component manages internally. When the state changes, the component re-renders.
i Imagine it like  the mood or memory of a LEGO block(componant) — it can change based on what happens.

### Characteristics

* Mutable
* Scoped to the component
* Triggers re-render on change

### Example

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}
```

### Behavior

* Initial state is set to 0.
* Each click increases the count by 1.
* UI updates to reflect the new count.

<br>

## 4. Visual Model

```
App (Parent Component)
├── Greeting name="Yash"   --> uses props
└── Counter                 --> uses state
```

<br>

## 5. Comparison Table

| Feature       | Props                        | State                      |
| ------------- | ---------------------------- | -------------------------- |
| Mutability    | Immutable (read-only)        | Mutable (via setState)     |
| Scope         | Passed from parent component | Local to the component     |
| Usage         | Customize child component    | Handle dynamic interaction |
| Who controls? | Parent component             | The component itself       |

<br>

## 6. When to Use What?

| Use Case                             | Use Props | Use State |
| ------------------------------------ | --------- | --------- |
| Static data from parent to child     | Yes       | No        |
| Interactive components like counters | No        | Yes       |
| Re-render based on external config   | Yes       | No        |
| Re-render based on user action/input | No        | Yes       |

<br>

Thus

* **Props** are used to configure components from the outside.
* **State** is used to manage internal, changeable data.
* Together, they help React build interactive, modular UIs.
