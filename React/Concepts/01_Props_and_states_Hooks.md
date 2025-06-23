# Props and State

---

In React, **components** are the building blocks of the user interface. To manage and pass data, React uses:

* **Props**: Short for "properties"; read-only inputs passed from parent to child components.
* **State**: Local, mutable data managed within a component, which can change over time.

 Visual Model
```
App (Parent Component)
├── Greeting name="Yash"   --> uses props
└── Counter                 --> uses state
```
---

<br>

# 1. Props (Properties)

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

---

<br>

## Proptypes (Compliance checkers)
PropTypes are a type-checking feature built into React (via the prop-types package) that allows you to validate the types of props passed to your components during development.

---
> 💡 Think of them as runtime checks that warn you in the console if the wrong type of prop is passed to a component.
---

```js
import PropTypes from 'prop-types';
//Componant = created componant
// all inside are props passed


// Basic types
Component.propTypes = {
  text: PropTypes.string,
  count: PropTypes.number,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  data: PropTypes.object,
  children: PropTypes.node,       // anything that can be rendered
  element: PropTypes.element      // only React elements
};

// Required props
Component.propTypes = {
  name: PropTypes.string.isRequired
};

// Array types
Component.propTypes = {
  tags: PropTypes.array,                         // any array
  scores: PropTypes.arrayOf(PropTypes.number),   // array of numbers
};

// Object with shape
Component.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    isAdmin: PropTypes.bool
  })
};

// One of specific values (enum-like)
Component.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

// One of many types
Component.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

// Object with flexible keys and value types
Component.propTypes = {
  options: PropTypes.objectOf(PropTypes.string)
};
```

### Default Props

Passed like default attribute inside functions
- use `isrequired` for strong compliance 

```js
Component.defaultProps = {
  text: 'Hello',
  count: 0,
  isActive: false,
  tags: [],
  onClick: () => {}
};

```
<br>

---

<br>

# 2. State

### Definition
State is data that a component manages internally. When the state changes, the component re-renders.
i Imagine it like  the mood or memory of a LEGO block(componant) — it can change based on what happens.

### Import Using:
```jsx
import { useState } from 'react';
```

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



<br>








# React Hooks

## 1. What Are Hooks?
- **Hooks** are functions that let you use **React state and lifecycle features** in functional components.
- Introduced in **React 16.8**.

## 2. Commonly Used Hooks

### 2.1 `useState`
- Adds state to functional components.
```js
const [var, setVar] = useState('Default Value/ number');
```

### 2.2 `useEffect`
- Handles **side effects** (e.g., API calls, timers).
```js
useEffect(() => {
  console.log('Component mounted');
}, []); // Empty dependency = run once
```

### 2.3 `useContext`
- Accesses values from React **Context API**.
```js
const value = useContext(MyContext);
```

### 2.4 `useRef`
- Stores a **mutable reference** that doesn’t trigger re-renders.
```js
const inputRef = useRef(null);
```

### 2.5 `useMemo`
- **Caches computed values** to optimize performance.
```js
const memoizedValue = useMemo(() => computeExpensive(), [dependencies]);
```

### 2.6 `useCallback`
- Returns a **memoized callback** function.
```js
const memoizedCallback = useCallback(() => doSomething(), [dependencies]);
```

### 2.7 `useReducer`
- Alternative to `useState` for complex state logic.
```js
const [state, dispatch] = useReducer(reducerFn, initialState);
```

## 3. Rules of Hooks
- Only call Hooks at the **top level** of functions (not inside loops or conditions).
- Only call Hooks from **React functions** (components or custom hooks).

## 4. Custom Hooks
- You can create your own reusable hooks.
```js
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}
```

| Hook        | Purpose                                 |
|-------------|------------------------------------------|
| useState    | Manage local component state             |
| useEffect   | Run side effects                         |
| useContext  | Access context values                    |
| useRef      | Persistent mutable value (no re-render)  |
| useMemo     | Cache expensive computation              |
| useCallback | Cache function references                |
| useReducer  | Complex state management                 |

<br>

---

<br>

## Conclusion: 

### Comparison Table

| Feature       | Props                        | State                      |
| ------------- | ---------------------------- | -------------------------- |
| Mutability    | Immutable (read-only)        | Mutable (via setState)     |
| Scope         | Passed from parent component | Local to the component     |
| Usage         | Customize child component    | Handle dynamic interaction |
| Who controls? | Parent component             | The component itself       |

<br>

### When to Use What?

| Use Case                             | Use Props | Use State |
| ------------------------------------ | --------- | --------- |
| Static data from parent to child     | Yes       | No        |
| Interactive components like counters | No        | Yes       |
| Re-render based on external config   | Yes       | No        |
| Re-render based on user action/input | No        | Yes       |





